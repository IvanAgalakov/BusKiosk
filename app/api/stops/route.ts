import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';
import * as readline from 'readline';

const GTFS_DIR = path.resolve('CT_GTFS');
const STOPS_FILE = path.join(GTFS_DIR, 'stops.txt');
const STOP_TIMES_FILE = path.join(GTFS_DIR, 'stop_times.txt');
const TRIPS_FILE = path.join(GTFS_DIR, 'trips.txt');
const ROUTES_FILE = path.join(GTFS_DIR, 'routes.txt');

// Cache
const cache: Map<string, { timestamp: number, data: any }> = new Map();
// const CACHE_EXPIRATION_TIME = 60 * 10000; make it never expire

function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371; // Earth radius
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

async function getStopsForRouteNearLocation(lat: number, lon: number, distance: number): Promise<Map<string, any[]>> {
  // Cache key based on lat, lon, distance
  const cacheKey = `${lat},${lon},${distance}`;
  const cachedResult = cache.get(cacheKey);

  // If cache is available and not expired
  if (cachedResult) { // ***add this back to have it expire: && Date.now() - cachedResult.timestamp < CACHE_EXPIRATION_TIME
    return cachedResult.data;
  }

  const routeStopsMap = new Map<string, any[]>();
  const stopsMap = new Map<string, any>();

  // Read stops
  const stopsFileContent = fs.readFileSync(STOPS_FILE, 'utf-8');
  const stopsParser = parse({ columns: true, skip_empty_lines: true });
  stopsParser.on('data', (row: any) => {
    const stopLat = parseFloat(row['stop_lat']);
    const stopLon = parseFloat(row['stop_lon']);
    const dist = haversine(lat, lon, stopLat, stopLon);
    
    if (!isNaN(stopLat) && !isNaN(stopLon) && dist <= distance) {
      stopsMap.set(row['stop_id'], {
        stop_name: row['stop_name'],
        stop_lat: row['stop_lat'],
        stop_lon: row['stop_lon'],
        distance: dist
      });
    }
  });
  stopsParser.write(stopsFileContent);
  stopsParser.end();

  // Read routes
  const routesMap = new Map<string, string>();
  const routesFileContent = fs.readFileSync(ROUTES_FILE, 'utf-8');
  const routesParser = parse({ columns: true, skip_empty_lines: true });
  routesParser.on('data', (row: any) => {
    routesMap.set(row['route_id'], `${row['route_short_name']} - ${row['route_long_name']}`);
  });
  routesParser.write(routesFileContent);
  routesParser.end();

  // Prepare trips data
  const tripsWithRouteAndDirection = new Map<string, { routeId: string, directionId: string, headsign: string }>();
  const tripsFileContent = fs.readFileSync(TRIPS_FILE, 'utf-8');
  const tripsParser = parse({ columns: true, skip_empty_lines: true });
  tripsParser.on('data', (row: any) => {
    tripsWithRouteAndDirection.set(row['trip_id'], {
      routeId: row['route_id'],
      directionId: row['direction_id'],
      headsign: row['trip_headsign']
    });
  });
  tripsParser.write(tripsFileContent);
  tripsParser.end();

  // Prepare stop times data
  const stopTimesMap = new Map<string, { arrival_time: string, departure_time: string, stop_sequence: number, stop_id: string }[]>();
  const stopTimesFileContent = fs.readFileSync(STOP_TIMES_FILE, 'utf-8');
  const stopTimesParser = parse({ columns: true, skip_empty_lines: true });
  stopTimesParser.on('data', (row: any) => {
    const tripId = row['trip_id'];
    const stopId = row['stop_id'];
    
    if (stopsMap.has(stopId)) {
      const stopTimeEntry = {
        arrival_time: row['arrival_time'],
        departure_time: row['departure_time'],
        stop_sequence: parseInt(row['stop_sequence'], 10),
        stop_id: stopId
      };

      if (!stopTimesMap.has(tripId)) {
        stopTimesMap.set(tripId, []);
      }
      stopTimesMap.get(tripId)!.push(stopTimeEntry);
    }
  });
  stopTimesParser.write(stopTimesFileContent);
  stopTimesParser.end();

  // Process and group stops with times
  for (const [tripId, tripInfo] of tripsWithRouteAndDirection) {
    const routeName = routesMap.get(tripInfo.routeId);
    const stopTimes = stopTimesMap.get(tripId);

    if (routeName && stopTimes) {
      stopTimes.sort((a, b) => a.stop_sequence - b.stop_sequence);

      for (const stopTime of stopTimes) {
        const stopId = stopTime.stop_id;
        const stopInfo = stopsMap.get(stopId);

        if (stopInfo) {
          if (!routeStopsMap.has(routeName)) {
            routeStopsMap.set(routeName, []);
          }

          const existingStops = routeStopsMap.get(routeName)!;
          const stopExists = existingStops.some(
            stop => stop.stop_id === stopId && stop.direction === tripInfo.directionId
          );

          if (!stopExists) {
            routeStopsMap.get(routeName)!.push({
              stop_id: stopId,
              direction: tripInfo.directionId,
              direction_name: tripInfo.headsign || (tripInfo.directionId === '0' ? 'Outbound' : 'Inbound'),
              arrival_times: [stopTime.arrival_time],
              departure_times: [stopTime.departure_time],
              ...stopInfo
            });
          } else {
            // If stop already exists, add new times
            const existingStopIndex = existingStops.findIndex(
              stop => stop.stop_id === stopId && stop.direction === tripInfo.directionId
            );
            
            if (existingStopIndex !== -1) {
              const existingStop = existingStops[existingStopIndex];
              existingStop.arrival_times.push(stopTime.arrival_time);
              existingStop.departure_times.push(stopTime.departure_time);
            }
          }
        }
      }
    }
  }

  // Cache the result
  cache.set(cacheKey, { timestamp: Date.now(), data: routeStopsMap });

  return routeStopsMap;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const lat = parseFloat(url.searchParams.get('lat') || '');
    const lon = parseFloat(url.searchParams.get('long') || '');
    const distance = parseFloat(url.searchParams.get('distance') || '');

    if (isNaN(lat) || isNaN(lon) || isNaN(distance)) {
      return NextResponse.json(
        { error: 'Invalid or missing query parameters: lat, long, distance' },
        { status: 400 }
      );
    }

    const routeStopsMap = await getStopsForRouteNearLocation(lat, lon, distance);

    const routesWithStops = Array.from(routeStopsMap.entries()).map(([routeName, stops]) => {
    const groupedStops = stops.reduce((acc, stop) => {
        if (!acc[stop.direction]) {
        acc[stop.direction] = {
            direction_name: stop.direction_name,
            stops: []
        };
        }
        acc[stop.direction].stops.push({
            ...stop,
            arrival_times: stop.arrival_times,
            departure_times: stop.departure_times
        });
        return acc;
    }, {});

    return {
        route: routeName,
        directions: groupedStops
    };
    });

    return NextResponse.json(routesWithStops);
    } catch (error) {
    console.error('Error handling GET request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

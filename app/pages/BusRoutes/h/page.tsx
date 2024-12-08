"use client";
import Header from "@/app/components/Header";
import { useGlobalState } from "@/app/components/StateProvider";
import TimeDisplay from "@/app/components/Time";
import { useState, useEffect } from "react";
import Image from "next/image";
import HomeButton from "@/app/components/HomeButton";
import { useRouter } from "next/navigation";
import { translate } from "@/app/data/translate";
import HandicappedHomeButton from "@/app/components/HandicappedHomeButton";

// Type definitions for better type safety
interface Stop {
  stop_id: string;
  stop_name: string;
  stop_lat: number;
  stop_lon: number;
  distance: number;
  arrival_times: string[];
}

interface RouteDirection {
  direction_name: string;
  stops: Stop[];
}

interface Route {
  route: string;
  directions: {
    [key: string]: RouteDirection;
  };
}

const MapPinIcon = (
  <div className="mr-2 h-6 w-6 text-blue-600 ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  </div>
);

const MapIcon = (
  <div className="mr-2 h-5 w-5 text-green-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
  </div>
);

const BusIcon = (
  <div className="mr-2">
    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/bus.png" alt="bus"/>
  </div>
);

const TrainIcon = (
  <div className="mr-2">
  <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/60/train.png" alt="train"/>
  </div>
);

export default function Home() {
  const router = useRouter();
  const { language } = useGlobalState();
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const originLat = 51.03746755562343;
  // const originLon = -114.18688400242011;

  const { originLat, originLon } = { originLat: 51.04051616148598, originLon: -114.13558790242007 };
  const distance = 0.1;

  useEffect(() => {
    async function fetchRoutes() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/stops?lat=${originLat}&long=${originLon}&distance=${distance}`
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch routes: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Filter out routes that do not have any valid stops
        const filteredRoutes = data.filter((routeItem: Route) => {
          return Object.values(routeItem.directions).some((direction: RouteDirection) =>
            direction.stops.some((stop: Stop) => {
              const closestTimes = getClosestTimes(stop.arrival_times, stop.stop_name);
              return closestTimes.length > 0; // Valid stop found (if at least one exists then we proceed)
            })
          );
        });
        
        setRoutes(filteredRoutes);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    }
  
    fetchRoutes();
  }, []);
  

  const getClosestTimes = (times: string[], id: string) => {
    const currentTime = new Date();
    
    const uniqueTimes = [...new Set(times)];
  
    const upcomingTimes = uniqueTimes
      .map((time) => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        const timeDate = new Date(currentTime);
        timeDate.setHours(hours, minutes, seconds, 0);
        const diff = timeDate.getTime() - currentTime.getTime();
        return { time, diff, timeDate };
      })
      .filter(({ diff }) => diff > 0)
      .sort((a, b) => a.diff - b.diff);
  
    const formattedTimes = upcomingTimes.slice(0, 2).map(({ timeDate, time }) => {
      let hours = timeDate.getHours();
      const minutes = timeDate.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
      return { timeDate, time: formattedTime };
    });
  
    return formattedTimes;
  };
  
  
  
  

  const navToHandiHome = () => {
    router.push("/h");
  };

  const navToHandiPassSelect = () => {
    router.push("/pages/PassSelectScreen/h");
  };

  return (
    <>
      <Image
        className="absolute right-0 top-0"
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={100}
      />
      <TimeDisplay />

      <Header text="Bus Routes" language={language} />
      <HandicappedHomeButton onClick={navToHandiHome} />

      <button onClick={navToHandiPassSelect} className="bus-button text-3xl absolute bottom-2">
        Purchase Pass
      </button>

      <div className="container mx-auto max-w-2xl mt-auto mb-[10vh] text-lg">
        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-8">
          <h2 className="text-2xl font-bold p-4 bg-blue-50 border-b text-black flex items-center">
            {MapPinIcon}
            {translate("Nearby Routes", language)}
          </h2>
          
          {loading && (
            <div className="p-4 text-center text-gray-500 animate-pulse">
              {translate("Loading routes...", language)}
            </div>
          )}
          
          {error && (
            <div className="p-4 bg-red-50 text-red-600">
              {error}
            </div>
          )}
          
          {!loading && !error && routes.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              ERROR: No routes found within {distance} km.
            </div>
          )}
          
          {!loading && !error && routes.length > 0 && (
            <div className="max-h-[30vh] overflow-y-auto">
              {routes.map((routeItem, routeIndex) => (
                <div 
                  key={`route-${routeIndex}`} 
                  className="border-b last:border-b-0"
                >
                  <h3 className="text-lg font-bold text-blue-800 p-4 bg-blue-50 flex items-center">
                  {routeItem.route.includes("Blue Line") || routeItem.route.includes("Red Line")
                        ? TrainIcon
                        : BusIcon
                    }
                    {routeItem.route}
                  </h3>
                  
                  {Object.entries(routeItem.directions).map(([directionKey, direction]) => (
                    <div 
                      key={directionKey} 
                      className="p-4 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center mb-3">
                        <h4 className="font-semibold text-gray-700">
                          {direction.direction_name}
                        </h4>
                      </div>
                      
                      <ul className="space-y-3">
                        {direction.stops.map((stop) => {
                          const closestTimes = getClosestTimes(stop.arrival_times, stop.stop_name);

                          if (closestTimes.length > 1) {
                          return (
                              <li key={stop.stop_id} className="bg-gray-100 p-3 rounded-lg shadow-sm text-black">
                              <div className="flex justify-between items-center">
                                <div className="flex justify-between w-full">
                                  <h5 className="text-md font-semibold text-gray-800">
                                    {stop.stop_name}
                                  </h5>
                                  {closestTimes.length > 1 && (
                                    <p className="ml-2 outline outline-2 outline-black p-2 text-right">
                                      <span className="font-bold">{translate("Arriving at", language)}:</span> {closestTimes[0].time}
                                      <br />
                                      <span className="font-bold">{translate("Next at", language)}:</span> {closestTimes[1].time}
                                    </p>
                                  )}
                                </div>
                                {MapPinIcon}
                              </div>
                            </li>
                            );
                          } else {
                            return (<li key={stop.stop_id} className="text-black">
                              {translate("No arrival times found.", language)}
                            </li>);
                          }
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

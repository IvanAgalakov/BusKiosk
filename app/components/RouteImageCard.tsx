import { useState } from "react";

interface RouteImageCardProps {
    route: [string,string] | null;
  }
  
  
  export default function RouteImageCard({route}: RouteImageCardProps) {
    const splitroute = route?.[0].split(" ");
    {/*Display for route name and image - may add ETA*/}
    return (
        <div>
          <div className = "flex flex-row">
              <img src="/bus-icon.svg" alt="Bus Icon" className="mr-2 w-10 h-10" />{splitroute?.[0]}{splitroute?.[1]}<img src="/bus-icon.svg" alt="Bus Icon" className="mr-2 w-10 h-10" />{splitroute?.[2]}     
          </div>
            <img src={route?.[1]}></img>
        </div>
    );
  }
import { useState } from "react";

interface RouteImageCardProps {
    route: [string,string] | null;
  }
  
  
  export default function RouteImageCard({route}: RouteImageCardProps) {

    {/*Display for route name and image - may add ETA*/}
    return (
        <div>
            <h1>{route?.[0]}</h1>
            <img src={route?.[1]}></img>
        </div>
    );
  }
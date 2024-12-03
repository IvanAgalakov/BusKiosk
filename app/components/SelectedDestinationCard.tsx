import { useState } from "react";
import RouteImageCard from "./RouteImageCard";
import React from "react";

//Source for useEffect: https://stackoverflow.com/questions/54865764/react-usestate-does-not-reload-state-from-props
interface SelectedDestinationCardProps {
    label?: string;
    routes?: [string, string][] | null;
  }
  
  
  export default function SelectedDestinationCard({ label, routes}: SelectedDestinationCardProps) {

    const [selectedRoute, setSelectedRoute] = useState<[string, string] | null>(routes?.[0] ?? null);

    {/*Update selected route once it is available*/}
    React.useEffect(()=> {
        setSelectedRoute(routes?.[0] ?? null);
    }, [routes])
    return (
        routes!= null &&
        <div className="p-10 flex flex-row space-x-3">
            <div className="w-96 bg-white p-5 rounded-lg">
                
                {/*Map routes to buttons for user to select their desired route*/}
                <div className="p-3 flex flex-col space-x-3"> 
                {routes?.map((route) =>
                <button className="p-3 text-2xl bg-white text-black"  onClick={() => setSelectedRoute(route)} key={route[0]}>
                    {route[0]}
                </button>)}
                </div>

            </div>
            <div className="bg-white p-5 rounded-lg text-black">
                {/*Display selected route and map image on button click. Disappears when route buttons do*/}
                <RouteImageCard route={selectedRoute}/>
            </div>
        </div>
    );
  }
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
        <div className="max-width-full p-4 flex flex-row space-x-3 centered">
            <div className="max-width-full bg-white p-5 rounded-lg">
                <h1 className = "text-black text-lg">Possible Routes</h1>
                <hr></hr>
                {/*Map routes to buttons for user to select their desired route*/}
                <div className="p-3 flex flex-col space-x-3"> 
                {routes?.map((route) => {
                    const splitroute = route[0].split(" ");
                    return(
                    <button className="max-width-full flex justify-center items-center active:bg-gray-200 p-3 text-2xl bg-white text-black"  onClick={() => setSelectedRoute(route)} key={route[0]}>
                    <div className = "flex flex-row">
                        <img src="/bus-icon.svg" alt="Bus Icon" className="mr-2 w-6 h-6" />{splitroute[0]}{splitroute[1]}<img src="/bus-icon.svg" alt="Bus Icon" className="mr-2 w-6 h-6" />{splitroute[2]}     
                    </div>
                    </button>)})
                }

                
                </div>

            </div>
            <div className="bg-white p-5 rounded-lg text-black ">
                {/*Display selected route and map image on button click. Disappears when route buttons do*/}
                <RouteImageCard route={selectedRoute}/>
            </div>
        </div>
    );
  }
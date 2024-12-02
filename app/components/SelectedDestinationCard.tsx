import { useState } from "react";

interface SelectedDestinationCardProps {
    label?: string;
    routes?: [string, string][];
  }
  
  
  export default function HomeButton({ label, routes}: SelectedDestinationCardProps) {

    const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

    return (
      <div>
        <ul>
            {routes?.map((route) => 
            <li>
                {route[0]} + {route[1]}
            </li>)}
        </ul>

      </div>
    );
  }
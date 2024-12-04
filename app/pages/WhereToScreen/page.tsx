"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import Keyboard from "@/app/components/Keyboard";

export default function Home() {
  const router = useRouter();
  const { language } = useGlobalState();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [busRoute, setBusRoute] = useState<string | null>(null);

  // Locations with randomized bus routes
  const locations = {
    "Markov's Kitchen": [
      { routeNumber: "42", destination: "Downtown", busStop: "Main St & 1st Ave" },
      { routeNumber: "7", destination: "Airport", busStop: "Airport Rd & Terminal Blvd" },
      { routeNumber: "15", destination: "Central Park", busStop: "5th Ave & Park Ave" },
    ],
    "Library": [
      { routeNumber: "10", destination: "Museum District", busStop: "Library St & Elm St" },
      { routeNumber: "5", destination: "North Park", busStop: "Park Ln & Maple St" },
      { routeNumber: "8", destination: "East Mall", busStop: "East Ave & King St" },
    ],
    "Shopping Mall": [
      { routeNumber: "30", destination: "West End", busStop: "Mall Rd & 9th St" },
      { routeNumber: "9", destination: "Uptown", busStop: "Uptown Blvd & Oak St" },
      { routeNumber: "12", destination: "South City", busStop: "South Rd & Beach St" },
    ],
  };

  
  const getRandomBusRoute = (location: string) => {
    const routes = locations[location];
    const randomIndex = Math.floor(Math.random() * routes.length);
    const randomRoute = routes[randomIndex];
    return `${randomRoute.routeNumber} - ${randomRoute.destination} (Stop: ${randomRoute.busStop})`;
  };

  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); 
  };

  const handleKeyPress = (key: string) => {
    if (key === "Backspace") {
      setSearchQuery((prev) => prev.slice(0, -1)); 
    } else if (key === "Space") {
      setSearchQuery((prev) => prev + " "); 
    } else if (key === "Enter") {
      console.log("Search Submitted:", searchQuery); 
      if (locations[searchQuery]) {
        const randomRoute = getRandomBusRoute(searchQuery);
        setBusRoute(randomRoute); 
        setShowKeyboard(false); 
      } else {
        setBusRoute("Location not found.");
        setShowKeyboard(false);
      }
    } else {
      setSearchQuery((prev) => prev + key); 
    }
  };

  const navToHome = () => {
    router.replace("/");
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
      <HomeButton onClick={navToHome} />

      {}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "440px", 
        }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setShowKeyboard(true)} 
          placeholder="Search for location..."
          style={{
            padding: "20px 20px",
            fontSize: "35px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            width: "100%", 
            boxSizing: "border-box", 
            color: "black",
            overflowX: "auto",
            whiteSpace: "nowrap", 
            textOverflow: "ellipsis", 
          }}
        />
      </div>

      {}
      {showKeyboard && (
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
          }}
        >
          <Keyboard onKeyPress={handleKeyPress} />
        </div>
      )}

      {}
      {busRoute && (
        <div
          style={{
            position: "absolute",
            top: "60%", 
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            width: "90%",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "10px", fontSize: "22px" }}>Bus Route Information</h3>
          <p>{busRoute}</p>
        </div>
      )}
    </>
  );
}

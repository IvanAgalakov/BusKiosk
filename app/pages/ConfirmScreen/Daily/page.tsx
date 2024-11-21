"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";

export default function SingleTicketInfo() {
  const router = useRouter();
  const { language } = useGlobalState();

  const navToHome = () => {
    router.push("/");
  };

  const handleReturnClick = () => {
    router.push("/Daily"); // Adjust this route as necessary
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

      <div className="absolute z-10 top-4 left-20">
        <div className="bus-button text-4xl flex flex-row items-center space-x-3 bg-gray-500 rounded-none text-black outline-1 hover:bg-gray-500">
          <p>{translate("Daily", language)}</p>
        </div>
      </div>

    
    {/* Red "Your Purchase" Box */}
    <div className="bg-red-600 text-white text-xl font-bold py-2 px-6">
      Your Purchase
    </div>

    <div className="flex flex-col items-center gap-6 p-8 bg-gray-900 bg-opacity-75 rounded-lg text-center text-white">
    {/* Details Section */}
  <div className="text-xl leading-relaxed">
    <p>1x Adult Ticket</p>
    <p>Total: $3.89</p>
    <p className="mt-6">Payment Complete</p>
  </div> 
  </div>

  <div>
  {/* Receipt Button */}
  <button className="px-8 py-3 bg-red-600 text-white text-xl font-bold rounded">
    Cancel
  </button>
  </div>

    


    </>
  );
}


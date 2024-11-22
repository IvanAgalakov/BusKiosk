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
    router.push("/h"); // Adjust this route as necessary
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

      <div className="absolute z-10 top-4 left-10">
        <div className="bus-button text-4xl flex flex-row items-center space-x-3 bg-gray-500 rounded-none text-black outline-1 hover:bg-gray-500">
          <p>{translate("Single", language)}</p>
        </div>
      </div>
      
       {/* Home Button in Bottom Right */}
       <div className=" bottom-2 right-2 absolute p-9">
        <HomeButton onClick={navToHome} />
      </div>

      {/* Ticket Regulations Modal */}
      <div className="absolute bottom-5 left-5 bg-white shadow-lg rounded-xl w-[80%] h-fit p-8">
        <h2 className="flex justify-center text-center p-10 text-red-800 text-4xl font-bold">
          {translate("Ticket Regulations", language)}
        </h2>

      <h4 className="font-bold text-black p-5 mb-3 text-3xl">
        {translate("Nonrefundable", language)}
      </h4>
      <p className="font-normal  text-black p-5 text-2xl">
        {translate("A single ticket is valid for 1 (one) use.", language)}
      </p>
      <p className="font-normal text-black p-5 text-2xl">
        {translate("Ticket expires 365 days from purchase date.", language)}
      </p>
      <p className="font-normal text-black p-5 text-2xl">
        {translate("No refunds or exchanges.", language)}
      </p>
      <p className="font-normal text-black p-5 text-2xl">
        {translate("Youth age 13 - 17 yrs old", language)}
      </p>


   {/* Action Buttons */}
  <div className="flex justify-center gap-4 p-8">
    <button
      className="px-6 py-2 bg-red-600 text-white font-bold rounded text-2xl"
    >
      {translate("OK", language)}
    </button>
    <button
      className="px-6 py-2 bg-red-600 text-white font-bold rounded text-2xl"
    >
      {translate("Return to selection", language)}
    </button>
  </div>
</div>
    </>
  );
}


"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";
import Header from "@/app/components/Header";

export default function SingleTicketInfo() {
  const router = useRouter();
  const { language, selectedPass, total, adultAmount, youthAmount, setTotal, setAdultAmount, setYouthAmount } = useGlobalState();

  const navToHome = () => {
    router.push("/");
  };

  const handleCancel = () => {
    router.push("/pages/BuyTickets");
    setAdultAmount(0);
    setYouthAmount(0);
    setTotal(0);
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
        <Header text={selectedPass} language={language}/>
      </div>

    
    {/* Red "Your Purchase" Box */}
    <div className="bg-red-600 text-white text-xl font-bold py-2 px-6">
      {translate("Your Purchase", language)}
    </div>

    <div className="flex flex-col items-center gap-6 p-8 bg-gray-900 bg-opacity-75 rounded-lg text-center text-white">
    {/* Details Section */}
  <div className="text-xl leading-relaxed">
    {adultAmount > 0 && <p>{translate("Adult", language)} {translate("Ticket", language)} x {adultAmount}</p>}
    {youthAmount > 0 && <p>{translate("Youth", language)} {translate("Ticket", language)} x {youthAmount}</p>}
    <p>  {translate("Total", language)}: {total} $</p>
    <p className="mt-6"> {translate("Payment Complete", language)}</p>
  </div> 
  </div>

  <div>
  {/* Receipt Button */}
  <button className="px-8 py-3 bg-red-600 text-white text-xl font-bold rounded" onClick={handleCancel}>
  {translate("Cancel", language)}
  </button>
  </div>

    


    </>
  );
}


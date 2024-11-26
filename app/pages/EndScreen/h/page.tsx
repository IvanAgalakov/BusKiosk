"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";
import Header from "@/app/components/Header";
import HCHomeButton from "@/app/components/HandicappedHomeButton";

export default function SingleTicketInfo() {
  const router = useRouter();
  const { language, selectedPass, total, adultAmount, youthAmount, setTotal, setAdultAmount, setYouthAmount } = useGlobalState();

  const navToHandiHome = () => {
    router.push("/h")
}


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
      <HCHomeButton onClick={navToHandiHome}/>

     
        <Header text={selectedPass} language={language}/>
      

    
    {/* Red "Your Purchase" Box */}
    <div className="absolute  top-1/3 text-3xl items-center rounded-none text-black bg-red-600 font-bold py-3 px-12 outline-none">

      {translate("Your Purchase", language)}
    </div>

    <div className="absolute top-[45%] flex flex-col items-center gap-6 p-8 bg-gray-900 bg-opacity-75  text-center text-white w-3/4 h-[350px] ">

    {/* Details Section */}
  <div className="text-3xl leading-relaxed justify-between flex-col p-5">
    {adultAmount > 0 && <p>{translate("Adult", language)} {translate("Ticket", language)} x {adultAmount}</p>}
    {youthAmount > 0 && <p>{translate("Youth", language)} {translate("Ticket", language)} x {youthAmount}</p>}
    <p>  {translate("Total", language)}: ${total} </p>
  </div> 

  <div className=" text-3xl absolute text-center bottom-1/4" >
  <p> {translate("Payment Complete", language)}</p>
  </div>

  </div>

  <button
  className="bus-button absolute bottom-[7.5%] left-1/2 transform -translate-x-1/2 px-12 py-3 bg-red-600 text-white text-3xl font-bold rounded-lg border-white"
 // onClick={handleCancel}
>
  {translate("Receipt", language)}
</button>


    


    </>
  );
}


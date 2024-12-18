"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";
import Header from "@/app/components/Header";
import HCHomeButton from "@/app/components/HandicappedHomeButton";
import BackButton from "@/app/components/BackButton";


export default function SingleTicketInfo() {
  const navToHandiHome = () => {
    router.push("/h")
}
  const router = useRouter();
  const { language, selectedPass } = useGlobalState();

  const [valid, setValid] = useState<string>("");
  const [expires, setExpires] = useState<string>("");

  useEffect(() => {
    switch (selectedPass) {
      //case "Single": {
      default: {
        setValid("A single ticket is valid for 1 (one) use.");
        setExpires("Ticket expires 365 days from purchase date.");
        break;
      }
      case "Daily": {
        setValid("A daily ticket is valid for 1 (one) day.");
        setExpires("Ticket expires 1 day from purchase date.");
        break;
      }
      case "Weekly": {
        setValid("A weekly ticket is valid for 7 (seven) days.");
        setExpires("Ticket expires 7 days from purchase date.");
        break;
      }
      case "Monthly": {
        setValid("A monthly ticket is valid for 1 (one) Month.");
        setExpires("Ticket expires 30 days from purchase date.");
        break;
      }
    } 
  })


  const handleReturnClick = () => {
    router.back();
  };

  const navBack = () => {
    router.push("/pages/PassSelectScreen/h");
  };

  const handleOK = () => {
    router.push("/pages/BuyTickets/h");
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
      <div className=" bottom-20 right-2 absolute p-8">
        <BackButton onClick={navBack} />
      </div>

      <Header text="Info Screen" language={language}/>

    
      {/* Ticket Regulations Modal */}
      <div className="absolute bottom-5 left-5 bg-white shadow-lg rounded-xl w-[80%] h-fit p-8">
        <h2 className="flex justify-center text-center p-10 text-red-800 text-4xl font-bold">
          {translate("Ticket Regulations", language)}
        </h2>

      <h4 className="font-bold text-black p-5 mb-3 text-3xl">
        {translate("Nonrefundable", language)}
      </h4>
      <p className="font-normal  text-black p-5 text-2xl">
        {valid}
      </p>
      <p className="font-normal text-black p-5 text-2xl">
        {expires}
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
      className="bus-button px-6 py-2 bg-red-600 text-white font-bold rounded text-2xl" onClick={handleOK}
    >
      {translate("Accept", language)}
    </button>
    
  </div>
</div>
    </>
  );
}


"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";
import Header from "@/app/components/Header";
import BackButton from "@/app/components/BackButton";

export default function SingleTicketInfo() {
  const router = useRouter();
  const { language, selectedPass, total, adultAmount, youthAmount, setTotal, setAdultAmount, setYouthAmount } = useGlobalState();

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

  const navToHome = () => {
    router.push("/");
    setTotal(0)
    setAdultAmount(0)
    setYouthAmount(0)
  };

  const handleReturnClick = () => {
    router.back();
  };

  const handleOK = () => {
    router.push("/pages/BuyTickets");
  }

  const navBack = () => {
    router.push("/pages/PassSelectScreen");
  };

  const [ticket, setTicket] = useState<string>("");

  useEffect(() => {
    setTicket(selectedPass);
  });


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
      

    <div className="bg-white text-black shadow-md  w-[60%] h-fit p-8 mt-20 relative">
    <button 
    className=" absolute top-2 right-4 text-gray-500 hover:text-gray-800 focus:outline-none text-2xl"
    onClick={navToHome} // Replace with your navigation function
    aria-label="Close"
    >
     ✕
    </button>
        
    {/* Details Section */}
    <div className="text-2xl leading-relaxed justify-between flex-col p-5 ">

    <p className="absolute left-2 top-2 text-xl text-gray-600 "> {translate("Date", language)} {new Date().toLocaleDateString()}</p>

    <p className="relative inset-0 flex items-center justify-center ">      
    {translate("Receipt", language)}
     </p>
     <hr className="my-4 border-gray-400" />
    {adultAmount > 0 && <p>{translate("Adult", language)} {translate(ticket, language)} {translate("Ticket", language)} x {adultAmount}</p>}
    {youthAmount > 0 && <p>{translate("Youth", language)} {translate(ticket, language)} {translate("Ticket", language)} x {youthAmount}</p>}
    <p>  {translate("Total", language)}: ${total} </p> 
    
   
    <hr className="my-4 border-gray-400" /> 
    {translate("Thankyou", language)} 
    </div>  
     </div>

    </>
  );
}


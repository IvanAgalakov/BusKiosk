"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  const handlePayment = () => {
    router.push("/pages/EndScreen");
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

      <Header text="Payment Pending" language={language}/>

    
    {/* Red "Your Purchase" Box */}
    <div className="absolute  top-1/3 text-3xl items-center rounded-none text-black bg-red-600 font-bold py-3 px-12 outline-none">

      {translate("Your Purchase", language)}
    </div>

    <div className="absolute top-[45%] flex flex-col items-center gap-6 p-8 bg-gray-900 bg-opacity-75  text-center text-white w-3/4 h-[350px] ">

    {/* Details Section */}
  <div className="text-3xl leading-relaxed justify-between flex-col p-5">
    {adultAmount > 0 && <p>{translate("Adult", language)} {translate(ticket, language)} {translate("Ticket", language)} x {adultAmount}</p>}
    {youthAmount > 0 && <p>{translate("Youth", language)} {translate(ticket, language)} {translate("Ticket", language)} x {youthAmount}</p>}
    <p>  {translate("Total", language)}: ${total} </p>
    <p className="mt-6"> {translate("Please use pinpad or insert cash to complete transaction", language)}</p>
  </div> 
  </div>

  <button
  className=" bus-button absolute bottom-[7.5%] left-1/2 transform -translate-x-1/2 px-12 py-3 bg-red-600 text-white text-3xl font-bold rounded-lg  border-white"
  onClick={handleCancel}
>
  {translate("Cancel", language)}
</button>

<button
  className="bus-button absolute bottom-2 left-[12%] transform -translate-x-1/2 px-12 py-3 bg-gray-900 text-white text-3xl font-bold rounded-lg border-white"
  onClick={handlePayment}
>
  {translate("Pay", language)}
</button>
    
    


    </>
  );
}


"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TimeDisplay from "../components/Time";

import { translate } from "../data/translate";
import { useState } from "react";
import { useGlobalState } from "../components/StateProvider";
import Header from "../components/Header";

export default function Handicap() {

  const { language } = useGlobalState();

  const router = useRouter();

  const navToHome = () => {
    router.push("/");
  };

  const navToHandiLanguage = () => {
    router.push("pages/languages/h")
  }

  const navToHandiPassSelection = () => {
    router.push("pages/PassSelectScreen/h")
  }

  const navToHandiBusRoutes = () => {
    router.push("pages/BusRoutes/h")
  }

  return (
    <>
      <Image
        className="absolute top-0 right-0"
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={100}
      />
      
      <TimeDisplay/>
      <Header text="Home Screen" language={language}/>
      <div className="absolute bottom-4 right-4 flex flex-row text-4xl space-x-3">
        <Image
          onClick={navToHome}
          className="z-10 hover:brightness-50 cursor-pointer"
          src={"/disability.png"}
          alt={"disability"}
          width={100}
          height={100}
        />
      </div>
      
      <div className="absolute z-10 bottom-4 left-4">
          <button onClick={navToHandiLanguage} className="bus-button text-3xl flex flex-row items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
            <p>{ translate("Language", language) }</p>
          </button>
        </div>



      <div className="grid grid-cols-3 gap-4 w-[80%] text-3xl absolute bottom-32">
        <button onClick={navToHandiPassSelection} className="bus-button">
            { translate("Purchase Ticket", language) }
          </button>
          <button className="bus-button" onClick={navToHandiBusRoutes}>
            { translate("Bus Routes", language)}
          </button>
          <button className="bus-button">
            { translate("Where To?", language)}
          </button>
      </div>
    </>
  );
}
"use client";
import HomeButton from "@/app/components/HomeButton";
import DestinationDropdown from "@/app/components/DestinationDropdown";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Language, languages } from "@/app/data/languages";
import { useEffect, useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";
import HandicappedDestinationDropdown from "@/app/components/HandicappedDestinationDropdown";
import HCHomeButton from "@/app/components/HandicappedHomeButton";
import Header from "@/app/components/Header";


export default function Home() {
  const router = useRouter();
  const { language, setLanguage } = useGlobalState();

  const navToHandiHome = () => {
    router.push("/h")
    }

  const changeLanguage = (lang: Language) => {
    setLanguage(lang.code);
  };

  const navToHandiPassSelection = () => {
    router.push("/pages/PassSelectScreen/h")
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
      <Header text="Where To?" language={language}/>

      <div className="absolute z-10 top-4 left-20">
      </div>
      <div>
      <HCHomeButton onClick={navToHandiHome}/>
      <button onClick={navToHandiPassSelection} className="bus-button bottom-2 left-2 absolute p-2">
            { translate("Purchase Ticket", language) }
      </button>
      </div>
      <div className="absolute bottom-20 w-full p-4">
        <HandicappedDestinationDropdown language={language}/>
      </div>
      
    </>
  );
}

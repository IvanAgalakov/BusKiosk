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

export default function Home() {
  const router = useRouter();
  const { language, setLanguage } = useGlobalState();

  const navToHome = () => {
    router.push("/");
  };

  const navToPassSelection = () => {
    router.push("/pages/PassSelectScreen")
  }

  const changeLanguage = (lang: Language) => {
    setLanguage(lang.code);
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

      </div>
      <HomeButton onClick={navToHome} />
      <div className="absolute top-40 w-full p-4">
        <DestinationDropdown />
      </div>
      <button onClick={navToPassSelection} className="bus-button bottom-20 center absolute p-2">
            { translate("Purchase Ticket", language) }
      </button>
      <div>
      
      
      </div>
    </>
  );
}
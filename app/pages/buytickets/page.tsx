"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Language, languages } from "@/app/data/languages";
import { useEffect, useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";
import BackButton from "@/app/components/BackButton";
import Header from "@/app/components/Header";
import NumUpDown from "@/app/components/NumUpDown";

export default function Home() {
  const router = useRouter();
  const { language, setAdultAmount, adultAmount, setYouthAmount, youthAmount } = useGlobalState();

  const navToHome = () => {
    router.back();
  };

  const adultUp = () => {
    setAdultAmount(adultAmount+1);
  };

  const adultDown = () => {
    if (adultAmount > 0) {
      setAdultAmount(adultAmount-1);
    }
  }

  const youthUp = () => {
    setYouthAmount(youthAmount+1);
  };

  const youthDown = () => {
    if (youthAmount > 0) {
      setYouthAmount(youthAmount-1);
    }
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
      <HomeButton onClick={navToHome} />
      <div className=" left-20 absolute top-0">
        <BackButton onClick={navToHome} />
      </div>

      <Header text="Single" language={language}/>

      <div className=" top-52 absolute">
        <div className="text-3xl bg-slate-400 bg-opacity-50 p-3">
          Children age 0-13 do not have to pay.
        </div>
        <div className=" flex flex-row text-4xl">
          <NumUpDown subtitle="(18+)" title="Adult:" onClickDown={adultDown} onClickUp={adultUp} value={adultAmount}/>
        </div>
        <div className=" flex flex-row text-4xl">
          <NumUpDown subtitle="(13- 17)" title="Youth:" onClickDown={youthDown} onClickUp={youthUp} value={youthAmount}/>
        </div>
      </div>
    </>
  );
}

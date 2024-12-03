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
import { getPrice, prices } from "@/app/data/pricing";

export default function Home() {
  const router = useRouter();
  const { language, selectedPass, setTotal, total, adultAmount, youthAmount, setAdultAmount, setYouthAmount } = useGlobalState();

  let adultInc: number | undefined = 0;
  let youthInc: number | undefined = 0;

  useEffect(() => {
    adultInc = getPrice(selectedPass+"Adult");
    youthInc = getPrice(selectedPass+"Youth");
  });

  const onPurchase = () => {
    router.push("/pages/ConfirmScreen")
  }

  const navBack = () => {
    router.push("/pages/PassSelectScreen/h");
    setTotal(0)
    setAdultAmount(0)
    setYouthAmount(0)
  };

  const navToHome = () => {
    router.replace("/h");
    setTotal(0)
    setAdultAmount(0)
    setYouthAmount(0)
  };

  const adultUp = () => {
    setAdultAmount(adultAmount+1);
    if (adultInc) {
      setTotal(Number((total + adultInc).toFixed(2)));
    }
  };

  const adultDown = () => {
    if (adultAmount > 0) {
      setAdultAmount(adultAmount-1);
      if (adultInc) {
        setTotal(Number((total - adultInc).toFixed(2)));
      }
    }
  }

  const youthUp = () => {
    setYouthAmount(youthAmount+1);
    if (youthInc) {
      setTotal(Number((total + youthInc).toFixed(2)));
    }
  };

  const youthDown = () => {
    if (youthAmount > 0) {
      setYouthAmount(youthAmount-1);
      if (youthInc) {
        setTotal(Number((total - youthInc).toFixed(2)));
      }
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

      <div className=" text-2xl absolute top-4 text-black text-center underline">
        {translate("Purchase Ticket", language)}
      </div>

      <div className=" top-[25rem] absolute">
        <div className="text-3xl bg-slate-400 bg-opacity-50 p-3">
          {translate("Children age 0-13 do not have to pay.",language)}
        </div>
      </div>

      <div className=" bottom-5 absolute flex flex-col justify-center items-center">
        <div className=" mb-3">{translate("Total", language)}: {total}$</div>
        <button onClick={onPurchase} className="bus-button">{translate("Purchase", language)}</button>
        <div className=" flex flex-row text-4xl justify-center items-center">
          <div className="mr-10 flex flex-col justify-center items-center">
            <div className=" relative">
              <HomeButton onClick={navToHome} />
            </div>
            <div className=" relative mt-20">
              <BackButton onClick={navBack} />
            </div>
          </div>
          <NumUpDown language={language} subtitle="(18+)" title="Adult" onClickDown={adultDown} onClickUp={adultUp} value={adultAmount}/>
          <NumUpDown language={language} subtitle="(13- 17)" title="Youth" onClickDown={youthDown} onClickUp={youthUp} value={youthAmount}/>
        </div>
      </div>
    </>
  );
}

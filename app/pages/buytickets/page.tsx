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
  const { language, selectedPass, setTotal, total } = useGlobalState();
  const [adultAmount, setAdultAmount] = useState<number>(0);
  const [youthAmount, setYouthAmount] = useState<number>(0);

  let adultInc: number | undefined = 0;
  let youthInc: number | undefined = 0;

  useEffect(() => {
    adultInc = getPrice(selectedPass+"Adult");
    youthInc = getPrice(selectedPass+"Youth");
  });

  const navBack = () => {
    router.back();
    setTotal(0)
  };

  const navToHome = () => {
    router.replace("/");
    setTotal(0)
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
      <HomeButton onClick={navToHome} />
      <div className=" left-20 absolute top-0">
        <BackButton onClick={navToHome} />
      </div>

      <Header text={selectedPass} language={language}/>

      <div className=" top-52 absolute">
        <div className="text-3xl bg-slate-400 bg-opacity-50 p-3">
          Children age 0-13 do not have to pay.
        </div>
        <div className=" flex flex-col text-4xl justify-center items-center">
          <NumUpDown subtitle="(18+)" title="Adult:" onClickDown={adultDown} onClickUp={adultUp} value={adultAmount}/>
          <NumUpDown subtitle="(13- 17)" title="Youth:" onClickDown={youthDown} onClickUp={youthUp} value={youthAmount}/>
        </div>
      </div>

      <div className=" bottom-5 absolute flex flex-col justify-center items-center">
        <div className=" mb-3">Total: {total}$</div>
        <button className="bus-button">Purchase</button>
      </div>
    </>
  );
}

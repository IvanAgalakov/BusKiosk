"use client"
import HCHomeButton from "@/app/components/HandicappedHomeButton";
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

  const navToHandiHome = () => {
    router.push("/h");
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
      <TimeDisplay/>
      
      <div className="absolute z-10 top-4 left-20">
        <div className="bus-button text-3xl flex flex-row items-center space-x-3 bg-gray-500 rounded-none text-black outline-1 hover:bg-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
          <p>{translate("Language", language)}</p>
        </div>
      </div>
      <HCHomeButton onClick={navToHandiHome}/>

      <h1 className="mt-[20%]">Select Your Language:</h1>
      <div className="bg-white shadow-lg rounded-xl w-[80%] h-fit p-4 mt-5">
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className={`flex items-center space-x-3 p-2 outline outline-4 outline-gray-300 rounded-lg transition-colors text-black
                ${language === lang.code 
                  ? 'bg-gray-500 hover:bg-gray-600 text-white' 
                  : 'hover:bg-gray-100'
                }`}
            >
              <span className="text-4xl">{lang.flag}</span>
              <span className="text-xl font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
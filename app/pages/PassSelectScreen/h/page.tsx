"use client"
import HomeButton from "@/app/components/HandicappedHomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Language, languages } from "@/app/data/languages";
import { useEffect, useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";
import HCHomeButton from "@/app/components/HandicappedHomeButton";
import Header from "@/app/components/Header";

export default function Home() {
    const router = useRouter();
    const {language, setSelectedPass} = useGlobalState();

    const navToHandiHome = () => {
        router.push("/h")
    }

    const onSelect = (value: string) => {
        setSelectedPass(value)
        router.push("/pages/InfoScreen/h")
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
            <HCHomeButton onClick={navToHandiHome}/>

            <Header text="Select Ticket" language={language}/>
 


 

            <div className="grid grid-cols-2 gap-9 w-[65%] h-[25%] text-3xl absolute bottom-12">
                <button className = "bus-button" onClick={() => onSelect("Single")}>
                    { translate("Single", language)}
                </button>
                <button className="bus-button" onClick={() => onSelect("Daily")}>
                    { translate("Daily", language)}
                </button>
                <button className = "bus-button" onClick={() => onSelect("Weekly")}>
                    { translate("Weekly", language)}
                </button>
                <button className = "bus-button" onClick={() => onSelect("Monthly")}>
                    { translate("Monthly", language)}
                </button>
            </div>
    
        </>
    );
}

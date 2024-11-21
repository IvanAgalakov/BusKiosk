"use client"
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Language, languages } from "@/app/data/languages";
import { useEffect, useState } from "react";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";
import { translate } from "@/app/data/translate";

export default function Home() {
    const router = useRouter();
    const {language, setSelectedPass} = useGlobalState();

    const navToHome = () => {
        router.push("/")
    }
    const onSelect = (value: string) => {
        setSelectedPass(value)
        router.push("/pages/buytickets")
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
            <HomeButton onClick={navToHome}/>

            <div className="absolute top-20">
                <div className="bus-button text-3xl flex flex-row items-center space-x-3 bg-gray-500 rounded-none text-black outline-1 hover:bg-gray-500">
                    <p>{translate("Select pass", language)}</p>
                </div>
            </div>
 

            <div className="grid grid-cols-1 gap-20 w-[50%] absolute bottom-12">
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

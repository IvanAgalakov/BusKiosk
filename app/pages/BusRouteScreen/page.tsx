"use client";
import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TimeDisplay from "@/app/components/Time";
import { useGlobalState } from "@/app/components/StateProvider";

export default function Home() {
    const router = useRouter();
    const { language } = useGlobalState();

    const navToHome = () => {
        router.replace("/");
    };

    const busData = [
        { id: 111, arrival1: "10:20 am", arrival2: "10:40 am" },
        { id: 93, arrival1: "10:17 am", arrival2: "10:43 am" },
        { id: 94, arrival1: "10:43 am", arrival2: "11:23 am" },
        { id: 9, arrival1: "10:32 am", arrival2: "10:52 am" },
    ];

    return (
        <>
            <Image
                className="absolute right-0 top-0 z-10"
                src={"/logo.png"}
                alt="logo"
                width={200}
                height={100}
            />
            <TimeDisplay />
            <HomeButton onClick={navToHome} />

            <div className="pt-40 px-6 max-w-3xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-bold text-black text-center mb-6">
                        Buses Nearby
                    </h2>
                    {busData.map((bus) => (
                        <div
                            key={bus.id}
                            className="flex items-center justify-between py-4 border-b last:border-b-0"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="font-bold text-red-500 text-lg">{bus.id}</span>
                                </div>
                            </div>
                            <div className="text-right space-y-2">
                                <div className="flex justify-between items-center space-x-2">
                                    <span className="text-black text-lg">Arriving at:</span>
                                    <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-300">
                                        <span className="text-black text-lg">{bus.arrival1}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center space-x-2">
                                    <span className="text-black text-lg">Next at:</span>
                                    <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-300">
                                        <span className="text-black text-lg">{bus.arrival2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

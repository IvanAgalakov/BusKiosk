"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Handicap() {

  const router = useRouter();

  const navToHome = () => {
    router.push("/");
  }


    return (
        <main className="bg-black flex h-screen justify-center items-center flex-col">
          <div className="h-screen aspect-[3/4] bg-city relative font-bold text-5xl">
            <Image className=" absolute right-0" src={"/logo.png"} alt="logo" width={200} height={100} />
            <div className=" absolute top-28 right-4 flex flex-row text-4xl space-x-3">
              <p>10:05</p>
              <p>am</p>
            </div>
    
            <div className=" absolute bottom-4 right-4 flex flex-row text-4xl space-x-3">
              <Image onClick={navToHome} className="z-10 hover:brightness-50 cursor-pointer" src={"/disability.png"} alt={"disability"} width={100} height={100} />
            </div>
    
            <div className="absolute z-10 bottom-4 left-4">
              <button className="bus-button text-3xl flex flex-row items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
                <p>Language</p>
              </button>
            </div>
    
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 flex flex-col justify-center items-center">
              <div className="grid grid-cols-3 gap-4 w-[80%] text-3xl absolute bottom-32">
                <button className="bus-button">
                  Purchase Pass
                </button>
                <button className="bus-button">
                  Bus Routes
                </button>
                <button className="bus-button">
                  Where To?
                </button>
              </div>
            </div>
          </div>
        </main>
      );
}
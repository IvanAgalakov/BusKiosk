"use client"

import { createContext, ReactNode, useContext, useState } from "react";

type GlobalStateType = {
  language: string;
  setLanguage: (lang: string) => void;

  total: number;
  setTotal: (num: number) => void;

  selectedPass: string;
  setSelectedPass: (pass: string) => void;

  adultAmount: number;
  setAdultAmount: (num: number) => void;

  youthAmount: number;
  setYouthAmount: (num: number) => void;
};

const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");
  const [selectedPass, setSelectedPass] = useState<string>("None");
  const [total, setTotal] = useState<number>(0);
  const [adultAmount, setAdultAmount] = useState<number>(0);
  const [youthAmount, setYouthAmount] = useState<number>(0);

  return (
    <GlobalStateContext.Provider value={{ language, setLanguage, selectedPass, setSelectedPass, total, setTotal, adultAmount, setAdultAmount, youthAmount, setYouthAmount}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

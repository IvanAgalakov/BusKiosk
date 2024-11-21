"use client"

import { createContext, ReactNode, useContext, useState } from "react";

type GlobalStateType = {
  language: string;
  setLanguage: (lang: string) => void;

  total: number;
  setTotal: (num: number) => void;

  selectedPass: string;
  setSelectedPass: (pass: string) => void;
};

const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");
  const [selectedPass, setSelectedPass] = useState<string>("None");
  const [total, setTotal] = useState<number>(0);

  return (
    <GlobalStateContext.Provider value={{ language, setLanguage, selectedPass, setSelectedPass, total, setTotal}}>
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

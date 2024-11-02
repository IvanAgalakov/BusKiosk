"use client"

import { createContext, ReactNode, useContext, useState } from "react";

type GlobalStateType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <GlobalStateContext.Provider value={{ language, setLanguage }}>
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

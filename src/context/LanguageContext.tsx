"use client";

import { RootState } from "@/store";
import { setLanguage } from "@/store/preferenceSlice";
import { createContext, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

export type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({
  children,
}) => {
  const language = useSelector((state: RootState) => state.preference.language);
  const dispatch = useDispatch();

  const changeLanguage = (lang: string) => {
    dispatch(setLanguage(lang));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

"use client";

import { RootState } from "@/store";
import { setTheme, ThemeMode } from "@/store/preferenceSlice";
import { createContext, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

export type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const theme = useSelector((state: RootState) => state.preference.theme);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

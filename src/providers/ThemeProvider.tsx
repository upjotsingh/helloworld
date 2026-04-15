"use client";

import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import React, { ReactNode, useContext, useEffect, useState } from "react";

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme }: ThemeContextType = useContext(ThemeContext)!;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
    }
  }, [theme, mounted]);

  if (mounted) {
    return <div className="themeContainer">{children}</div>;
  }
};

export default ThemeProvider;

"use client";

import { LanguageContext } from "@/context/LanguageContext";
import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./languageSelector.module.css";

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext)!;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (lang: string) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languageMap: Record<string, string> = {
    en: "EN",
    pn: "PN",
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button className={styles.button} onClick={toggleDropdown}>
        {languageMap[language] || "EN"} <span>▼</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button className={styles.option} onClick={() => handleSelect("en")}>
            English
          </button>
          <button className={styles.option} onClick={() => handleSelect("pn")}>
            Punjabi
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

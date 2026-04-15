"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import moonImg from "@/assets/moon.png";
import sunImg from "@/assets/sun.png";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)!;

  return (
    <div
      className={styles.container}
      style={{ background: theme === "dark" ? "white" : "#0f172a" }}
      onClick={toggle}
    >
      <Image src={moonImg} alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "dark" ? { left: 1, backgroundColor: "#0f172a" } : { right: 1, backgroundColor: "white" }}
      ></div>
      <Image src={sunImg} alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;

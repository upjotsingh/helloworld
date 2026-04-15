"use client";

import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { NavbarData } from "@/data/navbarData/NavbarData";
import { NavbarDataType } from "@/data/navbarData/NavbarTypes";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarData: NavbarDataType = NavbarData();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (link: string, e: React.MouseEvent) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const targetId = link.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`${styles.navbar} ${!isVisible ? styles.navbarHidden : ""}`}>
      <div className={styles.container}>
        <div className={styles.socialMediaContainer}>
          {navbarData.socialLinks.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <Image src={item.icon} alt={item.value} width={24} height={24} />
            </Link>
          ))}
        </div>
        <ul className={styles.menu}>
          {navbarData.tabs.map((item, i) => (
            <li key={i}>
              <a href={item.link} onClick={(e) => handleNavClick(item.link, e)}>{item.value}</a>
            </li>
          ))}
        </ul>
        <div className={styles.togglers}>
          <ThemeToggle />
          <LanguageSelector />
          <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? styles.barActive : styles.bar}></span>
            <span className={isOpen ? styles.barActive : styles.bar}></span>
            <span className={isOpen ? styles.barActive : styles.bar}></span>
          </div>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ""}`}>
        {navbarData.tabs.map((item, i) => (
          <a href={item.link} key={i} onClick={(e) => { handleNavClick(item.link, e); setIsOpen(false); }}>
            {item.value}
          </a>
        ))}
      </div>
    </nav>
  );
}

import Image from "next/image";
import { heroData } from "@/data/hero/data";
import styles from "./hero.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>HelloWorld Solutions</span>
        <h1 className={styles.heroTitle}>{heroData.title}</h1>
        <p className={styles.heroDescription}>{heroData.description}</p>
        <div className={styles.heroActions}>
          {heroData.actions.map((action) => (
            <a
              key={action.label}
              href={action.link}
              className={`${styles.actionButton} ${
                action.variant === "primary" ? styles.primaryButton : styles.secondaryButton
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src={heroData.image}
          alt="Hero illustration"
          width={560}
          height={560}
          priority
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import { servicesData } from "@/data/services/data";
import styles from "./services.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Services</div>
          <h2 className={styles.sectionTitle}>Digital services built for modern brands.</h2>
        </div>
        <div className={styles.sectionGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {servicesData.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceIcon} style={{ background: `${service.accent}22` }}>
                <Image src={service.icon} alt={service.title} width={28} height={28} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { processData } from "@/data/process/data";
import styles from "./process.module.css";

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Process</div>
          <h2 className={styles.sectionTitle}>A smooth workflow from idea to launch.</h2>
        </div>
        <div className={styles.processGrid}>
          {processData.map((item) => (
            <article className={styles.processStep} key={item.step}>
              <div className={styles.processStepNumber}>{item.step}</div>
              <h3 className={styles.processStepTitle}>{item.title}</h3>
              <p className={styles.processStepDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

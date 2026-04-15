import { testimonialsData } from "@/data/testimonials/data";
import styles from "./testimonials.module.css";

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Testimonials</div>
          <h2 className={styles.sectionTitle}>Trusted by founders and product teams.</h2>
        </div>
        <div className={styles.sectionGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {testimonialsData.map((item) => (
            <article className={styles.testimonialCard} key={item.name}>
              <p className={styles.testimonialQuote}>&ldquo;{item.quote}&rdquo;</p>
              <div>
                <p className={styles.testimonialAuthor}>{item.name}</p>
                <p className={styles.testimonialRole}>{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

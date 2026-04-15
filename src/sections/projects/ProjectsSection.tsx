import Image from "next/image";
import { projectsData } from "@/data/projects/data";
import styles from "./projects.module.css";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Projects</div>
          <h2 className={styles.sectionTitle}>Live digital products that customers enjoy using.</h2>
        </div>
        <div className={styles.sectionGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {projectsData.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <div className={styles.projectPreview}>
                <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectLabel}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

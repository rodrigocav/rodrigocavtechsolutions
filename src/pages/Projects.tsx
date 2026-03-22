import styles from "./Projects.module.css";
import { projects } from "../data/projects";


export default function Projects() {
  return (
    <section id="projetos" className={styles.projects}>
      <h2>Projetos Realizados</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img src={project.image} alt={project.title} />

            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
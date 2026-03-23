import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import { projects } from "../data/projects";

export default function Projects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projetos" className={styles.projects}>
      <h2>Projetos Realizados</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
            cardsRef.current[index] = el;
            }}
            className={styles.card}
          >
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
import { useEffect, useRef } from "react";
import styles from "./ServiceCard.module.css";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.card}>
      <div>
        <img src={image} alt={title} className={styles.image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>


    </div>
  );
}
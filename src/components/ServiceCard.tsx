import styles from "./ServiceCard.module.css";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <div className={styles.card}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <img src={image} alt={title} className={styles.image} />
    </div>
  );
}
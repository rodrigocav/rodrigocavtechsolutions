import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const fullText =
    "Soluções tecnológicas para pequenas empresas crescerem com eficiência";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [visible, setVisible] = useState(false);

  // entrada da tela
  useEffect(() => {
    setVisible(true);
  }, []);

  // efeito de digitação
  useEffect(() => {
    if (index >= fullText.length) {
      setFinished(true);
      return;
    }

    const timeout = setTimeout(() => {
      setText(fullText.slice(0, index + 1));
      setIndex((prev) => prev + 1);
    }, 40);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section id="inicio" className={`${styles.hero} ${visible ? styles.show : ""}`}>
      <div className={styles.content}>
        
        <h1 className={styles.typing}>
          {text}
          {!finished && <span className={styles.cursor}>|</span>}
        </h1>

        <p className={styles.subtitle}>
          Desenvolvemos sites profissionais, sistemas de automação e soluções
          personalizadas para otimizar o seu negócio.
        </p>

        <div className={styles.buttons}>
          <a
            href="https://wa.me/5511999752005"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            Solicitar orçamento
          </a>
          <a
            href="#sobre"
            className={styles.secondary}
          >
            Saiba mais
          </a>
        </div>

      </div>
    </section>
  );
}
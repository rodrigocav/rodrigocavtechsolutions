import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const fullText: string =
    "Soluções tecnológicas para pequenas empresas crescerem com eficiência";

  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  // animação de entrada
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
  }, [index, fullText]);

  return (
    <section id="inicio" className={`${styles.hero} ${visible ? styles.show : ""}`}>
      <div className={styles.content}>
        <h1>
          {text}
          {!finished && <span className={styles.cursor}>|</span>}
        </h1>

        <p>
          Desenvolvemos sites profissionais, sistemas de automação e soluções
          personalizadas para otimizar o seu negócio.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Solicitar orçamento
          </button>
          <button className={styles.secondary}>
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}
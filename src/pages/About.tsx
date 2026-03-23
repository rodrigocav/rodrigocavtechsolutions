import { useEffect, useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [visible, setVisible] = useState(false);

  // animação de entrada
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="sobre" className={`${styles.about} ${visible ? styles.show : ""}`}>
      <h2>Construindo soluções digitais modernas</h2>

      <p>
        Criamos experiências digitais com foco em performance, simplicidade e
        escalabilidade — ajudando empresas a crescer com tecnologia.
      </p>

      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Design, tecnologia e resultado</h3>

          <p>
            Nosso trabalho combina engenharia de software com design moderno,
            criando produtos que não apenas funcionam bem, mas também encantam
            usuários.
          </p>

          <p>
            Utilizamos tecnologias atuais e boas práticas para garantir
            performance, segurança e manutenibilidade em cada projeto.
          </p>

          <p>
            Pensamos em cada detalhe — desde a interface até a arquitetura —
            para entregar soluções completas e eficientes.
          </p>
        </div>
      </div>

      <div className={styles.stats}>
        <Stat number={20} label="Projetos entregues" />
        <Stat number={10} label="Clientes atendidos" />
        <Stat number={100} label="Qualidade garantida" suffix="%" />
      </div>
    </section>
  );
}

/* 🔥 componente de animação dos números */
function Stat({
  number,
  label,
  suffix = "+",
}: {
  number: number;
  label: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;

      if (start >= number) {
        clearInterval(interval);
        start = number;
      }

      setCount(start);
    }, 20);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className={styles.stat}>
      <div className={styles.statNumber}>
        {count}
        {suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}
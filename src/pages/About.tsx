import styles from "./About.module.css";


export default function About() {
  return (
    <section id="sobre" className={styles.about}>
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
        <div className={styles.stat}>
          <div className={styles.statNumber}>20+</div>
          <div className={styles.statLabel}>Projetos entregues</div>
        </div>

        <div className={styles.stat}>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statLabel}>Clientes atendidos</div>
        </div>

        <div className={styles.stat}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Foco em planejamento junto com a qualidade</div>
        </div>
      </div>
    </section>
  );
}
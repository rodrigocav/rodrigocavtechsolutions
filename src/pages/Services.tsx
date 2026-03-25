import styles from "./Services.module.css";
import ServiceCard from "../components/ServiceCard";

import siteImg from "../assets/site.jpg";
import automacaoImg from "../assets/automacao.jpg";
import systemImg from "../assets/system.jpg";

export default function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <h2>Nossas Soluções</h2>

      <div className={styles.grid}>
        <ServiceCard
          image={siteImg}
          title="Desenvolvimento de Sites"
          description="Sites modernos, rápidos e responsivos."
        />

        <ServiceCard
          image={automacaoImg}
          title="Automação"
          description="Automatize processos e ganhe produtividade."
        />

        <ServiceCard
          image={systemImg}
          title="Sistemas Personalizados"
          description="Soluções feitas sob medida para sua empresa."
        />
      </div>
    </section>
  );
}
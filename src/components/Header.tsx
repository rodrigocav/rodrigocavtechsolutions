import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <img src={logo} alt="rodrigocav logo" className={styles.logo} />

        {/* botão mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <button
            onClick={() => {
              handleScroll("inicio");
              setMenuOpen(false);
            }}
          >Início</button>

          <button
            onClick={() => {
              handleScroll("sobre");
              setMenuOpen(false);
            }}
          >Sobre</button>

          <button
            onClick={() => {
              handleScroll("servicos");
              setMenuOpen(false);
            }}
          >Soluções</button>

          <button
            onClick={() => {
              handleScroll("projetos");
              setMenuOpen(false);
            }}
          >Projetos</button>
          <button

            onClick={() => {
              handleScroll("reviews");
              setMenuOpen(false);
            }}
          >Avaliações</button>

          <button
            onClick={() => {
              handleScroll("contato");
              setMenuOpen(false);
            }} 
            >Contato</button>
        </nav>
      </div>
    </header>
  );
}
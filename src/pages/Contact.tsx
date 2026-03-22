import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Mensagem enviada!");
  }

  return (
    <section id="contato" className={styles.contact}>
      <h2>Entre em Contato</h2>

      {/* INFO DE CONTATO */}
      <div className={styles.info}>
        <p>📍 Brasil</p>

        <p>
          📧 Email:{" "}
          <a href="mailto:rodrigocavtechsolutions@gmail.com">
            rodrigocavtechsolutions@gmail.com
          </a>
        </p>

        <p>
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/5511999752005"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 99975-2005
          </a>
        </p>
      </div>

      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
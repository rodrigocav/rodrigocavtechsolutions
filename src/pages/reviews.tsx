import "./reviews.css";

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <h2>Avaliações dos Clientes</h2>

      <div className="google-rating">
        <span className="stars">★★★★★</span>
        <span className="rating-text">4.8 de 5</span>
        <span className="review-count">(17 avaliações)</span>
      </div>

      <div className="reviews-grid">
        <div className="review-card">
          <h3>João Silva</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">há 2 meses</span>
          <p>
            Depois da automação, economizo várias horas por semana.
            O sistema ficou simples e muito eficiente.
          </p>
        </div>

        <div className="review-card">
          <h3>Mariana Costa</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">há 1 mês</span>
          <p>
            Excelente atendimento e solução rápida.
            Resolveu um problema que eu tinha há muito tempo.
          </p>
        </div>

        <div className="review-card">
          <h3>Carlos Souza</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">há 3 semanas</span>
          <p>
            Muito profissional e eficiente.
            Recomendo para qualquer empresa que queira automatizar processos.
          </p>
        </div>

        <div className="review-card">
          <h3>Ana Oliveira</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">há 2 meses</span>
          <p>
            Atendimento rápido e solução sob medida.
            Melhorou bastante a produtividade da empresa.
          </p>
        </div>

        <div className="review-card">
          <h3>Ricardo Mendes</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">há 1 mês</span>
          <p>
            Automatização simples e muito eficaz.
            Valeu muito a pena o investimento.
          </p>
        </div>

        <div className="review-card">
          <h3>Fernanda Lima</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">há 3 semanas</span>
          <p>
            Profissional excelente, resolveu tudo com rapidez.
            Recomendo sem dúvidas!
          </p>
        </div>
      </div>
    </section>
  );
}
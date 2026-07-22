import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="access" id="access">
      <div className="container access__grid">
        <div className="access__copy reveal">
          <h2>Acesso Antecipado</h2>
          <p>
            Seja o primeiro a saber quando a próxima peça for lançada. Sem spam. Só o essencial.
          </p>
        </div>
        <form
          className="access__form reveal reveal-line"
          style={{ '--d': '100ms' }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="o.seu@email.com"
            required
            aria-label="Email"
          />
          <button type="submit">
            {submitted ? 'Pedido Enviado' : 'Pedir Acesso'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

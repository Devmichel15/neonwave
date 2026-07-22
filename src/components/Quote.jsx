import './Quote.css';

export default function Quote() {
  return (
    <section className="quote">
      <div className="container">
        <p className="quote__mark reveal">
          "Nascemos em Luanda para mostrar que atitude não precisa de barulho."
        </p>
        <div className="quote__attr reveal reveal-line" style={{ '--d': '120ms' }}>
          — Pedro Jala, Fundador da NeonWave
        </div>
      </div>
    </section>
  );
}

import './Quote.css';

export default function Quote() {
  return (
    <section className="quote">
      <div className="container">
        <p className="quote__mark reveal">
          "Vestimos quem entende que atitude não precisa de barulho."
        </p>
        <div className="quote__attr reveal reveal-line" style={{ '--d': '120ms' }}>
          — NeonWave, Drop 002
        </div>
      </div>
    </section>
  );
}

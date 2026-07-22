import './Manifesto.css';

export default function Manifesto() {
  return (
    <section className="manifesto section-pad" id="manifesto">
      <div className="container manifesto__inner">
        <div className="manifesto__eyebrow eyebrow reveal">
          Manifesto
        </div>
        <p className="manifesto__statement reveal">
          Não perseguimos <span>hype.</span><br />
          Construímos peças que <span>ficam.</span>
        </p>
        <p className="manifesto__note reveal">
          Cada coleção nasce de um princípio simples — menos ruído, mais forma.
          Tecido técnico, corte preciso, cor contida. O resto é decoração.
        </p>
      </div>
    </section>
  );
}

import "./Spotlight.css";

export default function Spotlight() {
  return (
    <section className="section-pad" id="spotlight">
      <div className="container spotlight__grid">
        <div className="spotlight__visual reveal">
          <div className="plate dark">
            <span className="plate__index">001</span>
            <img
              className="plate__image"
              src="/take9.jpeg"
              alt="T-Shirt NeonWave em destaque"
            />
            <span className="plate__tag">A Nossa Primeira Peça</span>
          </div>
        </div>

        <div
          className="spotlight__info reveal reveal-line"
          style={{ "--d": "100ms" }}
        >
          <div className="eyebrow">A Nossa Peça</div>
          <h3>
            T-Shirt
            <br />
            NeonWave
          </h3>
          <p className="spotlight__desc">
            A nossa primeira peça. Uma t-shirt que representa mais que roupa —
            representa uma identidade, uma visão, uma marca que nasce em Luanda
            para o mundo. Feita com algodão premium, pensada para quem veste
            atitude.
          </p>

          <div className="plaque">
            <div className="plaque__row">
              <span>Material</span>
              <span>Algodão premium</span>
            </div>
            <div className="plaque__row">
              <span>Fit</span>
              <span>Regular, confortável</span>
            </div>
            <div className="plaque__row">
              <span>Origem</span>
              <span>Criada em Luanda, Angola</span>
            </div>
            <div className="plaque__row">
              <span>Fundadora</span>
              <span>Pedro Jala</span>
            </div>
          </div>

          <div className="spotlight__cta">
            <a href="#access" className="btn btn-primary">
              Quero Saber Mais
            </a>
            <a href="#manifesto" className="btn btn-ghost">
              Nosso Manifesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

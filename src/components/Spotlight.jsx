import "./Spotlight.css";

export default function Spotlight() {
  return (
    <section className="section-pad" id="spotlight">
      <div className="container spotlight__grid">
        <div className="spotlight__visual reveal">
          <div className="plate dark">
            <span className="plate__index">017 / 200</span>
            <img
              className="plate__image"
              src="/take9.jpeg"
              alt="Casaco Técnico Shell em destaque"
            />
            <span className="plate__tag">Peça em Destaque</span>
          </div>
        </div>

        <div
          className="spotlight__info reveal reveal-line"
          style={{ "--d": "100ms" }}
        >
          <div className="eyebrow">Peça em Destaque</div>
          <h3>
            Casaco
            <br />
            Técnico Shell
          </h3>
          <div className="spotlight__price">68.000 Kz</div>
          <p className="spotlight__desc">
            Construído em nylon ripstop de alta densidade, com costuras seladas
            e ombro estruturado. Uma peça pensada para o clima de Luanda e para
            durar além de uma estação.
          </p>

          <div className="plaque">
            <div className="plaque__row">
              <span>Material</span>
              <span>Nylon técnico ripstop</span>
            </div>
            <div className="plaque__row">
              <span>Fit</span>
              <span>Regular, ombro estruturado</span>
            </div>
            <div className="plaque__row">
              <span>Origem</span>
              <span>Desenhado em Luanda</span>
            </div>
            <div className="plaque__row">
              <span>Edição</span>
              <span>017 de 200</span>
            </div>
          </div>

          <div className="spotlight__cta">
            <a href="#access" className="btn btn-primary">
              Adicionar ao Carrinho
            </a>
            <a href="#access" className="btn btn-ghost">
              Ver Detalhes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

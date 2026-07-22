import "./Lookbook.css";

const frames = [
  {
    location: "01 — Ilha do Cabo",
    frame: "Frame 03",
    delay: null,
    image: "/take5.jpeg",
  },
  {
    location: "02 — Marginal",
    frame: "Frame 07",
    delay: "80ms",
    image: "/take6.jpeg",
  },
  {
    location: "03 — Baía de Luanda",
    frame: "Frame 12",
    delay: "160ms",
    image: "/take7.jpeg",
  },
  {
    location: "04 — Baixa",
    frame: "Frame 19",
    delay: "240ms",
    image: "/take8.jpeg",
  },
];

export default function Lookbook() {
  return (
    <section className="lookbook section-pad" id="lookbook">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Editorial</div>
          <h2 className="reveal">Editorial — NeonWave</h2>
          <p className="reveal">
            Luanda é o nosso palco. A cidade onde a cultura nasce e o streetwear ganha vida.
          </p>
        </div>
      </div>

      <div className="lookbook__strip">
        {frames.map((f, i) => (
          <figure
            key={i}
            className={`lookbook__frame reveal${f.delay ? " reveal-line" : ""}`}
            style={f.delay ? { "--d": f.delay } : undefined}
          >
            <div className="plate dark grain">
              <img className="plate__image" src={f.image} alt={f.location} />
            </div>
            <figcaption className="lookbook__cap">
              <span>{f.location}</span>
              <span>{f.frame}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

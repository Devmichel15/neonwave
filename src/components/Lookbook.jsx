import './Lookbook.css';

const frames = [
  {
    location: '01 — Ilha do Cabo',
    frame: 'Frame 03',
    delay: null,
    paths: (
      <>
        <path d="M150,90 L120,150 L110,300 L130,470 L270,470 L290,300 L280,150 L250,90 Z" />
        <line x1="0" y1="380" x2="400" y2="380" />
      </>
    ),
  },
  {
    location: '02 — Marginal',
    frame: 'Frame 07',
    delay: '80ms',
    paths: (
      <>
        <path d="M100,470 L120,180 L200,90 L280,180 L300,470 Z" />
        <line x1="0" y1="200" x2="400" y2="200" />
      </>
    ),
  },
  {
    location: '03 — Baía de Luanda',
    frame: 'Frame 12',
    delay: '160ms',
    paths: (
      <path d="M200,90 L120,470 M200,90 L280,470 M150,300 L250,300" />
    ),
  },
  {
    location: '04 — Baixa',
    frame: 'Frame 19',
    delay: '240ms',
    paths: (
      <>
        <path d="M90,470 L110,140 L200,80 L290,140 L310,470" />
        <line x1="110" y1="260" x2="290" y2="260" />
      </>
    ),
  },
];

export default function Lookbook() {
  return (
    <section className="lookbook section-pad" id="lookbook">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Editorial</div>
          <h2 className="reveal">Lookbook — Drop 002</h2>
          <p className="reveal">
            Quatro pontos da cidade. A coleção fotografada onde nasceu.
          </p>
        </div>
      </div>

      <div className="lookbook__strip">
        {frames.map((f, i) => (
          <figure
            key={i}
            className={`lookbook__frame reveal${f.delay ? ' reveal-line' : ''}`}
            style={f.delay ? { '--d': f.delay } : undefined}
          >
            <div className="plate dark grain">
              <svg className="plate__silhouette" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                {f.paths}
              </svg>
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

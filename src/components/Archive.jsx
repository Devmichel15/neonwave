import "./Archive.css";

const archiveImages = [
  { src: "/take10.jpeg", alt: "Detalhe de styling em ambiente urbano" },
  { src: "/take11.jpeg", alt: "Momento editorial com composição minimalista" },
  { src: "/take12.jpeg", alt: "Cenário urbano com foco em textura e forma" },
  { src: "/take13.jpeg", alt: "Visual de coleção em ambiente nocturno" },
  { src: "/take14.jpeg", alt: "Composição de peças com luz e sombra" },
  { src: "/take15.jpeg", alt: "Estética de editorial para a marca" },
  { src: "/take16.jpeg", alt: "Tom editorial com preto, cinza e contraste" },
  {
    src: "/take17.jpeg",
    alt: "Imagem de arquivo reforçando a identidade da marca",
  },
];

export default function Archive() {
  return (
    <section className="archive section-pad" id="archive">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Arquivo</div>
          <h2 className="reveal">Memória visual</h2>
          <p className="reveal">
            Uma seleção de imagens que reforça a linguagem da marca: urbanidade,
            luz, textura e presença.
          </p>
        </div>

        <div className="archive__grid">
          {archiveImages.map((image, index) => (
            <figure
              key={image.src}
              className={`archive__item reveal${index % 2 ? " reveal-line" : ""}`}
              style={index % 2 ? { "--d": "120ms" } : undefined}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

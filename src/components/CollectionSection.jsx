import ProductCard from "./ProductCard";
import "./CollectionSection.css";

const products = [
  {
    index: "01",
    name: "T-Shirt NeonWave",
    sub: "Branco · Algodão Premium",
    dark: false,
    delay: null,
    svg: (
      <svg
        className="plate__silhouette"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M130,80 L270,80 L280,180 L255,470 L215,470 L205,220 L195,220 L185,470 L145,470 L120,180 Z" />
        <line x1="130" y1="130" x2="270" y2="130" />
      </svg>
    ),
  },
];

export default function CollectionSection() {
  return (
    <section className="section-pad" id="drop">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">A Nossa Peça</div>
          <h2 className="reveal">T-Shirt NeonWave</h2>
          <p className="reveal">
            A primeira peça. Simples, directa, com a identidade NeonWave costurada
            em cada detalhe. Feita para quem veste atitude.
          </p>
        </div>

        <div className="drop-grid">
          {products.map((product) => (
            <ProductCard key={product.index} {...product}>
              {product.media ? (
                <img
                  className="plate__image"
                  src={product.media}
                  alt={product.name}
                />
              ) : (
                product.svg
              )}
            </ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}

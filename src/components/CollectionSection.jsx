import ProductCard from "./ProductCard";
import "./CollectionSection.css";

const products = [
  {
    index: "01",
    name: "T-Shirt NeonWave",
    sub: "Vista frontal",
    media: "/take2.jpeg",
    size: "large",
    delay: null,
  },
  {
    index: "02",
    name: "T-Shirt NeonWave",
    sub: "Detalhe do logo",
    media: "/take3.jpeg",
    size: "large",
    delay: "80ms",
  },
  {
    index: "03",
    name: "T-Shirt NeonWave",
    sub: "Ângulo lateral",
    media: "/take10.jpeg",
    size: "medium",
    delay: null,
  },
  {
    index: "04",
    name: "T-Shirt NeonWave",
    sub: "Costas",
    media: "/take11.jpeg",
    size: "medium",
    delay: "80ms",
  },
  {
    index: "05",
    name: "T-Shirt NeonWave",
    sub: "Close-up",
    media: "/take12.jpeg",
    size: "medium",
    delay: "160ms",
  },
  {
    index: "06",
    name: "T-Shirt NeonWave",
    sub: "Em uso",
    media: "/take13.jpeg",
    size: "large",
    delay: null,
  },
  {
    index: "07",
    name: "T-Shirt NeonWave",
    sub: "Detalle tek",
    media: "/take14.jpeg",
    size: "large",
    delay: "80ms",
  },
  {
    index: "08",
    name: "T-Shirt NeonWave",
    sub: "Perspectiva",
    media: "/take15.jpeg",
    size: "medium",
    delay: null,
  },
  {
    index: "09",
    name: "T-Shirt NeonWave",
    sub: "Ambiente",
    media: "/take16.jpeg",
    size: "medium",
    delay: "80ms",
  },
  {
    index: "10",
    name: "T-Shirt NeonWave",
    sub: "Look completo",
    media: "/take17.jpeg",
    size: "medium",
    delay: "160ms",
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
              <img
                className="plate__image"
                src={product.media}
                alt={product.name}
              />
            </ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}

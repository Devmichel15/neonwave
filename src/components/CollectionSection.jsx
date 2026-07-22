import ProductCard from './ProductCard';
import './CollectionSection.css';

const products = [
  {
    index: '01',
    name: 'Casaco Técnico Shell',
    sub: 'Preto Absoluto · Nylon Ripstop',
    price: '68.000 Kz',
    dark: true,
    delay: null,
    svg: (
      <svg className="plate__silhouette" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <path d="M140,70 L120,110 L90,160 L100,320 L120,470 L165,470 L170,220 L200,220 L230,470 L275,470 L295,160 L262,110 L242,70 Z" />
        <path d="M120,110 L60,180 L75,230 L100,170" />
        <path d="M242,70 L302,180 L285,230 L262,170" />
        <line x1="150" y1="70" x2="250" y2="70" />
      </svg>
    ),
  },
  {
    index: '02',
    name: 'Hoodie Oversized',
    sub: 'Cinza Grafite · Felpa 420g',
    price: '42.000 Kz',
    dark: false,
    delay: '120ms',
    svg: (
      <svg className="plate__silhouette" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <path d="M110,120 L70,150 L60,230 L95,240 L100,470 L300,470 L305,240 L340,230 L330,150 L290,120 L260,150 L140,150 Z" />
        <path d="M180,150 Q200,175 220,150" />
      </svg>
    ),
  },
  {
    index: '03',
    name: 'Calça Cargo Tapered',
    sub: 'Preto Absoluto · Algodão Técnico',
    price: '55.000 Kz',
    dark: false,
    delay: '220ms',
    svg: (
      <svg className="plate__silhouette" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <path d="M130,80 L270,80 L280,180 L255,470 L215,470 L205,220 L195,220 L185,470 L145,470 L120,180 Z" />
        <line x1="130" y1="130" x2="270" y2="130" />
        <line x1="150" y1="300" x2="185" y2="300" />
        <line x1="215" y1="300" x2="250" y2="300" />
      </svg>
    ),
  },
];

export default function CollectionSection() {
  return (
    <section className="section-pad" id="drop">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Drop 002</div>
          <h2 className="reveal">A Coleção</h2>
          <p className="reveal">
            Vinte e quatro peças. Nenhuma repetida em massa. Desenhadas em Luanda, feitas para o corpo em movimento.
          </p>
        </div>

        <div className="drop-grid">
          {products.map((product) => (
            <ProductCard key={product.index} {...product}>
              {product.svg}
            </ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}

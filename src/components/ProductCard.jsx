import './ProductCard.css';

export default function ProductCard({ index, name, sub, price, dark, delay, children }) {
  return (
    <article
      className={`card reveal${delay ? ' reveal-line' : ''}`}
      style={delay ? { '--d': delay } : undefined}
    >
      <div className="card__frame">
        <div className={`plate${dark ? ' dark' : ''}`}>
          <span className="plate__index">{index}</span>
          {children}
          <span className="plate__tag">{name}</span>
        </div>
      </div>
      <div className="card__row">
        <div>
          <div className="card__name">{name}</div>
          <div className="card__sub">{sub}</div>
        </div>
        <div className="card__price">{price}</div>
      </div>
    </article>
  );
}

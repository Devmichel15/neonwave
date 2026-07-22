import { useCart } from '../hooks/useCart.js';
import './CartSidebar.css';

export default function CartSidebar() {
  const { items, count, isOpen, removeItem, closeCart, checkout } = useCart();

  return (
    <>
      <div
        className={`cart-overlay${isOpen ? ' open' : ''}`}
        onClick={closeCart}
      />
      <aside className={`cart-sidebar${isOpen ? ' open' : ''}`}>
        <div className="cart-sidebar__header">
          <h3>Carrinho</h3>
          <button className="cart-sidebar__close" onClick={closeCart} aria-label="Fechar carrinho">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar__body">
          {count === 0 ? (
            <p className="cart-sidebar__empty">O carrinho está vazio.</p>
          ) : (
            <ul className="cart-sidebar__items">
              {items.map((item) => (
                <li key={item.id} className="cart-sidebar__item">
                  <div className="cart-sidebar__item-info">
                    <span className="cart-sidebar__item-name">{item.name}</span>
                    <span className="cart-sidebar__item-sub">{item.sub}</span>
                    {item.qty > 1 && <span className="cart-sidebar__item-qty">x{item.qty}</span>}
                  </div>
                  <button
                    className="cart-sidebar__item-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remover"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {count > 0 && (
          <div className="cart-sidebar__footer">
            <button className="btn btn-primary cart-sidebar__checkout" onClick={checkout}>
              Finalizar via WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

import { useState, useCallback } from 'react';
import { CartContext, WHATSAPP_NUMBER, DEFAULT_ITEM } from './CartContext.js';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item = DEFAULT_ITEM) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const checkout = useCallback(() => {
    const lines = items.map((i) => `${i.name} x${i.qty}`).join('%0A');
    const msg = `Olá! Gostaria de fazer um pedido:%0A%0A${lines}%0A%0APodemos combinar a entrega?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  }, [items]);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, count, isOpen, addItem, removeItem, toggleCart, closeCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

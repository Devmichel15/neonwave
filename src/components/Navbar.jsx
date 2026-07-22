import { useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle("solid", window.scrollY > 40);
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" ref={navRef}>
      <div className="container nav__row">
        <a href="#top" className="nav__logo">
          NeonWave
        </a>
        <nav className="nav__links">
          <a href="#drop">Coleção</a>
          <a href="#lookbook">Editorial</a>
          <a href="#manifesto">Sobre</a>
          <a href="#archive">Arquivo</a>
        </nav>
        <div className="nav__actions">
          <button aria-label="Pesquisar">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.6" y2="16.6" />
            </svg>
          </button>
          <button className="nav__bag" aria-label="Carrinho">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4">
              <path d="M6 8h12l-1 12H7L6 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span>0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

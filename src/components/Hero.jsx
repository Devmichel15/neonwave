import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const waveRef = useRef(null);

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;
    const timer = setTimeout(() => wave.classList.add('in'), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__eyebrow eyebrow reveal">
          NeonWave — Luanda, Angola
        </div>

        <h1 className="hero__title reveal">
          Silêncio<br />é <em>posição.</em>
        </h1>

        <div className="hero__side reveal reveal-line" style={{ '--d': '120ms' }}>
          <p className="hero__desc">
            Streetwear premium nascido em Luanda. Peças em edição limitada, construídas para durar mais do que a tendência.
          </p>
          <a href="#drop" className="btn btn-primary">
            Ver Coleção
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <div className="hero__meta">
            <span><strong>Drop 002</strong> — 24 peças</span>
            <span>Edição limitada · Numerada</span>
          </div>
        </div>

        <div className="hero__wave-wrap">
          <svg className="wave-line" ref={waveRef} viewBox="0 0 1200 90" preserveAspectRatio="none">
            <path d="M0,45 L260,45 L290,14 L320,76 L350,45 L1200,45" />
          </svg>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <span className="dot" />
      </div>
    </section>
  );
}

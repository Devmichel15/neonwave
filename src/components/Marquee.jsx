import { useEffect, useRef } from 'react';
import './Marquee.css';

const items = [
  'Streetwear Angolano',
  'Luanda, Angola',
  'NeonWave',
  'Feito por Jovens',
];

const DotSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.innerHTML += track.innerHTML;
  }, []);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" ref={trackRef}>
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <DotSvg />
          </span>
        ))}
      </div>
    </div>
  );
}

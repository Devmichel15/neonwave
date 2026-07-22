import { useEffect, useRef } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const fillRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      fill.style.width = pct + '%';
    };

    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-wave">
      <div className="scroll-wave__fill" ref={fillRef} />
    </div>
  );
}

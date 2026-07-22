import { useEffect, useRef } from 'react';
import './CursorDot.css';

export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMouseMove = (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const addGrow = () => dot.classList.add('grow');
    const removeGrow = () => dot.classList.remove('grow');

    window.addEventListener('mousemove', onMouseMove);

    const interactives = document.querySelectorAll('a, button, input');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', addGrow);
      el.addEventListener('mouseleave', removeGrow);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', addGrow);
        el.removeEventListener('mouseleave', removeGrow);
      });
    };
  }, []);

  return <div className="cursor-dot" ref={dotRef} />;
}

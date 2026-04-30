import { useState, useEffect, useRef } from 'react';

/**
 * Hook para animar números de KPI cuando entran en pantalla.
 * @param {number|string} endValue - El valor final al que debe llegar el contador.
 * @param {number} duration - Duración en milisegundos (default: 1800ms).
 * @returns {[number, React.RefObject]} - El valor actual y la referencia al elemento.
 */
export const useCounter = (endValue, duration = 1800) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let startTimestamp = null;
        const finalValue = parseInt(endValue, 10);
        
        if (isNaN(finalValue)) {
          setCount(endValue);
          return;
        }

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * finalValue));
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
        observer.disconnect(); // Se desconecta para que anime solo la primera vez
      }
    }, { threshold: 0.3 }); // 30% visible según el requerimiento

    observer.observe(node);
    return () => observer.disconnect();
  }, [endValue, duration]);

  return [count, nodeRef];
};
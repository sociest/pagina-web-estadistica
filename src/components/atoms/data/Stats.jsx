import React from 'react';

/**
 * Símbolos Estadísticos (Átomo 10)
 */
export const StatSymbol = ({ symbol, className = "top-20 right-12 text-6xl md:text-8xl" }) => (
  <div className={`hidden md:block absolute font-black text-[#00447e] opacity-[0.06] select-none pointer-events-none ${className}`} aria-hidden="true">
    {symbol}
  </div>
);

export const MarginalAnnotation = ({ text, className = "top-2 left-3" }) => (
  <div className={`absolute font-mono text-[7px] text-[#94a3b8] opacity-40 ${className}`}>
    {text}
  </div>
);

export const StatisticalAnnotations = ({ annotations = [], position = 'bottom' }) => {
  if (!annotations.length) return null;

  return (
    <div
      className={[
        'absolute left-0 right-0 pointer-events-none',
        position === 'bottom' ? 'bottom-3 sm:bottom-5' : 'top-3 sm:top-5',
      ].join(' ')}
      aria-hidden="true"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex justify-end gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] text-white/65">
          {annotations.map((annotation) => (
            <span key={`${annotation.label}-${annotation.value}`}>
              {annotation.label} = {annotation.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
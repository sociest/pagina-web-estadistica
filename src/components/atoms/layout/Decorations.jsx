import React from 'react';

/**
 * Puntos y Líneas decorativas (Átomos 7 y 8)
 */
export const Dot = ({ variant = 'indicator' }) => {
  if (variant === 'hover') {
    return <div className="size-[6px] rounded-full shrink-0 transition-all duration-200 group-hover:scale-125" style={{ background: '#00447e60' }} />;
  }
  return <div className="size-2 rounded-full transition-all duration-300" style={{ background: '#00447e' }} />;
};

export const Line = ({ variant = 'horizontal' }) => {
  if (variant === 'gradient') return <div className="h-[4px] rounded-full mb-2" style={{ background: 'linear-gradient(90deg, #00447e, #00447e40, transparent)' }} />;
  if (variant === 'vertical') return <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-[#00447e] via-[#00447e40] to-transparent" />;
  return <div className="h-1 w-8 sm:w-12 bg-[#00447e]" />;
};

/**
 * Curvas SVG decorativas (Átomo 9)
 */
export const SvgCurve = ({ variant = 'card' }) => {
  if (variant === 'background') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 1400 600" preserveAspectRatio="none" fill="none">
        <path d="M0 400C350 400 700 200 1050 150C1200 120 1320 100 1400 400" stroke="#00447e" strokeWidth="2" />
        <path d="M0 420C350 420 700 220 1050 170C1200 140 1320 120 1400 420" stroke="#00447e" strokeWidth="1.5" opacity="0.6" />
      </svg>
    );
  }
  return (
    <svg className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.12]" viewBox="0 0 100 100" fill="none">
      <path d="M0 50 Q25 30 50 50 T100 50" stroke="#00447e" strokeWidth="2" />
    </svg>
  );
};
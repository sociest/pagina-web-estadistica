import React from 'react';

export default function StatisticalOverlay({ opacity = '0.05', color = 'currentColor', className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} style={{ opacity }}>
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
        <path d="M0 150 Q100 50 200 150 T400 150" stroke={color} strokeWidth="2" />
        {[...Array(12)].map((_, i) => (
          <line key={i} x1={i * 35} y1="0" x2={i * 35} y2="300" stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" />
        ))}
        {[...Array(10)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="2 6" />
        ))}
      </svg>
    </div>
  );
}

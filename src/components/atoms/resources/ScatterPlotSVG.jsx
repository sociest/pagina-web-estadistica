import React from 'react';

export default function ScatterPlotSVG({ className = '', color = '#ea580c' }) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 200 200" fill="none">
      <line x1="20" y1="180" x2="180" y2="180" stroke={color} strokeWidth="2" opacity="0.5" />
      <line x1="20" y1="180" x2="20" y2="20" stroke={color} strokeWidth="2" opacity="0.5" />
      <path d="M 30,160 Q 70,120 100,100 T 170,40" stroke={color} strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
      {[40, 55, 70, 85, 110, 130, 145, 160].map((cx, i) => (
        <circle key={i} cx={cx} cy={180 - cx * 0.8 + (Math.random() * 30 - 15)} r="4" fill={color} opacity="0.8" />
      ))}
    </svg>
  );
}

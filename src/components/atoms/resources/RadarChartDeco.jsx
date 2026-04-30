import React from 'react';

export default function RadarChartDeco({ className = '', color = '#ea580c' }) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none">
      <polygon points="50,10 90,35 90,75 50,95 10,75 10,35" stroke={color} strokeWidth="1" opacity="0.3" fill={`${color}10`} />
      <polygon points="50,30 75,45 65,70 35,70 25,45" stroke={color} strokeWidth="2" opacity="0.6" fill={`${color}20`} />
      <circle cx="50" cy="50" r="2" fill={color} opacity="0.8"/>
    </svg>
  );
}

import React from 'react';

export default function BellCurveSVG({ className = '' }) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
      <path d="M 0,380 C 300,380 400,20 500,20 C 600,20 700,380 1000,380" stroke="#ea580c" strokeWidth="4" opacity="0.6" />
      <path d="M 0,380 C 300,380 400,20 500,20 C 600,20 700,380 1000,380" fill="#ea580c" opacity="0.1" />
      <line x1="500" y1="20" x2="500" y2="380" stroke="white" strokeWidth="2" strokeDasharray="8 8" opacity="0.3" />
      <text x="510" y="200" fill="white" fontSize="24" opacity="0.5" fontFamily="serif" fontStyle="italic">μ</text>
    </svg>
  );
}

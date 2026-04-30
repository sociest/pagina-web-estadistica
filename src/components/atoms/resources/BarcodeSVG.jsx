import React from 'react';

export default function BarcodeSVG({ className = '' }) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 30" fill="currentColor">
      <rect x="0" y="0" width="3" height="30" /><rect x="5" y="0" width="1" height="30" />
      <rect x="8" y="0" width="4" height="30" /><rect x="14" y="0" width="2" height="30" />
      <rect x="18" y="0" width="1" height="30" /><rect x="22" y="0" width="5" height="30" />
      <rect x="29" y="0" width="2" height="30" /><rect x="33" y="0" width="1" height="30" />
      <rect x="37" y="0" width="6" height="30" /><rect x="45" y="0" width="2" height="30" />
      <rect x="50" y="0" width="4" height="30" /><rect x="56" y="0" width="1" height="30" />
      <rect x="60" y="0" width="3" height="30" /><rect x="65" y="0" width="2" height="30" />
      <rect x="69" y="0" width="5" height="30" /><rect x="76" y="0" width="1" height="30" />
      <rect x="80" y="0" width="4" height="30" /><rect x="86" y="0" width="2" height="30" />
      <rect x="90" y="0" width="1" height="30" /><rect x="93" y="0" width="7" height="30" />
    </svg>
  );
}

import React from 'react';

/**
 * Efectos visuales de imagen y overlay (Átomos 11 y 12)
 */
export const ArchiveImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover grayscale-[0.7] contrast-[1.2]" style={{ filter: 'grayscale(0.7) contrast(1.2)' }} />
);

export const OverlayGradient = () => (
  <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.20) 100%)' }} />
);
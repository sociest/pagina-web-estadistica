import React from 'react';

/**
 * Badges y Tags (Átomo 6)
 * @param {'small' | 'medium'} variant 
 */
export const Badge = ({ variant = 'small', children, color = '#ea580c' }) => {
  if (variant === 'medium') {
    return (
      <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-[12px] font-bold backdrop-blur-sm text-white"
           style={{ background: '#00447edd', border: '1px solid #00447e', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
        {children}
      </div>
    );
  }
  
  return (
    <span className="shrink-0 px-2 py-0.5 rounded-full text-sm sm:text-base md:text-lg font-black text-white uppercase tracking-wide shadow-sm"
          style={{ background: color }}>
      {children}
    </span>
  );
};
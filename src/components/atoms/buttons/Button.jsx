import React from 'react';
import PropTypes from 'prop-types';

/**
 * Botones institucionales (Átomos 2, 3 y 4)
 * @param {'primary' | 'orange' | 'outline' | 'sia'} variant 
 */
export const Button = ({ variant = 'primary', children, onClick, className = '' }) => {
  if (variant === 'sia') {
    return (
      <button type="button" onClick={onClick} className={`hidden sm:flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[11px] md:text-[12px] font-bold text-[#00447e] transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap shadow-md ${className}`} style={{ background: 'linear-gradient(135deg, #ffffff 0%, #e8f4f8 100%)' }}>
        {children}
      </button>
    );
  }

  const baseStyle = "px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold text-[13px] sm:text-[15px] text-white transition-all flex items-center gap-2";
  
  if (variant === 'outline') {
    return (
      <button type="button" onClick={onClick} className={`${baseStyle} border-2 border-white/40 backdrop-blur-sm hover:bg-white/15 ${className}`}>
        {children}
      </button>
    );
  }

  const bgGradient = variant === 'orange' 
    ? 'linear-gradient(135deg, #ea580c 0%, #ea580ccc 100%)'
    : 'linear-gradient(135deg, #00447e 0%, #00447ecc 100%)';

  return (
    <button type="button" onClick={onClick} className={`${baseStyle} shadow-xl hover:scale-105 hover:shadow-2xl ${className}`} style={{ background: bgGradient }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'orange', 'outline', 'sia']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
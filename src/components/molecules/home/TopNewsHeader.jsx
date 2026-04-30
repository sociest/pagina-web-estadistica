import React from 'react';
import PropTypes from 'prop-types';

export const TopNewsHeader = ({ mode = 'section' }) => {
  const isHero = mode === 'hero';

  return (
    <div
      className={isHero ? 'mb-4 rounded-[1.3rem] p-4' : 'mb-5 sm:mb-6 rounded-[1.35rem] sm:rounded-[1.5rem] p-4 sm:p-5'}
      style={
        isHero
          ? {
              background: 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 8px 28px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.16)',
            }
          : {
              background: 'linear-gradient(140deg, #001d3d 0%, #003666 55%, #00447e 100%)',
              boxShadow: '0 10px 26px rgba(0, 29, 61, 0.22)',
            }
      }
    >
      <div className="flex items-center gap-2.5 mb-2">
        <div className="h-1 w-10 bg-gradient-to-r from-[#ea580c] to-[#fb923c] shadow-lg shadow-orange-500/40 rounded-full" />
        <span className="text-xs font-black text-orange-300 uppercase tracking-[0.35em]">
          Actualidad
        </span>
      </div>

      <h2 className={isHero ? 'text-2xl font-black text-white tracking-tight mb-1.5' : 'text-[1.6rem] sm:text-3xl font-black text-white tracking-tight mb-1.5'}>
        Noticias <span className="text-[#ea580c]">Destacadas</span>
      </h2>
      <p className={isHero ? 'text-xs text-blue-100/80 font-bold uppercase tracking-wider' : 'text-xs text-blue-200/80 font-bold uppercase tracking-wider'}>
        Las 3 publicaciones mas recientes
      </p>
    </div>
  );
};

TopNewsHeader.propTypes = {
  mode: PropTypes.oneOf(['section', 'hero']),
};

import React from 'react';

/**
 * Campo de búsqueda (Átomo 5)
 */
export const SearchInput = ({ placeholder = "Buscar...", ...props }) => (
  <input 
    type="text" 
    placeholder={placeholder}
    {...props}
    className="w-[140px] sm:w-[180px] pl-3 pr-8 py-1.5 text-[12px] sm:text-[13px] border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-white/40 bg-white/20 text-white placeholder:text-white/60 transition-all" 
  />
);
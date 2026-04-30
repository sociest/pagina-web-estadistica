import React from 'react';
import { Search } from 'lucide-react';

export default function BancoDatosSearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-2.5 mb-10 sticky top-28 z-30">
      <div className="w-full relative group">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ea580c] transition-colors size-6" />
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="BUSCAR BASE DE DATOS, TESIS O TITULO..."
          className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] py-4.5 pl-16 pr-6 text-sm md:text-base font-black uppercase tracking-widest text-[#001d3d] focus:outline-none focus:bg-white focus:border-[#ea580c] transition-all"
        />
      </div>
    </div>
  );
}

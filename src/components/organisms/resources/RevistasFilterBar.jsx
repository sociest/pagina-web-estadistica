import React from 'react';
import { Newspaper } from 'lucide-react';

export default function RevistasFilterBar({ filters, activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b-2 border-slate-200 pb-6 sticky top-28 z-40 bg-[#f8fafc]/95 backdrop-blur-md pt-4">
      <div>
        <h2 className="text-3xl font-black text-[#001d3d] uppercase tracking-tighter flex items-center gap-3">
          <Newspaper className="text-[#ea580c]" size={32} /> Colecciones
        </h2>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar gap-3 w-full md:w-auto pb-2 md:pb-0">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 px-6 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest transition-all ${
              activeFilter === filter
                ? 'bg-[#001d3d] text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-500 hover:border-[#001d3d] hover:text-[#001d3d]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

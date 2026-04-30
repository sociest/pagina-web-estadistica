import React from 'react';

export default function CategoryBadge({ category }) {
  let styles = 'bg-slate-800 text-white';

  if (category === 'Censos') styles = 'bg-[#001d3d] text-white';
  if (category === 'Encuestas de Hogares' || category === 'Encuestas de Salud') styles = 'bg-[#ea580c] text-white';
  if (category === 'Series Economicas') styles = 'bg-emerald-700 text-white';
  if (category === 'Repositorio') styles = 'bg-slate-100 text-slate-700 border border-slate-300';

  return (
    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest shadow-sm ${styles}`}>
      {category}
    </span>
  );
}

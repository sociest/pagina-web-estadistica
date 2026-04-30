import React from 'react';
import { ArrowLeft, Layers, UserCircle } from 'lucide-react';

export default function TesisSelectedEntity({ activeTab, selectedEntity, onClear }) {
  return (
    <div className="bg-[#001d3d] text-white p-8 rounded-[2.5rem] shadow-xl border-b-[8px] border-[#ea580c] mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="size-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#ea580c] shadow-inner">
          {activeTab === 'autores' ? <UserCircle size={32} /> : <Layers size={32} />}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200 mb-1">Filtrado por:</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">{selectedEntity}</h2>
        </div>
      </div>
      <button
        onClick={onClear}
        className="bg-white/10 hover:bg-[#ea580c] border border-white/20 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-colors"
      >
        <ArrowLeft size={16} /> Volver al Listado
      </button>
    </div>
  );
}

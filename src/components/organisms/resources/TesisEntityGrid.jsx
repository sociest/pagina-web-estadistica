import React from 'react';
import { Layers, UserCircle } from 'lucide-react';

export default function TesisEntityGrid({ activeTab, entities, onSelectEntity }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {entities.map((entity) => (
        <button
          key={entity.name}
          onClick={() => onSelectEntity(entity.name)}
          className="bg-white border border-slate-200 p-8 rounded-[2.5rem] flex items-center justify-between group hover:border-[#001d3d] hover:shadow-xl transition-all text-left relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-slate-100 group-hover:bg-[#ea580c] transition-colors" />
          <div className="flex flex-col gap-1 pl-4 pr-6">
            <span className="text-base font-black text-[#001d3d] leading-tight group-hover:text-[#ea580c] transition-colors line-clamp-2">
              {entity.name}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              {activeTab === 'autores' ? 'Autor' : activeTab === 'tutores' ? 'Tutor' : 'Materia / Area'}
            </span>
          </div>
          <div className="flex flex-col items-center bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl shrink-0 group-hover:bg-[#001d3d] group-hover:text-white transition-colors">
            <span className="text-xl font-black leading-none">{entity.count}</span>
            <span className="text-[9px] font-black uppercase tracking-wider mt-1">Tesis</span>
          </div>
        </button>
      ))}
    </div>
  );
}

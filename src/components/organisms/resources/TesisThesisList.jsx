import React from 'react';
import { ChevronRight, GraduationCap, User, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TesisThesisList({ theses, onSelectTesis }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {theses.map((tesis) => (
        <motion.div
          layout
          key={tesis.id}
          onClick={() => onSelectTesis(tesis)}
          className="bg-white border border-slate-200 rounded-[3rem] p-8 flex flex-col md:flex-row group hover:shadow-[0_15px_40px_-10px_rgba(234,88,12,0.15)] hover:border-[#ea580c] transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="md:w-44 bg-slate-50 rounded-3xl p-8 flex flex-col items-center justify-center shrink-0 group-hover:bg-[#001d3d] transition-colors duration-500 mb-6 md:mb-0 md:mr-10 border border-slate-100 shadow-inner">
            <GraduationCap size={48} className="text-slate-300 mb-4 group-hover:text-[#ea580c] transition-colors" />
            <span className="bg-white border border-slate-200 text-[#001d3d] px-4 py-2 rounded-xl text-sm font-black uppercase shadow-sm">
              {tesis.anoDefensa}
            </span>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-[#ea580c]/10 text-[#ea580c] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-orange-200">
                {tesis.materia}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tesis.modalidad}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight mb-6 group-hover:text-[#ea580c] transition-colors">
              {tesis.titulo}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <User size={20} className="text-[#ea580c] shrink-0" />
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase">Investigador</p>
                  <p className="text-sm font-bold text-slate-700">{tesis.autor}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <Users size={20} className="text-[#001d3d] shrink-0" />
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase">Tutor</p>
                  <p className="text-sm font-bold text-slate-700">{tesis.tutor}</p>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {tesis.palabrasClave.slice(0, 3).map((keyword) => (
                  <span key={keyword} className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    #{keyword}
                  </span>
                ))}
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#ea580c] flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl group-hover:bg-[#ea580c] group-hover:text-white transition-all">
                Ver Resumen <ChevronRight size={16} />
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

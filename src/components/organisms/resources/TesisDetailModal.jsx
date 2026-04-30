import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlignLeft, ExternalLink, School, Sigma, X } from 'lucide-react';

export default function TesisDetailModal({ selectedTesis, onClose }) {
  return (
    <AnimatePresence>
      {selectedTesis && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#001d3d]/90 backdrop-blur-md cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[4rem] shadow-2xl relative flex flex-col overflow-hidden border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 z-50 bg-white/50 text-slate-500 rounded-full p-3 hover:bg-[#ea580c] hover:text-white transition-all"
            >
              <X size={28} />
            </button>
            <div className="bg-[#001d3d] p-10 md:p-16 text-white border-b-[8px] border-[#ea580c] relative">
              <div className="absolute inset-0 opacity-10">
                <Sigma size={300} className="translate-x-1/2" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <School size={20} className="text-[#ea580c]" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-200">
                    {selectedTesis.materia}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight pr-10">
                  {selectedTesis.titulo}
                </h2>
              </div>
            </div>
            <div className="p-10 md:p-16 overflow-y-auto flex-1 relative bg-white">
              <h3 className="text-xl font-black text-[#001d3d] uppercase tracking-tighter mb-8 flex items-center gap-3">
                <AlignLeft className="text-[#ea580c]" /> Resumen / Abstract
              </h3>
              <p className="text-base md:text-lg text-slate-600 font-medium italic leading-relaxed mb-12 border-l-8 border-slate-100 pl-8 text-justify">
                "{selectedTesis.resumen}"
              </p>
              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
                <div>
                  <h4 className="text-lg font-black text-[#001d3d] uppercase mb-2 tracking-tighter">Repositorio Institucional</h4>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                    Documento almacenado en servidor DSpace - UMSA
                  </p>
                </div>
                <a
                  href={selectedTesis.enlaceRepositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bg-[#ea580c] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-[#c24100] transition-all transform hover:-translate-y-1"
                >
                  Descargar Documento <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

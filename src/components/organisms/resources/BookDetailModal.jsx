import React from 'react';
import { motion } from 'framer-motion';
import { X, Library, FileBadge, FileText, User, Building2 } from 'lucide-react';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';
import { buildLibraryUrl } from '../../../services/recursosBibliotecaData';

export default function BookDetailModal({ selectedBookDetail, setSelectedBookDetail }) {
  if (!selectedBookDetail) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={() => setSelectedBookDetail(null)} 
        className="absolute inset-0 bg-[#001d3d]/80 backdrop-blur-md cursor-pointer" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.95, y: 20 }} 
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden border border-white/20"
      >
        <button 
          onClick={() => setSelectedBookDetail(null)} 
          className="absolute top-6 right-6 z-50 bg-white/50 backdrop-blur-md border border-slate-200 text-slate-400 hover:text-white hover:bg-[#ea580c] rounded-full p-3 transition-all shadow-sm"
        >
          <X size={28}/>
        </button>

        <div className="md:w-2/5 bg-slate-100 p-10 md:p-14 flex flex-col items-center justify-center relative overflow-hidden border-r border-slate-200 shrink-0">
           <StatisticalOverlay opacity="0.05" color="#001d3d" />
           <div className="w-full max-w-[280px] aspect-[2/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border-[6px] border-white mb-10 relative z-10">
              <img src={selectedBookDetail.libro.portada} alt="Portada" className="w-full h-full object-cover" />
           </div>
           
           <a 
             href={buildLibraryUrl(selectedBookDetail.libro.titulo)} target="_blank" rel="noopener noreferrer"
             className="w-full max-w-[280px] bg-[#ea580c] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#c24100] transition-colors shadow-lg relative z-10"
           >
             <Library size={20}/> Ver en Biblioteca Central
           </a>
        </div>

        <div className="md:w-3/5 p-10 md:p-14 overflow-y-auto bg-white relative">
           <div className="absolute top-10 right-10 opacity-5"><FileBadge size={180}/></div>
           
           <div className="mb-10 border-b-4 border-slate-50 pb-8 relative z-10">
             <div className="inline-flex items-center gap-2 bg-[#001d3d] text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] mb-5 shadow-sm">
               <FileText size={16} /> {selectedBookDetail.libro.tipo_material}
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight mb-5">{selectedBookDetail.libro.titulo}</h2>
             <p className="text-base font-bold text-[#ea580c] uppercase tracking-widest flex items-center gap-3 bg-orange-50 px-6 py-3 rounded-xl w-max">
               {selectedBookDetail.autor?.tipo === 'institucion' ? <Building2 size={20}/> : <User size={20} />}
               Por: {selectedBookDetail.autor?.nombre_completo || 'Autor Institucional'}
             </p>
           </div>

           <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-[160px_1fr] gap-4 text-base border-b border-slate-100 pb-5">
                 <span className="font-black text-slate-400 uppercase tracking-[0.2em] text-xs mt-1">Editor</span>
                 <span className="font-bold text-slate-700">{selectedBookDetail.libro.editor} <span className="text-[#ea580c]">({selectedBookDetail.libro.fecha})</span></span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4 text-base border-b border-slate-100 pb-5">
                 <span className="font-black text-slate-400 uppercase tracking-[0.2em] text-xs mt-1">Desc. Física</span>
                 <span className="font-medium text-slate-600">{selectedBookDetail.libro.descripcion}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4 text-base border-b border-slate-100 pb-5 items-center">
                 <span className="font-black text-slate-400 uppercase tracking-[0.2em] text-xs">Código ISBN</span>
                 <span className="font-mono text-slate-700 font-bold bg-slate-50 px-4 py-2 rounded-xl w-max border border-slate-200">{selectedBookDetail.libro.isbn}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4 text-base border-b border-slate-100 pb-5 items-center">
                 <span className="font-black text-slate-400 uppercase tracking-[0.2em] text-xs">Clasif. Dewey</span>
                 <div className="flex items-center gap-5">
                    <span className="font-mono font-black text-white bg-[#001d3d] px-6 py-2.5 rounded-xl border-2 border-[#ea580c] shadow-md">{selectedBookDetail.libro.codigo}</span>
                 </div>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4 text-base pt-3">
                 <span className="font-black text-slate-400 uppercase tracking-[0.2em] text-xs mt-2">Temas</span>
                 <div className="flex flex-wrap gap-3">
                    {selectedBookDetail.libro.temas.map((t, i) => (
                      <span key={i} className="bg-[#ea580c]/10 text-[#ea580c] border border-[#ea580c]/20 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">{t}</span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}

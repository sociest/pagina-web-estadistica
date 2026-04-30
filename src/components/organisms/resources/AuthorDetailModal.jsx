import React from 'react';
import { motion } from 'framer-motion';
import { X, Building2, Fingerprint, MapPin, BookOpen, Library, BookCopy, Sigma } from 'lucide-react';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';
import RadarChartDeco from '../../atoms/resources/RadarChartDeco';
import { buildLibraryUrl } from '../../../services/recursosBibliotecaData';

export default function AuthorDetailModal({ selectedAuthorDetail, setSelectedAuthorDetail, libros }) {
  if (!selectedAuthorDetail) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={() => setSelectedAuthorDetail(null)} 
        className="absolute inset-0 bg-[#001d3d]/90 backdrop-blur-md cursor-pointer" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.95, y: 20 }} 
        className="bg-slate-50 w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-2xl relative flex flex-col overflow-hidden border border-white/20"
      >
        <div className="bg-[#001d3d] p-10 md:p-16 text-white relative shrink-0 overflow-hidden border-b-[8px] border-[#ea580c]">
          <StatisticalOverlay color="#ffffff" opacity="0.08" />
          <RadarChartDeco className="absolute right-10 top-0 w-72 h-72 opacity-10 text-[#ea580c]" />
          
          <button 
            onClick={() => setSelectedAuthorDetail(null)} 
            className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-[#ea580c] rounded-full p-3 transition-colors"
          >
            <X size={24}/>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
             <div className={`size-32 md:size-48 bg-white rounded-[2rem] flex items-center justify-center font-black text-6xl md:text-8xl shadow-[0_0_40px_rgba(234,88,12,0.4)] border-4 border-[#ea580c] shrink-0 ${selectedAuthorDetail.tipo === 'institucion' ? 'text-[#ea580c]' : 'text-[#001d3d]'}`}>
               {selectedAuthorDetail.tipo === 'institucion' ? <Building2 size={72}/> : selectedAuthorDetail.letra_inicial}
             </div>
             <div className="flex-1 min-w-0">
               <p className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2.5 rounded-xl text-xs font-black text-white uppercase tracking-[0.3em] mb-5">
                 <Fingerprint size={16} className="text-[#ea580c]"/>
                 {selectedAuthorDetail.tipo === 'institucion' ? 'Autor Corporativo' : 'Autor Científico'}
               </p>
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-5 truncate" title={selectedAuthorDetail.nombre_completo}>
                 {selectedAuthorDetail.nombre_completo}
               </h2>
               <p className="text-base md:text-lg font-bold text-blue-200 uppercase tracking-widest truncate flex items-center gap-3">
                 <MapPin size={20} className="text-[#ea580c] shrink-0"/> {selectedAuthorDetail.afiliacion}
               </p>
             </div>
          </div>
        </div>

        <div className="p-10 md:p-16 flex-1 overflow-y-auto bg-white relative">
          <Sigma className="absolute left-10 bottom-10 opacity-5 text-slate-300" size={250} />
          
          <div className="flex items-center gap-5 mb-12 border-b-2 border-slate-100 pb-6 relative z-10">
            <div className="size-14 bg-[#ea580c]/10 text-[#ea580c] rounded-2xl flex items-center justify-center"><BookOpen size={28} /></div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-[#001d3d] uppercase tracking-tighter leading-none">Libros Registrados</h3>
              <p className="text-xs md:text-sm font-black uppercase text-slate-400 tracking-[0.2em] mt-2">Colección Local del IETA</p>
            </div>
            <span className="ml-auto bg-[#001d3d] text-white px-6 py-3 rounded-2xl text-xl font-black shadow-md border border-[#ea580c]">
              {libros.filter(l => l.id_autor === selectedAuthorDetail.id).length}
            </span>
          </div>

          <div className="space-y-6 relative z-10">
            {libros.filter(l => l.id_autor === selectedAuthorDetail.id).map(libro => (
              <div key={libro.id} className="flex flex-col md:flex-row gap-8 p-6 md:p-8 border border-slate-200 rounded-[2.5rem] hover:border-[#ea580c] hover:shadow-[0_15px_40px_-10px_rgba(234,88,12,0.2)] transition-all group bg-white">
                 <div className="w-28 h-40 bg-slate-100 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-100 hidden md:block">
                   <img src={libro.portada} alt={libro.titulo} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" />
                 </div>
                 <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h4 className="text-xl md:text-2xl font-black text-[#001d3d] uppercase leading-tight mb-3 group-hover:text-[#ea580c] transition-colors">{libro.titulo}</h4>
                    <p className="text-sm text-slate-600 font-medium mb-5">Editor: {libro.editor} <span className="font-bold text-[#ea580c]">({libro.fecha})</span></p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-widest shadow-sm">ISBN: {libro.isbn}</span>
                      <span className="bg-[#001d3d]/5 border border-[#001d3d]/10 text-[#001d3d] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm">Dewey: {libro.codigo}</span>
                    </div>
                 </div>
                 <div className="md:self-center mt-5 md:mt-0 shrink-0">
                   <a href={buildLibraryUrl(libro.titulo)} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-slate-50 hover:bg-[#ea580c] border border-slate-200 hover:border-transparent text-[#001d3d] hover:text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-xl">
                     <Library size={20}/> Buscar (Catálogo)
                   </a>
                 </div>
              </div>
            ))}
            {libros.filter(l => l.id_autor === selectedAuthorDetail.id).length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                <BookCopy size={64} className="mx-auto text-slate-300 mb-6" />
                <p className="text-base font-black text-slate-500 uppercase tracking-widest">No hay libros registrados actualmente.</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

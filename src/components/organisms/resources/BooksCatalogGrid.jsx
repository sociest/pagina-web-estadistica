import React from 'react';
import { Library, X, Search, Database, ArrowRight, User, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';

import { buildLibraryUrl } from '../../../services/recursosBibliotecaData';

export default function BooksCatalogGrid({
  paginatedBooks,
  filteredBooks,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  autores,
  setSelectedBookDetail,
  currentPageBooks,
  setCurrentPageBooks,
  totalBooksPages
}) {
  return (
    <motion.div key="tab-libros" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      
      <div className="flex items-end justify-between mb-10 border-b-2 border-slate-100 pb-4">
         <div>
           <h2 className="text-3xl md:text-4xl font-black text-[#001d3d] uppercase tracking-tighter flex items-center gap-4 mb-2">
             <Library className="text-[#ea580c]" size={36}/> Libros Destacados
           </h2>
           {selectedCategory && (
             <p className="text-sm font-black uppercase text-slate-500 flex items-center gap-2">
               Categoría: <span className="text-[#ea580c] bg-orange-50 px-3 py-1 rounded-md">{selectedCategory}</span>
               <button onClick={() => setSelectedCategory(null)} className="text-slate-400 hover:text-red-500"><X size={16}/></button>
             </p>
           )}
         </div>
         <div className="bg-slate-100 px-6 py-3 rounded-xl border border-slate-200 hidden md:block">
           <p className="text-sm font-black uppercase tracking-widest text-[#001d3d]">{filteredBooks.length} Resultados</p>
         </div>
      </div>

      {/* Botones Rápidos de Categoría si no hay búsqueda activa */}
      {!searchQuery && !selectedCategory && (
        <div className="flex overflow-x-auto gap-3 mb-10 hide-scrollbar pb-2">
           {['Probabilidad', 'Inferencia', 'Econometría', 'Muestreo', 'Machine Learning'].map(cat => (
             <button key={cat} onClick={() => setSelectedCategory(cat)} className="shrink-0 bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#ea580c] hover:text-white transition-colors shadow-sm">
               {cat}
             </button>
           ))}
        </div>
      )}

      {/* Grilla de Libros */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {paginatedBooks.map((libro) => {
          const autor = autores.find(a => a.id === libro.id_autor);
          const isInstitution = autor?.tipo === 'institucion';
          return (
            <div 
              key={libro.id} 
              onClick={() => setSelectedBookDetail({libro, autor})}
              className="bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col group hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.15)] hover:border-[#ea580c] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <StatisticalOverlay opacity="0.01" color="#ea580c" />
              
              <div className="h-72 w-full bg-slate-100 rounded-[1.5rem] mb-6 overflow-hidden relative shadow-inner border border-slate-100">
                <img src={libro.portada} alt={libro.titulo} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-[#001d3d]/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest shadow-md border border-white/10">{libro.categoria}</div>
              </div>
              
              <div className="flex-1 flex flex-col relative z-10">
                <h4 className="text-base font-black text-[#001d3d] uppercase leading-tight mb-3 line-clamp-2 group-hover:text-[#ea580c] transition-colors">{libro.titulo}</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-6 line-clamp-1">
                  {isInstitution ? <Building2 size={16} className="text-[#ea580c] shrink-0"/> : <User size={16} className="text-[#ea580c] shrink-0"/>} 
                  <span className="truncate">{autor?.nombre_completo || 'Autor Institucional'}</span>
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 relative">

                   <span className="text-xs font-black text-[#ea580c] uppercase flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg group-hover:bg-[#ea580c] group-hover:text-white transition-colors">Ver Detalles <ArrowRight size={14}/></span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-32 bg-white border-2 border-dashed border-slate-200 rounded-[3rem] shadow-sm">
          <div className="size-24 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6"><Search size={40} /></div>
          <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tighter mb-3">Libro no encontrado en el portal</h3>
          <p className="text-base text-slate-500 font-medium italic mb-8 max-w-lg mx-auto">No existen coincidencias en esta selección de libros destacados. Le recomendamos buscar directamente en la Biblioteca de la Universidad.</p>
          <a href={buildLibraryUrl(searchQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#ea580c] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#001d3d] transition-colors items-center gap-3 shadow-xl">
            <Database size={18}/> Buscar en Biblioteca UMSA
          </a>
        </div>
      )}

      {/* Paginación Libros */}
      {totalBooksPages > 1 && (
        <div className="mt-20 flex justify-center items-center gap-4">
           <button onClick={() => setCurrentPageBooks(p => Math.max(1, p - 1))} disabled={currentPageBooks === 1} className="size-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-[#001d3d] hover:bg-slate-100 hover:border-slate-300 disabled:opacity-30 transition-all bg-white"><ChevronLeft size={24} /></button>
           <div className="flex gap-2 bg-white border border-slate-200 p-2 rounded-[1.5rem] shadow-sm">
             {[...Array(totalBooksPages)].map((_, i) => (
               <button key={i} onClick={() => setCurrentPageBooks(i+1)} className={`size-12 rounded-xl flex items-center justify-center text-base font-black transition-all ${currentPageBooks === i+1 ? 'bg-[#001d3d] text-white shadow-md' : 'bg-transparent text-slate-500 hover:bg-slate-100'}`}>
                  {i+1}
               </button>
             ))}
           </div>
           <button onClick={() => setCurrentPageBooks(p => Math.min(totalBooksPages, p + 1))} disabled={currentPageBooks === totalBooksPages} className="size-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-[#001d3d] hover:bg-slate-100 hover:border-slate-300 disabled:opacity-30 transition-all bg-white"><ChevronRight size={24} /></button>
        </div>
      )}
    </motion.div>
  );
}

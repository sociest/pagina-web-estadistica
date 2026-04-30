import React from 'react';
import { Users, Building2, BookCopy, Fingerprint, MapPin, ArrowRight, UserCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';
import RadarChartDeco from '../../atoms/resources/RadarChartDeco';


export default function AuthorsDirectoryGrid({
  paginatedAuthors,
  filteredAuthors,
  libros,
  setSelectedAuthorDetail,
  currentPageAuthors,
  setCurrentPageAuthors,
  totalAuthorsPages
}) {
  return (
    <motion.div key="tab-autores" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 border-b-2 border-slate-100 pb-4">
         <div>
           <h2 className="text-3xl md:text-4xl font-black text-[#001d3d] uppercase tracking-tighter mb-2 flex items-center gap-3">
             <Users className="text-[#ea580c]" size={36}/> Índice de Autores
           </h2>
           <p className="text-base font-medium italic text-slate-500">Investigadores, estadísticos y entidades institucionales.</p>
         </div>
         <div className="bg-slate-100 px-6 py-3 rounded-xl border border-slate-200 hidden md:block">
           <p className="text-sm font-black uppercase tracking-widest text-[#001d3d]">{filteredAuthors.length} Registros</p>
         </div>
      </div>

      {/* Grilla Autores (Credenciales de Investigador) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedAuthors.map((autor) => {
          const isInstitution = autor.tipo === 'institucion';
          const cantLibros = libros.filter(l => l.id_autor === autor.id).length;
          
          return (
            <div 
              key={autor.id} onClick={() => setSelectedAuthorDetail(autor)}
              className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden flex flex-col group hover:shadow-[0_20px_40px_-15px_rgba(0,29,61,0.2)] hover:border-[#001d3d] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative"
            >
              <div className={`h-32 relative overflow-hidden flex items-start justify-end p-6 transition-colors duration-500 ${isInstitution ? 'bg-slate-800' : 'bg-[#001d3d]'}`}>
                <StatisticalOverlay opacity="0.1" color="#ffffff" />
                <RadarChartDeco className="absolute -left-10 top-0 w-48 h-48 opacity-20 text-white/50" />
                
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm relative z-10">
                   <BookCopy size={14} className="text-white"/>
                   <span className="text-xs font-black text-white uppercase tracking-widest">{cantLibros} Libros</span>
                </div>
              </div>
              
              <div className="absolute top-16 left-6">
                <div className={`size-24 rounded-2xl flex items-center justify-center font-black text-4xl border-[5px] border-white shadow-lg transition-colors z-20 relative ${isInstitution ? 'bg-slate-100 text-[#001d3d] group-hover:bg-[#ea580c] group-hover:text-white' : 'bg-[#ea580c] text-white group-hover:bg-[#001d3d]'}`}>
                  {isInstitution ? <Building2 size={36}/> : autor.letra_inicial}
                </div>
              </div>

              <div className="pt-16 pb-8 px-8 flex-1 flex flex-col bg-white relative z-10">
                <h4 className="text-lg md:text-xl font-black text-[#001d3d] uppercase leading-tight mb-4 group-hover:text-[#ea580c] transition-colors line-clamp-2" title={autor.nombre_completo}>{autor.nombre_completo}</h4>
                
                <div className="space-y-4 mb-8">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-3 line-clamp-1">
                    <Fingerprint size={16} className="text-[#ea580c] shrink-0"/> {autor.especialidad}
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3 line-clamp-1">
                    <MapPin size={16} className="text-[#001d3d] shrink-0"/> {autor.afiliacion}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-[#001d3d] transition-colors">

                   <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2">Libros <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredAuthors.length === 0 && (
        <div className="text-center py-32 bg-white border-2 border-dashed border-slate-200 rounded-[3rem] shadow-sm">
          <UserCircle size={80} className="mx-auto mb-6 text-slate-200" />
          <h3 className="text-3xl font-black text-[#001d3d] uppercase tracking-tighter mb-4">Autor no registrado</h3>
          <p className="text-base text-slate-500 font-medium italic">Intente con otro apellido, institución o elimine los filtros de la matriz A-Z.</p>
        </div>
      )}

      {/* Paginación Autores */}
      {totalAuthorsPages > 1 && (
        <div className="mt-20 flex justify-center items-center gap-4">
           <button onClick={() => setCurrentPageAuthors(p => Math.max(1, p - 1))} disabled={currentPageAuthors === 1} className="size-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-[#001d3d] hover:bg-slate-100 hover:border-slate-300 disabled:opacity-30 transition-all bg-white"><ChevronLeft size={24} /></button>
           <div className="flex gap-2 bg-white border border-slate-200 p-2 rounded-[1.5rem] shadow-sm">
             {[...Array(totalAuthorsPages)].map((_, i) => (
               <button key={i} onClick={() => setCurrentPageAuthors(i+1)} className={`size-12 rounded-xl flex items-center justify-center text-base font-black transition-all ${currentPageAuthors === i+1 ? 'bg-[#001d3d] text-white shadow-md' : 'bg-transparent text-slate-500 hover:bg-slate-100'}`}>
                  {i+1}
               </button>
             ))}
           </div>
           <button onClick={() => setCurrentPageAuthors(p => Math.min(totalAuthorsPages, p + 1))} disabled={currentPageAuthors === totalAuthorsPages} className="size-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-[#001d3d] hover:bg-slate-100 hover:border-slate-300 disabled:opacity-30 transition-all bg-white"><ChevronRight size={24} /></button>
        </div>
      )}
    </motion.div>
  );
}

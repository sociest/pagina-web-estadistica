import React from 'react';
import { motion } from 'framer-motion';
import { Database, BookOpen, Users, Network } from 'lucide-react';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';
import BellCurveSVG from '../../atoms/resources/BellCurveSVG';

export default function LibraryHeroSection({ scrollToExplore }) {
  return (
    <section className="bg-gradient-to-br from-[#001d3d] via-[#00152b] to-[#000a14] pt-40 pb-32 px-6 relative overflow-hidden border-b-[8px] border-[#ea580c]">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1600" alt="Biblioteca" className="w-full h-full object-cover grayscale opacity-[0.15] contrast-[1.2] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d] via-transparent to-transparent" />
      </div>
      
      <StatisticalOverlay opacity="0.1" color="#ffffff" />
      <BellCurveSVG className="absolute bottom-0 left-0 w-full h-[60%] z-0" />
      
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="hidden lg:block absolute top-20 left-20 text-white/10 font-serif italic text-7xl select-none pointer-events-none">∫</motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="hidden md:block absolute bottom-32 right-20 text-[#ea580c]/20 font-serif italic text-8xl select-none pointer-events-none">σ²</motion.div>
      <Network className="absolute top-1/4 right-[10%] text-white/5 opacity-50" size={300} strokeWidth={0.5} />

      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <Database className="text-[#ea580c]" size={16} />
          <span className="text-xs font-black text-white/90 uppercase tracking-[0.3em]">Catálogo en Línea Activo</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
          Repositorio <br/> <span className="text-[#ea580c] italic font-serif lowercase tracking-normal">Académico</span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-200/80 font-medium italic mb-12 max-w-2xl mx-auto drop-shadow-lg border-l-4 border-[#ea580c] pl-6 py-2 text-left md:text-center md:border-l-0 md:pl-0">
          Colección de textos guía, referencias bibliográficas, reportes de datos y el directorio completo de investigadores de la Carrera de Estadística.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5">
           <button onClick={() => scrollToExplore('libros')} className="bg-[#ea580c] text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#c24100] transition-all shadow-[0_0_25px_rgba(234,88,12,0.4)] flex items-center justify-center gap-3 hover:-translate-y-1">
             <BookOpen size={20}/> Explorar Libros
           </button>
           <button onClick={() => scrollToExplore('autores')} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all shadow-lg flex items-center justify-center gap-3 hover:-translate-y-1">
             <Users size={20}/> Directorio de Autores
           </button>
        </div>
      </div>
    </section>
  );
}

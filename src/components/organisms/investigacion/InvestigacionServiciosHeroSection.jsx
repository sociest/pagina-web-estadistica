import React from 'react'
import { motion } from 'framer-motion'
import { Microscope, Sigma } from 'lucide-react'
import StatisticalOverlay from '../../atoms/layout/StatisticalOverlay'

const InvestigacionServiciosHeroSection = ({ hero }) => {
  return (
    <section className="bg-[#001d3d] pt-36 pb-28 px-6 relative overflow-hidden border-b-[8px] border-[#ea580c]">
      <StatisticalOverlay color="#ffffff" opacity="0.08" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <Microscope className="text-[#ea580c]" size={14} />
          <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em]">
            {hero.tag}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6"
        >
          {hero.title[0]} <br/> 
          <span className="text-[#ea580c] italic font-serif uppercase tracking-normal">
            {hero.title[1]}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-blue-200/80 font-medium leading-relaxed italic max-w-3xl mx-auto mb-12"
        >
          {hero.subtitle}
        </motion.p>

        <div className="flex justify-center gap-8">
           <div className="text-center">
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-1">
                {hero.stats[0].label}
              </p>
              <p className="text-2xl font-black text-white">{hero.stats[0].value}</p>
           </div>
           <div className="w-px h-12 bg-white/10" />
           <div className="text-center">
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-1">
                {hero.stats[1].label}
              </p>
              <p className="text-2xl font-black text-white">{hero.stats[1].value}</p>
           </div>
        </div>
      </div>

      <Sigma className="absolute -left-10 bottom-0 text-white/5 opacity-40" size={300} />
    </section>
  )
}

export default InvestigacionServiciosHeroSection

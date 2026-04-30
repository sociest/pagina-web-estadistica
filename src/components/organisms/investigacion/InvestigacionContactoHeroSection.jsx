import React from 'react'
import { motion } from 'framer-motion'
import { Navigation, Phone, Mail, Clock, ArrowRight, Sigma, Activity } from 'lucide-react'
import StatisticalOverlay from '../../atoms/layout/StatisticalOverlay'
import FloatingAnnotation from '../../atoms/typography/FloatingAnnotation'

const InvestigacionContactoHeroSection = ({ data }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#001d3d] border-b-[8px] border-[#ea580c]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600" 
          alt="Campus Cota Cota" 
          className="w-full h-full object-cover grayscale opacity-40 contrast-[1.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d3d] via-[#001d3dd0] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d] via-transparent to-transparent" />
      </div>

      <StatisticalOverlay />
      <Sigma className="absolute -left-20 top-20 text-white opacity-[0.03] rotate-12" size={400} />
      <Activity className="absolute right-10 bottom-20 text-[#ea580c] opacity-[0.05]" size={300} />

      <FloatingAnnotation label="μ" value="2026.04" top="120px" left="40px" />
      <FloatingAnnotation label="σ" value="1.05" top="140px" left="40px" />
      <FloatingAnnotation label="R²" value="0.998" bottom="40px" right="40px" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center w-full mt-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
            <Navigation className="text-[#ea580c]" size={14} />
            <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em]">Campus Cota Cota · FCPN</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            {data.title[0]} <br/> 
            <span className="text-[#ea580c] italic font-serif lowercase tracking-normal">
              {data.title[1]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/70 font-medium leading-relaxed italic max-w-xl border-l-4 border-[#ea580c] pl-6 py-2">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-4"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="flex items-center gap-6">
              <div className="size-14 bg-[#ea580c] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-[#ea580c] tracking-[0.3em] mb-1">{data.phoneTitle}</p>
                <p className="text-2xl font-black text-white tracking-tighter">{data.phones}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] hover:bg-white/10 transition-all flex flex-col justify-center text-center">
              <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center text-white mx-auto mb-4 border border-white/10">
                <Mail size={20} />
              </div>
              <p className="text-[9px] font-black uppercase text-blue-300 tracking-widest mb-1">Email Oficial</p>
              <p className="text-sm font-black text-white break-all">{data.email}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] hover:bg-white/10 transition-all flex flex-col justify-center text-center">
              <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center text-white mx-auto mb-4 border border-white/10">
                <Clock size={20} />
              </div>
              <p className="text-[9px] font-black uppercase text-blue-300 tracking-widest mb-1">Atención</p>
              <p className="text-sm font-black text-white uppercase">{data.hours}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ea580c] to-[#c24100] p-1 rounded-[2.5rem] shadow-2xl">
            <div className="bg-[#001d3d] rounded-[2.4rem] p-6 flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                 <div className="size-10 bg-white/10 rounded-full flex items-center justify-center text-[#ea580c]">
                    <Navigation size={18} />
                 </div>
                 <p className="text-xs font-black text-white uppercase tracking-widest">{data.sedeText}</p>
              </div>
              <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f1f5f9] to-transparent z-10" />
    </section>
  )
}

export default InvestigacionContactoHeroSection

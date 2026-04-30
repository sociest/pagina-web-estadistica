import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import ServiciosSectionHeader from '../../molecules/investigacion/ServiciosSectionHeader'
import StatisticalOverlay from '../../atoms/layout/StatisticalOverlay'

const InvestigacionServiciosConsultingSection = ({ servicios, rigor }) => {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto relative">
      <ServiciosSectionHeader 
        tag="Bloque de Servicios 01" 
        title="Consultoría e Inteligencia de Datos" 
        sub="Servicios integrales para organismos públicos, privados y de investigación que requieren validación científica en sus mediciones."
      />

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {servicios.map((srv, idx) => {
          const Icon = srv.icon
          return (
            <motion.div 
              key={srv.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm hover:shadow-2xl hover:border-[#001d3d] transition-all relative overflow-hidden group"
            >
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon size={150} />
              </div>
              <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#ea580c] border border-slate-100 group-hover:bg-[#001d3d] group-hover:text-white transition-colors mb-8 shadow-inner">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-black text-[#001d3d] uppercase tracking-tight mb-4">{srv.title}</h3>
              <p className="text-sm text-slate-500 font-medium italic leading-relaxed mb-8">{srv.desc}</p>
              <ul className="space-y-4">
                {srv.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                    <CheckCircle2 size={16} className="text-[#ea580c] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <div className="bg-[#001d3d] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden border-b-[12px] border-[#ea580c] shadow-2xl">
         <StatisticalOverlay color="#ffffff" opacity="0.05" />
         <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
                {rigor.title[0]} <br/>
                <span className="text-[#ea580c]">{rigor.title[1]}</span>
              </h3>
              <p className="text-blue-100/70 text-lg italic font-medium mb-10 leading-relaxed">
                {rigor.description}
              </p>
              <div className="space-y-6">
                {rigor.highlights.map((hl, i) => {
                  const HlIcon = hl.icon
                  return (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                        <HlIcon className={hl.color} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">{hl.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-center mb-8 text-[#ea580c]">Capacidades Técnicas</h4>
                <div className="space-y-6 font-mono text-xs uppercase tracking-wider">
                  {rigor.capacities.map((cap, i) => (
                    <div key={i} className="flex justify-between border-b border-white/10 pb-3">
                      <span>{cap.label}</span> 
                      <span className={`${cap.color} font-bold`}>{cap.value}</span>
                    </div>
                  ))}
                </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default InvestigacionServiciosConsultingSection

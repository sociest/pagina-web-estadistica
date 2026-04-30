import React from 'react'
import { MessageSquare } from 'lucide-react'
import ServiciosSectionHeader from '../../molecules/investigacion/ServiciosSectionHeader'

const InvestigacionServiciosCtaSection = ({ cta, onOpenModal }) => {
  return (
    <section className="py-24 px-6 text-center">
       <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#001d3d_1px,transparent_1px)] bg-[size:20px_20px]" />
          <ServiciosSectionHeader 
             tag={cta.tag} 
             title={cta.title} 
             sub={cta.subtitle}
             center={true}
          />
          <button 
             onClick={onOpenModal}
             className="bg-[#001d3d] text-white px-12 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-[#ea580c] hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto group-hover:shadow-[#ea580c44]"
          >
             <MessageSquare size={20} /> Solicitar Cotización / Presupuesto
          </button>
       </div>
    </section>
  )
}

export default InvestigacionServiciosCtaSection

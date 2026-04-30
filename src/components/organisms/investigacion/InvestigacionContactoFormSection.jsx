import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import StatisticalOverlay from '../../atoms/layout/StatisticalOverlay'

const InvestigacionContactoFormSection = ({ formTypes }) => {
  const [formType, setFormType] = useState('Estudiante UMSA')
  const [msgSent, setMsgSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMsgSent(true)
    setTimeout(() => setMsgSent(false), 5000)
  }

  return (
    <section className="bg-white rounded-[4rem] shadow-2xl border border-slate-200 overflow-hidden relative">
       <StatisticalOverlay opacity="0.02" />
       <div className="grid lg:grid-cols-[1fr_1.5fr]">
          <div className="bg-[#001d3d] p-12 text-white flex flex-col justify-between relative overflow-hidden border-r-[4px] border-[#ea580c]">
             <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none text-[#ea580c]">Solicitud de <br/>Asistencia Técnica</h3>
                <p className="text-blue-100/70 text-base font-medium italic leading-relaxed mb-10">Canal oficial para consultas institucionales, empresas interesadas en consultoría y trámites de investigadores.</p>
                <div className="space-y-6">
                   <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                     <CheckCircle2 className="text-[#ea580c]"/> Respuesta en 24/48 Horas
                   </div>
                   <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                     <CheckCircle2 className="text-[#ea580c]"/> Respaldo Académico FCPN
                   </div>
                </div>
             </div>
          </div>

          <div className="p-12 lg:p-16 relative bg-white">
             {msgSent ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 className="h-full flex flex-col items-center justify-center text-center py-20"
               >
                  <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40}/>
                  </div>
                  <h4 className="text-2xl font-black text-[#001d3d] uppercase mb-2">Mensaje Enviado</h4>
                  <p className="text-slate-500 font-medium italic">Un especialista del IETA revisará su solicitud en breve.</p>
                  <button 
                    onClick={() => setMsgSent(false)} 
                    className="mt-8 text-xs font-black uppercase tracking-widest text-[#ea580c] hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Nombre Completo</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5 text-sm font-bold focus:outline-none focus:border-[#001d3d] transition-all" placeholder="EJ: JUAN PÉREZ..." />
                     </div>
                     <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Correo Electrónico</label>
                        <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5 text-sm font-bold focus:outline-none focus:border-[#001d3d] transition-all" placeholder="juan@ejemplo.com" />
                     </div>
                  </div>
                  
                  <div>
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">Tipo de Interesado</label>
                     <div className="flex flex-wrap gap-2">
                        {formTypes.map(type => (
                          <button 
                            key={type} 
                            type="button" 
                            onClick={() => setFormType(type)}
                            className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${formType === type ? 'bg-[#ea580c] text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                          >
                            {type}
                          </button>
                        ))}
                     </div>
                  </div>

                  <div>
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Mensaje / Requerimiento</label>
                     <textarea required className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm font-bold focus:outline-none focus:border-[#001d3d] h-32 resize-none transition-all" placeholder="DESCRIBA SU CONSULTA..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#001d3d] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#ea580c] transition-all shadow-xl shadow-blue-900/20 active:scale-95">
                     <Send size={18}/> Enviar Requerimiento Técnico
                  </button>
               </form>
             )}
          </div>
       </div>
    </section>
  )
}

export default InvestigacionContactoFormSection

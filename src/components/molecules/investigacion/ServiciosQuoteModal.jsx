import React from 'react'
import { motion } from 'framer-motion'
import { X, MailPlus, Monitor } from 'lucide-react'
import StatisticalOverlay from '../../atoms/layout/StatisticalOverlay'

const ServiciosQuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#001d3d]/80 backdrop-blur-md cursor-pointer"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/20 flex flex-col md:flex-row"
      >
        <div className="md:w-2/5 bg-[#001d3d] p-10 text-white relative">
          <StatisticalOverlay color="#ffffff" opacity="0.1" />
          <h3 className="text-2xl font-black uppercase tracking-widest mb-6 leading-tight">
            Solicitud de <br/>Asistencia
          </h3>
          <p className="text-sm text-blue-200/70 italic leading-relaxed mb-8">
            Un especialista del IETA revisará su requerimiento para enviarle una propuesta técnica y económica personalizada.
          </p>
          <div className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <MailPlus size={18} className="text-[#ea580c]"/>
              <span className="text-[11px] font-mono">ieta@umsa.bo</span>
            </div>
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-[#ea580c]"/>
              <span className="text-[11px] font-mono">ieta.umsa.bo</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5 p-10 bg-white relative">
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors"
          >
            <X size={24}/>
          </button>
          <form 
            className="space-y-5" 
            onSubmit={(e) => { 
              e.preventDefault()
              onClose() 
            }}
          >
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                Institución / Empresa
              </label>
              <input 
                type="text" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm font-bold focus:outline-none focus:border-[#001d3d] transition-colors" 
                placeholder="EJ: INE, GOBIERNO AUTÓNOMO..." 
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                Tipo de Servicio
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm font-bold focus:outline-none appearance-none">
                <option>CONSULTORÍA ESTRATÉGICA</option>
                <option>PROCESAMIENTO ANALÍTICO</option>
                <option>CAPACITACIÓN INSTITUCIONAL</option>
                <option>AUDITORÍA DE DATOS</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                Descripción del Requerimiento
              </label>
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm font-bold focus:outline-none h-28 resize-none" 
                placeholder="DESCRIBA BREVEMENTE SU PROYECTO O NECESIDAD..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#ea580c] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-500/30 hover:bg-[#c24100] transition-all"
            >
              Enviar Solicitud Técnica
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiciosQuoteModal

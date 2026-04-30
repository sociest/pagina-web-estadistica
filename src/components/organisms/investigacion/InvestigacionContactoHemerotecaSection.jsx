import React from 'react'
import { ExternalLink } from 'lucide-react'

const InvestigacionContactoHemerotecaSection = ({ links }) => {
  return (
    <section id="hemeroteca" className="pb-12 mt-12">
       <div className="flex items-center gap-3 mb-10">
          <div className="h-[2px] w-12 bg-[#ea580c]" />
          <span className="text-[11px] font-black text-[#ea580c] uppercase tracking-[0.4em]">Recursos Externos</span>
          <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tighter ml-4">Hemeroteca de Interés</h3>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-[#ea580c] hover:shadow-lg transition-all"
            >
               <div className="size-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 mb-4 group-hover:bg-[#ea580c]/10 group-hover:text-[#ea580c] transition-colors">
                 <ExternalLink size={18}/>
               </div>
               <h5 className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest leading-tight mb-1">{link.name}</h5>
               <p className="text-[8px] font-bold uppercase text-slate-400">{link.type}</p>
            </a>
          ))}
       </div>
    </section>
  )
}

export default InvestigacionContactoHemerotecaSection

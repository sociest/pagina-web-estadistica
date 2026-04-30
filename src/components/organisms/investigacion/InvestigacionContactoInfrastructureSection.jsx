import React from 'react'
import { Database } from 'lucide-react'

const InvestigacionContactoInfrastructureSection = ({ data }) => {
  return (
    <section id="infraestructura">
       <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tighter mb-4">{data.title}</h2>
          <p className="text-lg text-slate-500 font-medium italic max-w-2xl mx-auto">{data.subtitle}</p>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {data.facilities.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-white border border-slate-200 p-10 rounded-[3rem] hover:shadow-2xl transition-all group hover:border-[#ea580c] relative overflow-hidden">
                 <div className="size-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#ea580c] border border-slate-100 mb-6 group-hover:bg-[#001d3d] group-hover:text-white transition-colors shadow-inner">
                   <Icon size={28}/>
                 </div>
                 <h4 className="text-xl font-black text-[#001d3d] uppercase tracking-tighter mb-4">{item.title}</h4>
                 <p className="text-sm text-slate-500 font-medium italic leading-relaxed">{item.desc}</p>
                 <Database className="absolute -right-6 -bottom-6 text-slate-100 opacity-20 group-hover:text-[#ea580c] group-hover:opacity-10 transition-all" size={150} />
              </div>
            )
          })}
       </div>
    </section>
  )
}

export default InvestigacionContactoInfrastructureSection

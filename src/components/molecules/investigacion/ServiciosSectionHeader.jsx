import React from 'react'

const ServiciosSectionHeader = ({ tag, title, sub, center = false }) => (
  <div className={`mb-16 ${center ? 'text-center flex flex-col items-center' : ''}`}>
    <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
      <div className="h-[2px] w-12 bg-[#ea580c]" />
      <span className="text-[11px] font-black text-[#ea580c] uppercase tracking-[0.4em]">{tag}</span>
      {center && <div className="h-[2px] w-12 bg-[#ea580c]" />}
    </div>
    <h2 className="text-4xl md:text-5xl font-black text-[#001d3d] uppercase tracking-tighter leading-none mb-6">
      {title}
    </h2>
    {sub && <p className="text-lg text-slate-500 font-medium italic max-w-2xl leading-relaxed">{sub}</p>}
  </div>
)

export default ServiciosSectionHeader

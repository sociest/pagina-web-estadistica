import React from 'react'
import { Navigation, Building2 } from 'lucide-react'

const InvestigacionContactoLocationSection = ({ data }) => {
  return (
    <section id="ubicación">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-[#ea580c]" />
          <span className="text-[11px] font-black text-[#ea580c] uppercase tracking-[0.4em]">Cartografía Institucional</span>
        </div>
        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tighter">{data.title}</h2>
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 bg-white rounded-[4rem] shadow-xl overflow-hidden border border-slate-200">
         <div className="h-[500px] bg-slate-200 relative group overflow-hidden">
            <iframe
              src={data.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Cota Cota"
              className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
            
            <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
               <div className="bg-[#ea580c] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-2 shadow-2xl animate-bounce">Instituto IETA</div>
               <div className="size-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
                 <div className="size-3 bg-[#ea580c] rounded-full animate-pulse" />
               </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-200 max-w-sm pointer-events-none">
               <p className="text-[10px] font-black uppercase text-[#ea580c] mb-2 tracking-widest">Sede Cota Cota (Campus Sur)</p>
               <p className="text-sm font-medium italic text-slate-600 leading-relaxed">{data.description}</p>
            </div>
         </div>

         <div className="p-12 flex flex-col justify-center">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-8">
               <h4 className="text-lg font-black text-[#001d3d] uppercase tracking-widest mb-4 flex items-center gap-3">
                 <Building2 className="text-[#ea580c]"/> Referencia Visual
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic mb-6">
                 {data.reference}
               </p>
               <button className="w-full bg-[#001d3d] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#ea580c] transition-all shadow-xl shadow-blue-900/20">
                 <Navigation size={18}/> Abrir en Google Maps
               </button>
            </div>
         </div>
      </div>
    </section>
  )
}

export default InvestigacionContactoLocationSection

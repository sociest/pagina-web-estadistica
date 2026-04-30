import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, ChevronRight, Cpu, Download, PieChart, CheckCircle2 } from 'lucide-react'
import ServiciosSectionHeader from '../../molecules/investigacion/ServiciosSectionHeader'
import StatisticalOverlay from '../../atoms/layout/StatisticalOverlay'
import MiniChart from '../../atoms/charts/MiniChart'

const InvestigacionServiciosCoursesSection = ({ cursos, softwareStack, areasExperticia }) => {
  const featuredCourse = cursos[0]
  const otherCourses = cursos.slice(1)

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ServiciosSectionHeader 
          tag="Bloque de Servicios 02" 
          title="Capacitación y Actualización" 
          sub="Programas especializados en el manejo de software y herramientas de analítica avanzada para profesionales y estudiantes."
        />

        {featuredCourse && (
          <div className="mb-20">
            <div className="bg-[#f8fafc] rounded-[3rem] shadow-xl border border-slate-200 overflow-hidden grid lg:grid-cols-[1.1fr_1fr] hover:border-[#ea580c] transition-all duration-500 group">
              <div className="h-80 lg:h-auto overflow-hidden relative">
                <img src={featuredCourse.image} alt={featuredCourse.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-8 left-8">
                   <span className="bg-[#ea580c] text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">
                     {featuredCourse.status}
                   </span>
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center relative">
                <StatisticalOverlay opacity="0.03" />
                <div className="flex items-center gap-3 mb-6">
                  <CalendarDays size={20} className="text-[#ea580c]" />
                  <span className="text-sm font-black uppercase tracking-widest text-slate-400">{featuredCourse.date}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight mb-8">
                  {featuredCourse.title}
                </h3>
                <div className="grid grid-cols-2 gap-8 mb-10">
                   <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Duración</p>
                      <p className="text-lg font-bold text-[#001d3d]">{featuredCourse.duration}</p>
                   </div>
                   <div className="border-l border-slate-200 pl-8">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Costo Profesional</p>
                      <p className="text-lg font-black text-[#ea580c]">{featuredCourse.price}</p>
                   </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                   <button className="flex-1 bg-[#001d3d] text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-xl shadow-blue-900/20">
                     Pre-Inscribirme Ahora
                   </button>
                   <button className="border-2 border-slate-200 text-[#001d3d] px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3">
                     Descargar Programa <Download size={18}/>
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-24">
           {otherCourses.map(curso => (
             <motion.div 
               key={curso.id} 
               whileHover={{ x: 5 }}
               className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex items-center gap-8 hover:shadow-lg transition-all"
             >
               <div className="size-28 rounded-[2rem] overflow-hidden shrink-0 border-2 border-white shadow-md">
                  <img src={curso.image} className="w-full h-full object-cover grayscale" alt="Curso" />
               </div>
               <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-3">
                     <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg bg-blue-100 text-blue-700">
                       {curso.status}
                     </span>
                     <MiniChart />
                  </div>
                  <h4 className="text-xl font-black text-[#001d3d] uppercase tracking-tight mb-2 line-clamp-1">{curso.title}</h4>
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                     <span className="flex items-center gap-1.5"><CalendarDays size={14}/> {curso.date.split(',')[0]}</span>
                     <span className="flex items-center gap-1.5"><ChevronRight size={14} className="text-[#ea580c]"/> Ver Detalles</span>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
           <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-16 text-white relative overflow-hidden group border-b-[12px] border-blue-600 shadow-2xl">
              <Cpu className="absolute -right-10 -top-10 text-white/5 opacity-50 group-hover:rotate-12 transition-transform duration-700" size={300} />
              <div className="relative z-10">
                 <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">Capacitación Técnica <br/><span className="text-blue-500 font-serif lowercase tracking-normal italic">in-house</span></h3>
                 <p className="text-blue-100/70 text-base font-medium italic mb-10 max-w-xl leading-relaxed">
                   Desarrollamos talleres cerrados para instituciones según sus necesidades específicas: desde el manejo de bases de datos propias hasta la implementación de modelos econométricos a medida.
                 </p>
                 <div className="flex flex-wrap gap-6 items-center">
                    <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl">Contactar con un Coordinador</button>
                    <div className="flex gap-4">
                       {softwareStack.map((sw, i) => (
                         <span key={i} className={`text-[10px] font-mono font-black border border-white/20 px-3 py-1 rounded-lg uppercase ${sw.color}`}>{sw.name}</span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="bg-white rounded-[3.5rem] p-12 border border-slate-200 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-md">
              <StatisticalOverlay opacity="0.02" />
              <PieChart size={48} className="text-[#ea580c] mb-6" />
              <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tighter mb-4">Áreas de Experticia</h3>
              <div className="space-y-4 w-full">
                 {areasExperticia.map((area, i) => (
                   <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-[11px] font-black uppercase text-[#001d3d] tracking-widest">{area}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default InvestigacionServiciosCoursesSection

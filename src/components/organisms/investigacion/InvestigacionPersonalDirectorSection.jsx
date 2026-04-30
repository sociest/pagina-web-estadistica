import { Mail } from 'lucide-react'
import RoleChip from '../../atoms/investigacion/RoleChip'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'

const InvestigacionPersonalDirectorSection = ({ director, meta }) => {
  const Icon = meta.sectionIcon

  return (
    <section id="direccion" className="px-4 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <InvestigacionSectionHeader tag={meta.sectionTag} title={meta.sectionTitle} />

        <div className="group flex flex-col overflow-hidden rounded-[3.3rem] border border-slate-200 bg-white shadow-xl transition-colors duration-500 hover:border-[#001d3d] md:flex-row">
        <div className="relative h-[300px] overflow-hidden md:h-auto md:w-[40%]">
          <img src={director.imageUrl} className="h-full w-full object-cover grayscale-[0.8] contrast-125 transition-all duration-700 group-hover:grayscale-0" alt={director.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6">
            <RoleChip>{meta.badge}</RoleChip>
          </div>
        </div>

        <div className="flex flex-col justify-center p-10 md:w-[60%] md:p-14">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl border border-slate-100 bg-[#f8fafc] text-[#001d3d] shadow-inner">
              <Icon size={24} />
            </div>
            <div>
              <p className="mb-0.5 text-[10px] font-black uppercase tracking-widest text-slate-400">CARGO INSTITUCIONAL</p>
              <p className="text-sm font-black uppercase leading-tight text-[#ea580c]">{director.role}</p>
            </div>
          </div>

          <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-[#001d3d] md:text-4xl">{director.name}</h3>

          <p className="mb-8 max-w-lg border-l-4 border-slate-200 pl-4 text-sm font-medium italic text-slate-500">
            INVESTIGADOR ESPECIALIZADO EN {director.specialty}. ENCARGADO DE LA PLANIFICACION, EJECUCION Y COORDINACION DE LA INVESTIGACION CIENTIFICA.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${director.email}`}
              className="flex items-center gap-2 rounded-xl bg-[#001d3d] px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-md transition-colors hover:bg-[#ea580c]"
            >
              <Mail size={14} />
              {director.email}
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default InvestigacionPersonalDirectorSection

import { ExternalLink, Link as LinkIcon, Mail } from 'lucide-react'

const ResearcherCard = ({ researcher, pointIcon: PointIcon }) => (
  <article className="group flex flex-col overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl">
    <div className="relative aspect-square overflow-hidden bg-[#f8fafc]">
      <img
        src={researcher.imageUrl}
        className="h-full w-full object-cover grayscale opacity-80 contrast-125 mix-blend-multiply transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        alt={researcher.name}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#001d3d]/80 p-6 text-center opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
        <ExternalLink className="mb-4 text-[#ea580c]" size={30} />
        <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-white">INVESTIGACIONES PUBLICADAS</h4>
        <a href="#" className="flex items-center gap-2 rounded-xl bg-[#ea580c] px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#001d3d]">
          VER PROYECTOS <ExternalLink size={13} />
        </a>
      </div>
    </div>

    <div className="z-20 flex flex-1 flex-col bg-white p-8">
      <p className="mb-2 text-[9px] font-black uppercase tracking-[0.3em] text-[#ea580c]">{researcher.role}</p>
      <h3 className="mb-4 text-xl font-black uppercase leading-tight tracking-tighter text-[#001d3d]">{researcher.name}</h3>

      <div className="mb-6 flex-1 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="mb-1 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400">
          <PointIcon size={12} />
          ESPECIALIDAD
        </p>
        <p className="text-xs font-bold text-[#002a52]">{researcher.specialty}</p>
      </div>

      <div className="flex gap-2">
        <a
          href={`mailto:${researcher.email}`}
          title="Enviar Correo"
          className="flex flex-1 justify-center rounded-lg border border-slate-200 bg-white py-3 text-slate-500 shadow-sm transition-colors hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white"
        >
          <Mail size={16} />
        </a>
        <a
          href="#"
          title="Perfil ORCID"
          className="flex flex-1 justify-center rounded-lg border border-slate-200 bg-white py-3 text-slate-500 shadow-sm transition-colors hover:border-[#001d3d] hover:bg-[#001d3d] hover:text-white"
        >
          <LinkIcon size={16} />
        </a>
      </div>
    </div>
  </article>
)

export default ResearcherCard

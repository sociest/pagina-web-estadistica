import { ArrowRight, UserCircle } from 'lucide-react'
import AutoresMiniTrendChart from '../../atoms/investigacion/AutoresMiniTrendChart'
import AutoresStatisticalOverlay from '../../atoms/investigacion/AutoresStatisticalOverlay'

const AutoresAuthorCard = ({ author, onSelect }) => (
  <article className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#ea580c] hover:shadow-xl">
    <AutoresMiniTrendChart color="#ea580c" />
    <AutoresStatisticalOverlay opacity="0.03" />

    <div className="relative z-10 mb-8 flex items-start justify-between">
      <div className="flex size-20 items-center justify-center rounded-[1.5rem] border border-slate-100 bg-slate-50 text-slate-400 shadow-inner transition-colors group-hover:bg-[#001d3d] group-hover:text-white">
        <UserCircle size={40} />
      </div>
      <div className="flex flex-col items-center rounded-xl border border-[#ea580c]/30 bg-[#ea580c]/10 px-4 py-2 shadow-sm backdrop-blur-sm">
        <span className="text-2xl font-black leading-none text-[#ea580c]">{author.articles.length}</span>
        <span className="mt-1 text-[9px] font-black uppercase tracking-widest text-[#001d3d]">APORTES</span>
      </div>
    </div>

    <h3 className="mb-3 text-xl font-black uppercase leading-tight tracking-tighter text-[#001d3d] transition-colors group-hover:text-[#ea580c]">{author.name}</h3>

    <p className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
      <span className="text-[#ea580c]">•</span> {author.affiliation}
    </p>

    <div className="mt-auto border-t border-slate-100 pt-6">
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">ULTIMO APORTE</p>
      <p className="mb-8 rounded-lg bg-white/50 p-2 text-base font-medium italic text-slate-700 line-clamp-2">{author.articles[0]?.title}</p>
      <button
        type="button"
        onClick={() => onSelect(author)}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-4 text-xs font-black uppercase tracking-widest text-[#001d3d] shadow-sm transition-all duration-300 hover:border-[#001d3d] hover:bg-[#001d3d] hover:text-white"
      >
        VER PERFIL ACADEMICO <ArrowRight size={16} />
      </button>
    </div>
  </article>
)

export default AutoresAuthorCard

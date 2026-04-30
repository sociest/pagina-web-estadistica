import { ArrowRight, Mail } from 'lucide-react'

const AuthorityProfileCard = ({ member }) => (
  <article className="group relative">
    <div className="-z-10 absolute -inset-4 rounded-[4rem] border border-slate-100 bg-[#f8fafc] transition-colors duration-300 group-hover:bg-[#f1f5f9]" />
    <div className="flex flex-col items-center gap-10 p-2 md:flex-row">
      <div className="h-72 w-60 shrink-0 overflow-hidden rounded-[3rem] border-4 border-white shadow-2xl grayscale-[0.6] contrast-[1.1] transition-[filter] duration-700 group-hover:grayscale-0">
        <img src={member.img} className="h-full w-full object-cover" alt={member.name} />
      </div>
      <div className="flex-1">
        <div className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg" style={{ backgroundColor: member.color }}>
          {member.role}
        </div>
        <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tighter text-[#002a52]">{member.name}</h3>

        <div className="mb-8 space-y-4 border-l border-slate-200 pl-4">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-slate-400" />
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Correo Institucional</p>
              <p className="text-xs font-bold text-slate-600">{member.email}</p>
            </div>
          </div>
        </div>

        <button type="button" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[#00447e] transition-[gap] duration-300 hover:gap-4 motion-reduce:transition-none">
          Ver Perfil Academico
          <ArrowRight size={14} className="text-[#c2410c]" />
        </button>
      </div>
    </div>

    <div className="absolute right-8 top-4 font-mono text-[10px] font-black uppercase text-slate-100 group-hover:text-slate-200">
      {member.stats.s} = {member.stats.v}
    </div>
  </article>
)

export default AuthorityProfileCard

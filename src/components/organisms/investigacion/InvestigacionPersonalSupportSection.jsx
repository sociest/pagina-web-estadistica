import { Briefcase, GraduationCap, Mail } from 'lucide-react'

const InvestigacionPersonalSupportSection = ({ administrative, auxiliaries, meta }) => {
  const AdminIcon = meta.adminIcon

  return (
    <section id="apoyo" className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[4rem] border-t-8 border-[#ea580c] bg-[#001d3d] p-10 shadow-2xl md:p-16">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mb-10">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#ea580c]">{meta.sectionTag}</p>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">{meta.sectionTitle}</h2>
      </div>

      <div className="relative z-10 grid gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-6">
            <div className="flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#ea580c]">
              <Briefcase size={20} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{meta.adminTitle}</h3>
          </div>

          <div className="space-y-4">
            {administrative.map((admin) => (
              <article key={admin.email} className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors group-hover:text-white">
                  <AdminIcon size={24} />
                </div>
                <div>
                  <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#ea580c]">{admin.role}</p>
                  <h4 className="mb-2 text-sm font-black uppercase leading-tight text-white">{admin.name}</h4>
                  <a href={`mailto:${admin.email}`} className="flex items-center gap-1.5 text-[10px] font-bold text-blue-200 transition-colors hover:text-white">
                    <Mail size={12} />
                    {admin.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-6">
            <div className="flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-blue-300">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{meta.auxTitle}</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {auxiliaries.map((aux) => {
              const Icon = aux.icon

              return (
                <article key={aux.email} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <div className="mb-3 flex items-center gap-3 border-b border-white/5 pb-3">
                    <Icon size={14} className="text-blue-300" />
                    <p className="text-[8px] font-black uppercase leading-tight tracking-widest text-blue-200">{aux.role}</p>
                  </div>

                  <h4 className="mb-2 text-xs font-black uppercase leading-tight text-white">{aux.name}</h4>

                  <a href={`mailto:${aux.email}`} className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 transition-colors hover:text-white">
                    <Mail size={10} />
                    CORREO INSTITUCIONAL
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestigacionPersonalSupportSection

import PropTypes from 'prop-types'

function StudentsCenterLeadershipSection({ directiva, delegadosHcf, delegadosAcademico, sectionHeaderComponent }) {
  const SectionHeader = sectionHeaderComponent

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#001d3d_0%,#003666_55%,#00447e_100%)] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.08)_75%,rgba(255,255,255,0.08)_76%,transparent_77%,transparent)] bg-[length:80px_80px]" />
      </div>
      <svg className="pointer-events-none absolute right-0 top-0 h-[300px] w-[760px] opacity-[0.2]" viewBox="0 0 760 300" fill="none" aria-hidden="true">
        <path d="M0 140 Q190 44 380 140 T760 140" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 174 Q190 78 380 174 T760 174" stroke="#9ad6ff" strokeWidth="1.45" opacity="0.8" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1536px] px-6 md:px-12">
        <SectionHeader
          tag="Equipo de trabajo"
          title="Directiva actual"
          sub="Conoce a los representantes elegidos democráticamente para velar por el desarrollo integral de la comunidad estudiantil."
          center
          light
        />

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3 border-b border-white/20 pb-4">
            <div className="h-1 w-8 rounded-full bg-[#ea580c]" />
            <h3 className="text-xl font-black uppercase italic tracking-widest text-white">Secretarías Ejecutivas (CEE)</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {directiva.map((member) => (
              <article key={member.name} className="group flex items-center gap-5 rounded-[2.5rem] border border-white/20 bg-white/90 p-8 transition-all hover:border-[#ea580c] hover:shadow-xl">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-[1.5rem] border border-slate-100 bg-[#f8fafc] text-slate-300 shadow-sm transition-colors group-hover:bg-[#ea580c] group-hover:text-white">
                  <span className="text-xs font-black">CEE</span>
                </div>
                <div>
                  <h4 className="mb-1 text-base font-black uppercase leading-tight text-[#001d3d]">{member.name}</h4>
                  <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3 border-b border-white/20 pb-4">
              <div className="h-1 w-8 rounded-full bg-[#001d3d]" />
              <h3 className="text-xl font-black uppercase italic tracking-widest text-white">Delegados al HCF</h3>
            </div>
            <div className="space-y-4">
              {delegadosHcf.map((member) => (
                <article key={member.name} className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-sm">
                  <div className="size-2 shrink-0 rounded-full bg-[#001d3d]" />
                  <div>
                    <h4 className="text-[12px] font-black uppercase leading-tight text-[#002a52]">{member.name}</h4>
                    <p className="mt-0.5 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3 border-b border-white/20 pb-4">
              <div className="h-1 w-8 rounded-full bg-[#ea580c]" />
              <h3 className="text-xl font-black uppercase italic tracking-widest text-white">Delegados Académicos</h3>
            </div>
            <div className="space-y-4">
              {delegadosAcademico.map((member) => (
                <article key={member.name} className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-sm">
                  <div className="size-2 shrink-0 rounded-full bg-[#ea580c]" />
                  <div>
                    <h4 className="text-[12px] font-black uppercase leading-tight text-[#002a52]">{member.name}</h4>
                    <p className="mt-0.5 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

StudentsCenterLeadershipSection.propTypes = {
  sectionHeaderComponent: PropTypes.elementType.isRequired,
  directiva: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delegadosHcf: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delegadosAcademico: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default StudentsCenterLeadershipSection

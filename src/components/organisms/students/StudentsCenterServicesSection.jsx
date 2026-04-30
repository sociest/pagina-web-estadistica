import PropTypes from 'prop-types'

function StudentsCenterServicesSection({ services, sectionHeaderComponent }) {
  const SectionHeader = sectionHeaderComponent

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.08)_75%,rgba(255,255,255,0.08)_76%,transparent_77%,transparent)] bg-[length:82px_82px]" />
      </div>
      <svg className="pointer-events-none absolute -right-20 top-10 h-[300px] w-[780px] opacity-[0.2]" viewBox="0 0 780 300" fill="none" aria-hidden="true">
        <path d="M0 150 Q195 48 390 150 T780 150" stroke="#ea580c" strokeWidth="2.3" />
        <path d="M0 184 Q195 82 390 184 T780 184" stroke="#9ad6ff" strokeWidth="1.5" opacity="0.78" />
      </svg>
      <svg className="pointer-events-none absolute left-6 bottom-6 h-[240px] w-[340px] opacity-[0.16]" viewBox="0 0 340 240" fill="none" aria-hidden="true">
        <rect x="30" y="144" width="18" height="56" rx="2" fill="#9ad6ff" />
        <rect x="58" y="120" width="18" height="80" rx="2" fill="#9ad6ff" opacity="0.82" />
        <rect x="86" y="100" width="18" height="100" rx="2" fill="#ea580c" opacity="0.78" />
        <rect x="114" y="84" width="18" height="116" rx="2" fill="#9ad6ff" opacity="0.76" />
      </svg>

      <div className="mx-auto max-w-[1536px] rounded-[3.5rem] border border-white/15 bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-6 py-14 shadow-2xl md:px-12">
        <SectionHeader
          tag="Beneficios"
          title="Servicios al Estudiante"
          sub="El CEE trabaja para brindar apoyo academico, institucional y extracurricular a todos los estudiantes regulares de la carrera."
          center
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
          const ServiceIcon = service.icon
          return (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-[2.5rem] border p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                index % 2 === 0
                  ? 'border-white/20 bg-white/95 hover:border-[#ea580c]'
                  : 'border-white/20 bg-[#f0f7ff] hover:border-[#ea580c]'
              }`}
            >
              <div className="pointer-events-none absolute right-3 top-3 font-mono text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-200">sigma</div>
              <div className={`mb-6 flex size-14 items-center justify-center rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-110 ${service.bg} ${service.color}`}>
                {ServiceIcon ? <ServiceIcon size={28} /> : null}
              </div>
              <h3 className="mb-4 text-xl font-black uppercase leading-tight tracking-tighter text-[#001d3d] transition-colors group-hover:text-[#ea580c]">
                {service.title}
              </h3>
              <p className="text-base font-medium italic leading-relaxed text-slate-500">{service.desc}</p>
            </article>
          )
        })}
        </div>
      </div>
    </section>
  )
}

StudentsCenterServicesSection.propTypes = {
  sectionHeaderComponent: PropTypes.elementType.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      color: PropTypes.string,
      bg: PropTypes.string,
    }),
  ).isRequired,
}

export default StudentsCenterServicesSection

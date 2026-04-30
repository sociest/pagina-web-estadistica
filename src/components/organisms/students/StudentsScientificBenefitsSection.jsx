import StudentsCenterSectionHeader from '../../molecules/students/StudentsCenterSectionHeader'

function StudentsScientificBenefitsSection({ benefits, admissionSteps }) {
  return (
    <section className="relative mt-10 overflow-hidden border-b-[8px] border-[#ea580c] bg-[#001d3d] px-6 py-24 text-white shadow-2xl md:px-12">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.09]" viewBox="0 0 1600 620" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 360C320 360 640 220 960 190C1210 170 1400 250 1600 360" stroke="#00447e" strokeWidth="2.2" />
        <path d="M0 388C320 388 640 248 960 218C1210 198 1400 278 1600 388" stroke="#ea580c" strokeWidth="1.8" opacity="0.8" />
      </svg>

      <div className="relative mx-auto max-w-[1536px]">
        <StudentsCenterSectionHeader
          tag="Crecimiento profesional"
          title="¿Por que pertenecer a la sociedad?"
          sub="Acceso a certificaciones, publicaciones, eventos y networking con investigadores del area."
          center
          light
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon
            return (
              <article key={benefit.title} className="rounded-[2.2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-md transition-colors hover:bg-white/15">
                <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-[#ea580c] text-white shadow-lg">
                  <BenefitIcon size={28} />
                </div>
                <h3 className="mb-3 text-lg font-black uppercase tracking-tighter text-white">{benefit.title}</h3>
                <p className="text-[11px] font-medium italic leading-relaxed text-blue-200/80">{benefit.desc}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-20">
          <StudentsCenterSectionHeader
            tag="Filtro de excelencia"
            title="Proceso de admision"
            sub="El ingreso es selectivo y busca estudiantes con interes real por la investigacion estadistica."
            center
            light
          />

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {admissionSteps.map((step) => {
              const StepIcon = step.icon
              return (
                <article key={step.id} className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15">
                  <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full border-4 border-white/20 bg-[#001d3d] text-white transition-colors group-hover:border-[#ea580c] group-hover:bg-[#ea580c]">
                    <StepIcon size={24} />
                  </div>
                  <div className="mx-auto mb-4 flex size-5 items-center justify-center rounded-full bg-[#ea580c] text-[9px] font-black text-white">{step.id}</div>
                  <h3 className="mb-2 text-sm font-black uppercase tracking-tighter text-white">{step.title}</h3>
                  <p className="text-[11px] font-medium italic leading-relaxed text-blue-200/80">{step.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsScientificBenefitsSection

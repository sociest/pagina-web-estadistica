import StudentsSectionHeader from '../../molecules/students/StudentsSectionHeader'

function StudentsCallsGuideSection({ steps }) {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white px-6 py-20 md:px-10">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#001d3d 1.1px, transparent 1.1px)', backgroundSize: '34px 34px' }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 1500 560" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 320C280 320 580 150 900 160C1160 170 1330 300 1500 300" stroke="#00447e" strokeWidth="2" />
        <path d="M0 350C280 350 580 180 900 190C1160 200 1330 330 1500 330" stroke="#ea580c" strokeWidth="1.8" opacity="0.7" />
      </svg>

      <div className="relative mx-auto max-w-[1280px]">
        <StudentsSectionHeader
          tag="Procedimiento"
          title="Guia de postulacion"
          sub="Sigue estos pasos para evitar observaciones y asegurar una entrega completa del expediente."
          center
        />

        <div className="relative mt-16">
          <div className="absolute left-[12%] right-[12%] top-[42px] z-0 hidden h-1.5 rounded-full bg-slate-100 md:block" />

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon

              return (
                <div key={step.title} className="group flex flex-col items-center text-center">
                  <div className="mb-5 flex size-20 items-center justify-center rounded-[1.7rem] border-4 border-slate-100 bg-white text-[#001d3d] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-[#ea580c] group-hover:text-[#ea580c]">
                    <StepIcon size={30} />
                  </div>
                  <h3 className="mb-2 text-lg font-black uppercase tracking-tighter text-[#001d3d]">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="max-w-[220px] text-[12px] font-medium italic leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsCallsGuideSection

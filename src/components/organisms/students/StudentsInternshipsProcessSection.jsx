import StudentsCenterSectionHeader from '../../molecules/students/StudentsCenterSectionHeader'

function StudentsInternshipsProcessSection({ steps }) {
  return (
    <section className="relative mx-4 mt-10 overflow-hidden rounded-[3.3rem] border-b-[8px] border-[#ea580c] bg-[#001d3d] px-6 py-24 text-white shadow-2xl md:px-12">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative mx-auto max-w-[1536px]">
        <StudentsCenterSectionHeader
          tag="Flujo de trabajo"
          title="El proceso de pasantia"
          sub="Conoce las etapas administrativas para habilitar y concluir tu practica institucional."
          center
          light
        />

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute left-[10%] right-[10%] top-[40px] z-0 hidden h-1 rounded-full bg-white/10 md:block" />
          <div className="absolute left-[10%] top-[40px] z-0 hidden h-1 w-[20%] rounded-full bg-[#ea580c] md:block" />

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon
              const isFirst = idx === 0

              return (
                <div key={step.id} className="group flex flex-col items-center text-center">
                  <div className={`mb-6 flex size-20 items-center justify-center rounded-[2rem] border-4 shadow-2xl transition-all duration-500 ${
                    isFirst
                      ? 'border-[#001d3d] bg-[#ea580c] text-white'
                      : 'border-white/20 bg-white/10 text-white/60 group-hover:scale-110 group-hover:border-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white'
                  }`}>
                    <StepIcon size={28} />
                  </div>
                  <div className="relative -mt-12 mb-4 flex size-6 items-center justify-center rounded-full border-2 border-[#001d3d] bg-[#ea580c] text-[10px] font-black text-white shadow-sm">
                    {step.id}
                  </div>
                  <h3 className="mb-2 text-base font-black uppercase tracking-tighter text-white">{step.title}</h3>
                  <p className="px-2 text-[11px] font-medium italic leading-relaxed text-blue-200/80">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsInternshipsProcessSection

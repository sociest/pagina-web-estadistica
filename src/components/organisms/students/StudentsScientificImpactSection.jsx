import StudentsCenterSectionHeader from '../../molecules/students/StudentsCenterSectionHeader'

function StudentsScientificImpactSection({ testimonials, nodes }) {
  return (
    <section className="relative overflow-hidden bg-[#001d3d] px-6 py-24 text-white md:px-12">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

      <div className="relative mx-auto grid max-w-[1536px] gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <StudentsCenterSectionHeader tag="Casos de exito" title="Experiencias reales" light />

          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[2.2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-md">
                <p className="mb-6 text-base font-medium italic leading-relaxed text-blue-100">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="size-12 rounded-full border-2 border-[#ea580c] object-cover" />
                  <div>
                    <h3 className="text-[12px] font-black uppercase leading-none tracking-tighter text-white">{testimonial.name}</h3>
                    <p className="mt-1 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-300">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[3.2rem] border-4 border-white bg-[#f8fafc] p-10 text-[#001d3d] shadow-2xl md:p-14">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#001d3d 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10 mb-10 text-center">
            <h3 className="mb-2 text-3xl font-black uppercase tracking-tighter">Red institucional</h3>
            <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-500">Aliados que potencian la investigacion</p>
          </div>

          <div className="relative z-10 flex h-[300px] items-center justify-center overflow-hidden rounded-3xl border-2 border-blue-100 bg-blue-50">
            <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 800 500" fill="none" aria-hidden="true">
              <circle cx="400" cy="250" r="170" stroke="#00447e" strokeWidth="1.8" />
              <circle cx="400" cy="250" r="120" stroke="#00447e" strokeWidth="1.2" opacity="0.7" />
              <path d="M180 120C250 160 320 170 400 250C480 330 560 340 620 360" stroke="#ea580c" strokeWidth="1.8" />
            </svg>

            {nodes.map((node) => (
              <div key={node.label} className="absolute flex cursor-pointer flex-col items-center" style={{ left: node.x, top: node.y }}>
                <div className="size-3 rounded-full shadow-[0_0_14px_currentColor]" style={{ background: node.color, color: node.color }} />
                <div className="mt-2 rounded border border-slate-200 bg-white px-3 py-1 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest shadow-md">
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsScientificImpactSection

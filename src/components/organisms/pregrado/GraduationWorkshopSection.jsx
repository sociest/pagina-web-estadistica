import { ArrowRight } from 'lucide-react'

function GraduationWorkshopSection({ workshop, processSteps }) {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[3rem] bg-[linear-gradient(150deg,#001d3d_0%,#00284d_58%,#00345f_100%)] p-10 shadow-2xl md:rounded-[4rem] md:p-16 lg:flex-row">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <svg className="pointer-events-none absolute right-0 top-0 h-[320px] w-[740px] opacity-[0.18]" viewBox="0 0 740 320" fill="none" aria-hidden="true">
          <path d="M0 154 Q185 66 370 154 T740 154" stroke="#ea580c" strokeWidth="2.3" />
          <path d="M0 184 Q185 96 370 184 T740 184" stroke="#8dc7ff" strokeWidth="1.3" opacity="0.72" />
        </svg>

        <workshop.icon className="pointer-events-none absolute -bottom-10 -left-10 text-white opacity-5" size={250} />

        <div className="relative z-10 lg:w-1/2">
          <div className="mb-6 inline-block rounded bg-[#ea580c] px-3 py-1 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white">{workshop.badge}</div>
          <h3 className="mb-6 text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-4xl">
            {workshop.title[0]} <span className="text-[#ea580c]">{workshop.title[1]}</span>
          </h3>
          <p className="mb-8 border-l-2 border-white/20 pl-6 text-base font-medium italic leading-relaxed text-blue-200 md:text-base">
            {workshop.description}
          </p>
          <a href={workshop.ctaHref} className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#001d3d]">
            {workshop.ctaLabel} <ArrowRight size={14} />
          </a>
        </div>

        <div className="relative z-10 grid w-full gap-4 sm:grid-cols-2 lg:w-1/2">
          {processSteps.map((step) => (
            <article key={step.title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-[#ea580c]/10">
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#ea580c]">
                <step.icon size={20} />
              </div>
              <h4 className="mb-2 text-sm sm:text-base md:text-lg font-black uppercase tracking-tighter text-white">{step.title}</h4>
              <p className="text-[10px] font-medium leading-relaxed text-white/55">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GraduationWorkshopSection

import { ChevronRight } from 'lucide-react'

function PregradoHeroSection({ hero }) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)]">
      <div className="absolute inset-0">
        <img src={hero.imageUrl} className="h-full w-full scale-105 object-cover opacity-20 grayscale" alt="Estudiantes analizando datos" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d3d] via-[#001d3d]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(234,88,12,0.26),transparent_45%),radial-gradient(circle_at_78%_76%,rgba(0,68,126,0.34),transparent_50%)]" />
      </div>

      <svg className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[760px] opacity-[0.18]" viewBox="0 0 760 260" fill="none" aria-hidden="true">
        <path d="M0 130 Q190 36 380 130 T760 130" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 164 Q190 70 380 164 T760 164" stroke="#ffffff" strokeWidth="1.2" opacity="0.5" />
      </svg>

      <svg className="pointer-events-none absolute right-0 top-0 h-[360px] w-[760px] opacity-[0.22]" viewBox="0 0 760 360" fill="none" aria-hidden="true">
        <path d="M0 170 Q190 82 380 170 T760 170" stroke="#ea580c" strokeWidth="2.3" />
        <path d="M0 202 Q190 114 380 202 T760 202" stroke="#8dc7ff" strokeWidth="1.5" opacity="0.78" />
        <path d="M0 236 Q190 148 380 236 T760 236" stroke="#ffffff" strokeWidth="1.1" opacity="0.38" />
      </svg>

      <svg className="pointer-events-none absolute left-10 top-14 h-[260px] w-[260px] opacity-[0.17]" viewBox="0 0 260 260" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="104" stroke="#8dc7ff" strokeWidth="1.8" />
        <circle cx="130" cy="130" r="74" stroke="#ea580c" strokeWidth="1.4" opacity="0.8" />
        <circle cx="130" cy="130" r="46" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="pointer-events-none absolute inset-0 opacity-[0.13]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.14)_25%,rgba(255,255,255,0.14)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.14)_75%,rgba(255,255,255,0.14)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.11)_25%,rgba(255,255,255,0.11)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.11)_75%,rgba(255,255,255,0.11)_76%,transparent_77%,transparent)] bg-[length:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 md:px-12">
        <div className="max-w-3xl">
          <span className="mb-8 inline-block rounded-full border border-[#ea580c]/30 bg-[#ea580c]/20 px-4 py-1.5 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.25em] text-[#ea580c]">
            {hero.eyebrow}
          </span>
          <h1 className="mb-8 text-4xl font-black uppercase leading-[1.05] tracking-tighter text-white drop-shadow-2xl md:text-6xl">
            {hero.title[0]} <br />
            <span className="font-serif italic lowercase text-[#ea580c]">{hero.title[1]}</span> <br />
            {hero.title[2]}
          </h1>
          <p className="mb-10 max-w-xl border-l-4 border-[#ea580c] pl-8 text-base font-medium italic leading-relaxed text-slate-300 md:text-lg">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={hero.primaryCta.href} className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d] shadow-2xl transition hover:bg-slate-100">
              {hero.primaryCta.label}
              <ChevronRight className="transition-transform group-hover:translate-x-1" size={16} />
            </a>
            <a href={hero.secondaryCta.href} className="rounded-2xl border border-white/20 bg-transparent px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white transition hover:bg-white/5">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden flex-col items-end gap-2 font-mono text-[9px] text-white opacity-10 md:flex">
        <div className="flex items-center gap-3"><span>REGRESION</span> <div className="h-px w-20 bg-white" /> <span>y = b0 + b1x</span></div>
        <div className="flex items-center gap-3"><span>CONFIANZA</span> <div className="h-px w-20 bg-white" /> <span>95% CI</span></div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[16%] hidden -translate-x-1/2 text-[130px] font-black italic text-[#8dc7ff]/[0.09] lg:block" aria-hidden="true">
        Sigma
      </div>
    </section>
  )
}

export default PregradoHeroSection

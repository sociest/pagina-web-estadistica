import { GraduationCap } from 'lucide-react'

function GraduationHeroSection({ hero }) {
  const HeroIcon = hero.icon ?? GraduationCap

  return (
    <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-8 pb-16 pt-32 shadow-sm">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" />
      <svg className="pointer-events-none absolute right-0 top-0 h-[340px] w-[760px] opacity-[0.16]" viewBox="0 0 760 340" fill="none" aria-hidden="true">
        <path d="M0 168 Q190 74 380 168 T760 168" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 198 Q190 104 380 198 T760 198" stroke="#9ad6ff" strokeWidth="1.5" opacity="0.75" />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-[1536px] flex-col items-end gap-6 md:flex-row md:justify-between">
        <div>
          <p className="mb-2 flex items-center gap-2 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ffb184]">
            <HeroIcon size={14} /> {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl">
            {hero.title[0]} <br />
            <span className="font-serif text-[#ea580c] italic lowercase tracking-normal">{hero.title[1]}</span>
          </h1>
        </div>
        <div className="flex gap-6 pb-1 font-mono text-[10px] font-black uppercase italic text-white/70">
          {hero.highlights.map((item, index) => (
            <span key={item} className={index === 1 ? 'text-[#ea580c]' : ''}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GraduationHeroSection

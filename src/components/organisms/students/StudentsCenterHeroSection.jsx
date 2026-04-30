function StudentsCenterHeroSection({ hero, stats, channels, onChannelAction }) {
  const HeroIcon = hero.icon
  const LeftShape = hero.leftShape
  const RightShape = hero.rightShape

  return (
    <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-8 pb-24 pt-[120px]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" />
      <svg className="pointer-events-none absolute right-0 top-0 h-[360px] w-[900px] opacity-[0.24]" viewBox="0 0 900 360" fill="none" aria-hidden="true">
        <path d="M0 170 Q225 68 450 170 T900 170" stroke="#ea580c" strokeWidth="2.6" />
        <path d="M0 204 Q225 102 450 204 T900 204" stroke="#9ad6ff" strokeWidth="1.6" opacity="0.82" />
        <path d="M0 238 Q225 136 450 238 T900 238" stroke="#ffffff" strokeWidth="1.15" opacity="0.42" />
      </svg>
      <svg className="pointer-events-none absolute -left-16 bottom-4 h-[260px] w-[760px] opacity-[0.18]" viewBox="0 0 760 260" fill="none" aria-hidden="true">
        <path d="M0 130 Q190 36 380 130 T760 130" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 164 Q190 70 380 164 T760 164" stroke="#8dc7ff" strokeWidth="1.2" opacity="0.56" />
      </svg>
      <div className="relative z-10 mx-auto grid max-w-[1536px] gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/20 px-5 py-2 backdrop-blur-sm mb-8">
            {HeroIcon ? <HeroIcon className="text-blue-200" size={14} /> : null}
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-blue-100">{hero.eyebrow}</span>
          </div>
          <h1 className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl lg:text-7xl">
            {hero.title[0]} <br />
            <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{hero.title[1]}</span>
          </h1>
          <p className="mb-10 max-w-2xl rounded-r-3xl border-l-4 border-[#ea580c] bg-white/5 py-4 pl-6 text-lg font-medium italic leading-relaxed text-blue-100/80 shadow-sm">
            {hero.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            {channels.map((channel) => {
              const ChannelIcon = channel.icon
              return (
                <button
                  key={channel.label}
                  type="button"
                  onClick={() => onChannelAction?.(channel.label)}
                  className={`flex items-center justify-center gap-3 rounded-2xl border px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all hover:-translate-y-1 ${channel.tone === 'blue' ? 'border-white/15 bg-white/10 text-white hover:bg-white hover:text-[#00447e]' : 'border-white/15 bg-white/10 text-white hover:bg-white hover:text-[#b45309]'}`}
                >
                  {ChannelIcon ? <ChannelIcon size={16} /> : null}
                  {channel.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid gap-4 rounded-[3rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const StatIcon = stat.icon
              return (
                <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 text-white">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/50">{stat.label}</span>
                    {StatIcon ? <StatIcon size={16} className="text-[#ea580c]" /> : null}
                  </div>
                  <div className="text-3xl font-black tracking-tighter text-white">{stat.value}</div>
                  <div className="mt-1 text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-100/60">{stat.suffix}</div>
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {channels.map((channel) => (
              <div key={channel.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 text-white">
                <p className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/50">Canal oficial</p>
                <p className="mt-2 text-base font-black uppercase tracking-tight text-white">{channel.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {LeftShape ? <LeftShape className="pointer-events-none absolute -left-10 top-20 text-white/15" size={240} /> : null}
      {RightShape ? <RightShape className="pointer-events-none absolute -bottom-2 -right-10 text-white/15" size={220} /> : null}
    </section>
  )
}

export default StudentsCenterHeroSection

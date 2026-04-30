import PropTypes from 'prop-types'

function ContactHeroSection({ hero }) {
  const LeftShape = hero.leftShape
  const RightShape = hero.rightShape
  const HeroIcon = hero.icon

  return (
    <section className="relative overflow-hidden border-b-[8px] border-[#ea580c] bg-[#001d3d] px-6 pb-48 pt-[140px] md:px-10">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.14]" viewBox="0 0 1600 620" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 410C280 410 560 250 880 220C1160 194 1360 236 1600 410" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 446C280 446 560 286 880 256C1160 230 1360 272 1600 446" stroke="#93c5fd" strokeWidth="1.9" opacity="0.75" />
        <path d="M0 484C280 484 560 324 880 294C1160 268 1360 310 1600 484" stroke="#ffffff" strokeWidth="1.2" opacity="0.4" />
      </svg>

      <div className="relative mx-auto max-w-[1536px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            {HeroIcon ? <HeroIcon className="text-[#ea580c]" size={14} /> : null}
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/80">{hero.eyebrow}</span>
          </div>

          <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl lg:text-7xl">
            {hero.title[0]} <br />
            <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{hero.title[1]}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base font-medium italic leading-relaxed text-blue-200/85 md:text-lg">
            {hero.description}
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20"
          >
            {hero.ctaLabel}
          </button>
        </div>

      </div>

      {LeftShape ? <LeftShape className="absolute -left-10 top-20 text-white/10" size={250} /> : null}
      {RightShape ? <RightShape className="absolute -right-12 bottom-4 text-white/10" size={220} /> : null}
    </section>
  )
}

ContactHeroSection.propTypes = {
  hero: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
    ctaLabel: PropTypes.string.isRequired,
    leftShape: PropTypes.elementType,
    rightShape: PropTypes.elementType,
    icon: PropTypes.elementType,
  }).isRequired,
}

export default ContactHeroSection

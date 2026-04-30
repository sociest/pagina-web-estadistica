import PropTypes from 'prop-types'

function StudentsCenterStructureSection({ structure, sectionHeaderComponent }) {
  const SectionHeader = sectionHeaderComponent

  return (
    <section className="relative overflow-hidden border-y border-white/20 bg-[linear-gradient(165deg,#001d3d_0%,#003666_55%,#00447e_100%)] py-24 shadow-inner">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.08)_75%,rgba(255,255,255,0.08)_76%,transparent_77%,transparent)] bg-[length:78px_78px]" />
      </div>
      <svg className="pointer-events-none absolute right-0 top-0 h-[300px] w-[760px] opacity-[0.2]" viewBox="0 0 760 300" fill="none" aria-hidden="true">
        <path d="M0 140 Q190 44 380 140 T760 140" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 174 Q190 78 380 174 T760 174" stroke="#9ad6ff" strokeWidth="1.45" opacity="0.8" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionHeader
          tag={structure.tag}
          title={structure.title}
          sub={structure.sub}
          center
          light
        />

        <div className="mt-16 flex flex-col items-center">
          <div className="z-10 w-64 rounded-[2rem] border-2 border-white/30 bg-white/10 px-10 py-5 text-center shadow-sm backdrop-blur-sm">
            <p className="text-lg font-black uppercase tracking-tighter text-white">{structure.level1.title}</p>
            <p className="mt-1 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-100">{structure.level1.subtitle}</p>
          </div>

          <div className="relative h-10 w-[2px] bg-white/40">
            <div className="absolute -bottom-3 -left-[11px] text-white/40">↓</div>
          </div>

          <div className="z-10 mt-2 w-80 rounded-[2.5rem] border-4 border-white bg-[#ea580c] px-10 py-6 text-center text-white shadow-2xl">
            <p className="text-xl font-black uppercase tracking-tighter">{structure.level2.title}</p>
            <p className="mt-1 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-orange-200">{structure.level2.subtitle}</p>
          </div>

          <div className="relative mt-2 flex h-16 w-full justify-center">
            <div className="absolute top-0 h-8 w-[2px] bg-white/40" />
            <div className="absolute top-8 h-[2px] w-1/2 bg-white/40" />
            <div className="absolute top-8 left-1/4 h-8 w-[2px] bg-white/40">
              <div className="absolute -bottom-3 -left-[11px] text-white/40">↓</div>
            </div>
            <div className="absolute top-8 right-1/4 h-8 w-[2px] bg-white/40">
              <div className="absolute -bottom-3 -left-[11px] text-white/40">↓</div>
            </div>
          </div>

          <div className="flex w-full justify-center gap-4 sm:gap-16">
            {structure.level3.map((item) => {
              const LevelIcon = item.icon
              return (
                <div key={item.title} className="w-1/2 max-w-[280px] rounded-[2rem] border-4 border-white bg-[#001d3d] px-8 py-6 text-center text-white shadow-xl">
                  {LevelIcon ? <LevelIcon className="mx-auto mb-2 text-white/30" size={24} /> : null}
                  <p className="text-base font-black uppercase leading-tight tracking-tighter">{item.title}</p>
                  <p className="mt-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-300">{item.subtitle}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

StudentsCenterStructureSection.propTypes = {
  sectionHeaderComponent: PropTypes.elementType.isRequired,
  structure: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    level1: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    }).isRequired,
    level2: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    }).isRequired,
    level3: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
      }),
    ).isRequired,
  }).isRequired,
}

export default StudentsCenterStructureSection

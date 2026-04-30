import PostgradoSectionHeader from '../../molecules/postgrado/PostgradoSectionHeader'

function DiplomadosRequirementsSection({ section, requirementsIcon: RequirementsIcon, opportunitiesIcon: OpportunitiesIcon }) {
  const CtaIcon = section.ctaIcon

  return (
    <section className="relative overflow-hidden rounded-t-[5rem] bg-[linear-gradient(170deg,#001d3d_0%,#003666_52%,#00447e_100%)] px-6 py-24 text-white md:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 22% 35%, rgba(255,255,255,0.15), transparent 44%), repeating-linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 24px)',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1fr_1.5fr]">
        <div className="self-start lg:sticky lg:top-28">
          <PostgradoSectionHeader tag={section.tag} title={section.title} sub={section.sub} light />

          <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-8 backdrop-blur-md">
            <h4 className="mb-4 flex items-center gap-2 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ea580c]">
              {OpportunitiesIcon ? <OpportunitiesIcon size={16} /> : null}
              {section.profileTitle}
            </h4>
            <p className="text-base font-medium italic leading-relaxed text-blue-100">{section.profileText}</p>
          </div>
        </div>

        <div className="space-y-5">
          {section.items.map((requirement) => (
            <article
              key={requirement}
              className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#ea580c] text-white shadow-lg">
                {RequirementsIcon ? <RequirementsIcon size={16} /> : null}
              </div>
              <p className="text-base font-bold uppercase leading-relaxed tracking-tight text-white">{requirement}</p>
            </article>
          ))}

          <div className="mt-8 flex justify-end">
            <a
              href={section.ctaHref}
              className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d] shadow-xl transition-colors hover:bg-slate-200"
            >
              {section.ctaLabel}
              {CtaIcon ? <CtaIcon size={16} /> : null}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiplomadosRequirementsSection

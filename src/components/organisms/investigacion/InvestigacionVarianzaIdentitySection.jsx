import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'

const InvestigacionVarianzaIdentitySection = ({ identity }) => {
  const MissionIcon = identity.missionIcon

  return (
    <section className="space-y-10">
      <InvestigacionSectionHeader tag="MANIFIESTO" title="IDENTIDAD EDITORIAL" center />

      <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg transition-colors hover:border-[#001d3d] md:p-12">
        <div className="absolute -bottom-10 -right-10 opacity-[0.03] transition-transform duration-700 group-hover:scale-110" aria-hidden="true">
          <MissionIcon size={300} />
        </div>

        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#001d3d] text-white shadow-md">
              <MissionIcon size={28} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#001d3d] md:text-4xl">{identity.missionTitle}</h2>
          </div>

          <p className="border-l-4 border-[#ea580c] py-2 pl-6 text-lg font-medium italic leading-relaxed text-slate-600">
            {identity.mission}
          </p>
        </div>
      </article>

      <div className="grid gap-10 md:grid-cols-2">
        <article className="relative overflow-hidden rounded-[2.5rem] border-b-[8px] border-[#ea580c] bg-[#001d3d] p-10 text-white shadow-lg">
          <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tighter">{identity.visionTitle}</h2>
            <p className="text-base font-medium italic leading-relaxed text-blue-200/90">{identity.vision}</p>
          </div>
        </article>

        <article className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-lg transition-colors hover:border-[#001d3d]">
          <h2 className="mb-4 text-2xl font-black uppercase tracking-tighter text-[#001d3d]">{identity.scopeTitle}</h2>
          <p className="text-base font-medium italic leading-relaxed text-slate-600">{identity.scope}</p>
        </article>
      </div>
    </section>
  )
}

export default InvestigacionVarianzaIdentitySection

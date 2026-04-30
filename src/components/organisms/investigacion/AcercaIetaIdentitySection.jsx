const AcercaIetaIdentitySection = ({ identity }) => {
  const MissionIcon = identity.mission.icon
  const VisionIcon = identity.vision.icon

  return (
    <section id="identidad" className="scroll-mt-32 px-4 md:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2">
        <article className="group relative overflow-hidden rounded-[3rem] border-b-8 border-[#ea580c] bg-[#001d3d] p-10 text-white shadow-2xl transition-colors hover:bg-[#002a52] md:p-14">
          <MissionIcon className="absolute -bottom-10 -right-10 opacity-[0.08]" size={220} aria-hidden="true" />
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-[#ea580c] shadow-lg">
                <MissionIcon size={30} />
              </div>
              <h3 className="text-4xl font-black uppercase leading-none tracking-tighter">
                {identity.mission.title} <span className="text-orange-300">{identity.mission.symbol}</span>
              </h3>
            </div>
            <p className="border-l-2 border-orange-700/40 pl-6 text-base font-medium italic uppercase leading-relaxed tracking-tight text-blue-100 md:text-lg">
              {identity.mission.text}
            </p>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl transition-colors hover:border-[#001d3d] md:p-14">
          <VisionIcon className="absolute -bottom-10 -right-10 opacity-[0.06] text-[#001d3d]" size={220} aria-hidden="true" />
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#001d3d] shadow-sm">
                <VisionIcon size={30} />
              </div>
              <h3 className="text-4xl font-black uppercase leading-none tracking-tighter text-[#001d3d]">
                {identity.vision.title} <span className="text-blue-300">{identity.vision.symbol}</span>
              </h3>
            </div>
            <p className="border-l-2 border-slate-200 pl-6 text-base font-medium italic uppercase leading-relaxed tracking-tight text-slate-600 md:text-lg">
              {identity.vision.text}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AcercaIetaIdentitySection

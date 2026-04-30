function GeneralRequirementsSection({ section, visuals }) {
  const RequirementsIcon = visuals?.requirements

  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl md:p-16">
        <div className="absolute right-0 top-0 p-10 opacity-[0.03]">
          {RequirementsIcon && <RequirementsIcon size={250} className="text-[#001d3d]" />}
        </div>

        <div className="relative z-10 flex flex-col gap-12 md:flex-row">
          <div className="md:w-1/3">
            <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-[#001d3d]">
              {section.title[0]} <br />
              <span className="text-[#ea580c]">{section.title[1]}</span>
            </h3>
            <p className="mb-8 border-l-4 border-[#ea580c] pl-4 text-base font-medium italic leading-relaxed text-slate-500">{section.description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:w-2/3">
            {section.items.map((doc, index) => (
              <div key={doc} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5">
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#001d3d] text-[10px] font-black text-white">{index + 1}</div>
                <span className="text-[11px] font-bold uppercase leading-snug tracking-tight text-slate-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralRequirementsSection

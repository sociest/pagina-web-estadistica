function ElectivesSection({ areas, meta }) {
  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="mb-16 flex items-center gap-5 pl-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-700 shadow-inner">
          <meta.icon size={28} />
        </div>
        <h3 className="text-4xl font-black uppercase leading-tight tracking-tighter text-[#001d3d]">
          {meta.title[0]} <br />
          <span className="text-2xl font-serif italic lowercase tracking-normal text-slate-400">{meta.title[1]}</span>
        </h3>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {areas.map((area) => (
          <article key={area.title} className="rounded-[3rem] border border-slate-200 bg-white p-8 shadow-xl transition-all hover:shadow-2xl md:p-10">
            <div className="mb-8 flex items-center gap-5 border-b border-slate-100 pb-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400"><area.icon size={24} /></div>
              <h4 className="text-xl font-black uppercase tracking-tight text-[#001d3d]">{area.title}</h4>
            </div>
            <div className="space-y-4">
              {area.items.map((item) => (
                <div key={item.id} className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5 transition-all hover:border-orange-200 hover:bg-white sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-black text-[#00447e]">{item.id}</span>
                      <h5 className="text-base font-black uppercase leading-none tracking-tight text-slate-800">{item.n}</h5>
                    </div>
                    <p className="mt-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">Pre: {item.pre}</p>
                  </div>
                  <div className="shrink-0 rounded-xl border border-slate-100 bg-white px-4 py-2 text-[10px] font-black text-slate-400 shadow-sm">
                    <span className="border-r border-slate-200 pr-3">{item.ht}H</span>
                    <span className="pl-3 text-[#ea580c]">{item.cr} CR</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ElectivesSection

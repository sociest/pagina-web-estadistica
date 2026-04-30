function PostgradoElectiveSection({ section }) {
  const SealIcon = section.seal.icon
  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-8 shadow-2xl md:p-14">
        <div className="pointer-events-none absolute right-0 top-0 p-10 opacity-[0.04] text-[#ea580c]">
          <SealIcon size={260} />
        </div>
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" />
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">{section.tag}</span>
          </div>
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-[#002a52] md:text-5xl">{section.title}</h2>
          <p className="max-w-3xl border-l-2 border-slate-200 pl-8 text-base font-medium leading-relaxed italic text-slate-500">{section.sub}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {section.groups.map((group) => {
            const GroupIcon = group.icon
            return (
              <article key={group.title} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#001d3d] text-white shadow-md">
                    <GroupIcon size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-[#001d3d]">{group.title}</h3>
                </div>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.id} className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 transition-colors hover:border-[#00447e]">
                      <div className="mb-1 flex items-center justify-between gap-4">
                        <span className="font-mono text-[11px] font-black text-[#00447e]">{item.id}</span>
                        <span className="rounded-full bg-white px-2 py-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">{item.cr} cred</span>
                      </div>
                      <h4 className="mb-1 text-sm sm:text-base md:text-lg font-black uppercase tracking-tight text-slate-800">{item.name}</h4>
                      <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">Prerequisito: {item.pre}</p>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PostgradoElectiveSection

function PostgradoAdmissionSection({ section }) {
  const NoteIcon = section.note.icon

  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <div className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" />
              <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">{section.tag}</span>
            </div>
            <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-[#002a52] md:text-5xl">{section.title}</h2>
            <p className="max-w-2xl border-l-2 border-slate-200 pl-8 text-base font-medium leading-relaxed italic text-slate-500">{section.sub}</p>
          </div>
          <div className="rounded-[2.5rem] border border-orange-200 bg-orange-50 p-8">
            <NoteIcon className="mb-4 text-orange-700" size={32} />
            <h4 className="mb-2 text-sm font-black uppercase tracking-widest text-orange-900">{section.note.title}</h4>
            <p className="text-base font-medium leading-relaxed italic text-orange-800/80">{section.note.text}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-slate-200" />
          <div className="space-y-10">
            {section.items.map((item) => {
              const ItemIcon = item.icon
              return (
                <article key={item.title} className="group relative flex items-start gap-6">
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-[#f8fafc] bg-white text-slate-400 shadow-md transition-colors group-hover:border-blue-100 group-hover:text-[#00447e]">
                    <ItemIcon size={20} />
                  </div>
                  <div className="flex-1 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 group-hover:border-[#00447e] group-hover:shadow-xl">
                    <h4 className="mb-2 text-lg font-black uppercase tracking-tighter text-[#002a52]">{item.title}</h4>
                    <p className="text-base font-medium leading-relaxed italic text-slate-500">{item.desc}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostgradoAdmissionSection

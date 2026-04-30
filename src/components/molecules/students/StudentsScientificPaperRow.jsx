function StudentsScientificPaperRow({ paper, sectionIcon: SectionIcon }) {
  return (
    <article className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5 transition-colors hover:border-[#001d3d] md:flex-row md:items-center">
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#ea580c] shadow-sm transition-colors group-hover:bg-[#ea580c] group-hover:text-white">
          {SectionIcon ? <SectionIcon size={18} /> : null}
        </div>
        <div>
          <h4 className="mb-1 text-[13px] font-black uppercase leading-tight text-[#002a52]">{paper.title}</h4>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span>{paper.author}</span>
            <span>{paper.year}</span>
          </div>
        </div>
      </div>
      <span className="shrink-0 rounded border border-[#001d3d]/10 bg-[#001d3d]/5 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#001d3d]">
        {paper.tag}
      </span>
    </article>
  )
}

export default StudentsScientificPaperRow

function StudentsScientificJournalCard({ journal }) {
  return (
    <article className="group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-colors hover:bg-white/20">
      <div className="mb-2 flex items-start justify-between gap-4">
        <h4 className="text-xs font-black uppercase tracking-tight text-white">{journal.name}</h4>
        <span className="rounded bg-[#ea580c] px-2 py-0.5 text-xs font-black uppercase tracking-widest text-white">
          {journal.type}
        </span>
      </div>
      <p className="text-[10px] font-medium italic leading-relaxed text-blue-200/80">{journal.desc}</p>
    </article>
  )
}

export default StudentsScientificJournalCard

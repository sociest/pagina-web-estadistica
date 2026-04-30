function StudentsScientificCard({ item }) {
  const ItemIcon = item.icon

  return (
    <article className="group rounded-[2.2rem] border border-slate-100 bg-[#f8fafc] p-7 transition-all hover:-translate-y-1 hover:border-[#001d3d] hover:shadow-lg">
      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-white text-[#ea580c] shadow-sm border border-slate-100 group-hover:bg-[#001d3d] group-hover:text-white transition-colors">
        <ItemIcon size={24} />
      </div>
      <h3 className="mb-2 text-base font-black uppercase tracking-tighter text-[#001d3d]">{item.title}</h3>
      <p className="text-[13px] font-medium italic leading-relaxed text-slate-500">{item.desc}</p>
    </article>
  )
}

export default StudentsScientificCard

const AutoresManuscriptTypeCard = ({ item }) => {
  const Icon = item.icon

  return (
    <article className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#ea580c]">
      <Icon className="mb-4 text-[#001d3d] transition-colors group-hover:text-[#ea580c]" size={24} />
      <h4 className="mb-1 text-[11px] font-black uppercase tracking-widest text-[#001d3d]">{item.label}</h4>
      <p className="text-[9px] font-bold uppercase text-slate-400">{item.desc}</p>
    </article>
  )
}

export default AutoresManuscriptTypeCard

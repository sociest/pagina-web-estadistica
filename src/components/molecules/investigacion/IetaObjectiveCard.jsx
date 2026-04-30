const IetaObjectiveCard = ({ objective }) => {
  const Icon = objective.icon

  return (
    <article className="group rounded-[2.2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#ea580c] hover:shadow-xl">
      <div className="mb-6 flex size-14 items-center justify-center rounded-[1.2rem] border border-slate-100 bg-[#f8fafc] text-[#001d3d] shadow-inner transition-colors group-hover:bg-[#ea580c] group-hover:text-white">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-lg font-black uppercase leading-tight tracking-tight text-[#002a52]">{objective.title}</h3>
      <p className="text-[13px] font-medium italic leading-relaxed text-slate-500">{objective.description}</p>
    </article>
  )
}

export default IetaObjectiveCard

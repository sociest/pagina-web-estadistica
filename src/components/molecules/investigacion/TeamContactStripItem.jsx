const TeamContactStripItem = ({ item }) => {
  const Icon = item.icon

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/85 p-4">
      <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#001d3d] text-white">
        <Icon size={15} />
      </div>
      <div>
        <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#ea580c]">{item.label}</p>
        <p className="text-[11px] font-bold uppercase leading-snug text-slate-600">{item.value}</p>
      </div>
    </div>
  )
}

export default TeamContactStripItem

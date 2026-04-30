const TeamStatPill = ({ item }) => {
  const Icon = item.icon

  return (
    <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
      <div className="mb-1 flex items-center gap-2 text-blue-100">
        <Icon size={14} className="text-[#ea580c]" />
        <span className="text-[9px] font-black uppercase tracking-[0.22em]">{item.label}</span>
      </div>
      <p className="text-2xl font-black uppercase tracking-tighter text-white">{item.value}</p>
    </div>
  )
}

export default TeamStatPill

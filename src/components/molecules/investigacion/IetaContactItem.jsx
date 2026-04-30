const IetaContactItem = ({ item }) => {
  const Icon = item.icon

  return (
    <div className="flex items-start gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
        <Icon size={18} className={item.iconClassName} />
      </div>
      <div>
        <p className="mb-1 text-[11px] font-black uppercase leading-tight text-white">{item.title}</p>
        <p className="text-[10px] font-medium italic text-blue-200/75">{item.detail}</p>
      </div>
    </div>
  )
}

export default IetaContactItem

const VarianzaTabButton = ({ tab, active, onClick }) => {
  const Icon = tab.icon

  return (
    <button
      type="button"
      onClick={() => onClick(tab.id)}
      className={[
        'flex items-center gap-2 rounded-xl px-5 py-3 text-[11px] font-black uppercase tracking-widest transition-all md:text-sm',
        active
          ? 'bg-[#001d3d] text-white shadow-md'
          : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-[#001d3d]',
      ].join(' ')}
    >
      <Icon size={16} className={active ? 'text-[#ea580c]' : ''} />
      {tab.label}
    </button>
  )
}

export default VarianzaTabButton

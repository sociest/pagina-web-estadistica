const RoleChip = ({ children, tone = 'orange' }) => {
  const styles =
    tone === 'orange'
      ? 'bg-[#ea580c] text-white'
      : 'border border-slate-200 bg-white text-slate-500'

  return (
    <span className={`rounded px-3 py-1 text-[9px] font-black uppercase tracking-widest shadow-sm ${styles}`}>
      {children}
    </span>
  )
}

export default RoleChip

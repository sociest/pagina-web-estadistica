function PregradoSectionHeader({ tag, title, sub, light = false }) {
  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <div className={`h-[2px] w-8 ${light ? 'bg-[#ea580c]' : 'bg-[#ea580c]'}`} />
        <span className={`text-xs font-black uppercase tracking-[0.4em] ${light ? 'text-[#ea580c]' : 'text-[#ea580c]'}`}>
          {tag}
        </span>
      </div>
      <h2 className={`mb-4 text-3xl font-black uppercase tracking-tighter leading-tight md:text-4xl ${light ? 'text-white' : 'text-[#00447e]'}`}>
        {title}
      </h2>
      {sub && (
        <p className={`max-w-2xl text-base font-medium leading-relaxed italic ${light ? 'text-white/60' : 'text-slate-500'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}

export default PregradoSectionHeader

function StudentsSectionHeader({ tag, title, sub, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'flex flex-col items-center text-center' : ''}`}>
      <div className={`mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" />
        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#ea580c]">{tag}</span>
        {center ? <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" /> : null}
      </div>
      <h2 className="mb-4 text-3xl font-black uppercase leading-none tracking-tighter text-[#001d3d] md:text-5xl">{title}</h2>
      {sub ? (
        <p
          className={`max-w-2xl text-sm font-medium italic leading-relaxed text-slate-500 md:text-base ${
            center ? 'text-center' : 'rounded-r-xl border-l-4 border-slate-200 bg-white/50 py-2 pl-4'
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  )
}

export default StudentsSectionHeader

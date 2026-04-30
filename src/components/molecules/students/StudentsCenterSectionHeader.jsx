function StudentsCenterSectionHeader({ tag, title, sub, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'flex flex-col items-center text-center' : ''}`}>
      <div className={`mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <div className={`h-[2px] w-8 rounded-full ${light ? 'bg-blue-200' : 'bg-[#ea580c]'}`} />
        <span className={`text-xs font-black uppercase tracking-[0.4em] ${light ? 'text-blue-200' : 'text-[#ea580c]'}`}>{tag}</span>
        {center ? <div className={`h-[2px] w-8 rounded-full ${light ? 'bg-blue-200' : 'bg-[#ea580c]'}`} /> : null}
      </div>
      <h2 className={`mb-4 text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl ${light ? 'text-white' : 'text-[#002a52]'}`}>{title}</h2>
      {sub ? (
        <p className={`max-w-3xl text-sm font-medium italic leading-relaxed md:text-base ${center ? 'text-center' : 'rounded-r-xl border-l-4 pl-4 py-2'} ${light ? 'border-white/20 text-blue-100' : 'border-slate-200 text-slate-500 bg-white/50'}`}>{sub}</p>
      ) : null}
    </div>
  )
}

export default StudentsCenterSectionHeader

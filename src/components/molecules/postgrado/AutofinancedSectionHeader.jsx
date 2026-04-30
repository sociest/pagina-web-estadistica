function AutofinancedSectionHeader({ tag, title, sub, light = false, center = false }) {
  return (
    <div className={`mb-16 ${center ? 'text-center flex flex-col items-center' : ''}`}>
      <div className={`mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <div className={`h-[2px] w-8 rounded-full ${light ? 'bg-orange-500' : 'bg-[#ea580c]'}`} />
        <span className={`text-xs font-black uppercase tracking-[0.4em] ${light ? 'text-orange-400' : 'text-[#ea580c]'}`}>
          {tag}
        </span>
        {center && <div className={`h-[2px] w-8 rounded-full ${light ? 'bg-orange-500' : 'bg-[#ea580c]'}`} />}
      </div>
      <h2 className={`mb-6 text-4xl font-black uppercase leading-none tracking-tighter md:text-5xl ${light ? 'text-white' : 'text-[#002a52]'}`}>
        {title}
      </h2>
      {sub && (
        <p className={`max-w-3xl text-base font-medium leading-relaxed italic ${center ? 'text-center' : 'border-l-2 pl-8'} ${light ? 'border-white/20 text-slate-300' : 'border-slate-200 text-slate-500'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}

export default AutofinancedSectionHeader

const InvestigacionSectionHeader = ({ tag, title, subtitle, light = false, center = false }) => (
  <div className={`mb-12 ${center ? 'flex flex-col items-center text-center' : ''}`}>
    <div className={`mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <div className={`h-[2px] w-8 rounded-full ${light ? 'bg-orange-400' : 'bg-[#ea580c]'}`} />
      <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${light ? 'text-orange-300' : 'text-[#ea580c]'}`}>
        {tag}
      </span>
      {center && <div className={`h-[2px] w-8 rounded-full ${light ? 'bg-orange-400' : 'bg-[#ea580c]'}`} />}
    </div>

    <h2 className={`mb-4 text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl ${light ? 'text-white' : 'text-[#001d3d]'}`}>
      {title}
    </h2>

    {subtitle && (
      <p
        className={[
          'max-w-3xl text-sm font-medium italic leading-relaxed md:text-base',
          center ? 'text-center' : 'rounded-r-xl border-l-4 py-2 pl-4',
          light ? 'border-white/20 bg-white/5 text-slate-300' : 'border-slate-200 bg-white/50 text-slate-500',
        ].join(' ')}
      >
        {subtitle}
      </p>
    )}
  </div>
)

export default InvestigacionSectionHeader

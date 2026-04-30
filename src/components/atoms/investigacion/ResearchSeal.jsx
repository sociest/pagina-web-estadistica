const ResearchSeal = ({ symbol, label, value, className = '' }) => (
  <div
    className={[
      'pointer-events-none select-none opacity-[0.08] z-0 font-mono text-[9px] uppercase tracking-widest text-[#475569]',
      className,
    ].join(' ')}
    aria-hidden="true"
  >
    <div className="flex aspect-square flex-col items-center justify-center rounded-full border border-slate-300 p-4 shadow-inner">
      <span className="text-2xl font-black">{symbol}</span>
      <span className="mt-1 text-[7px] font-bold">{label} = {value}</span>
    </div>
  </div>
)

export default ResearchSeal

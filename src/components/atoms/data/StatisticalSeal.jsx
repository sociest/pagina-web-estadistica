const StatisticalSeal = ({ symbol, label, value, top, left, right, bottom, className = '' }) => (
  <div
    className={`absolute pointer-events-none select-none z-0 font-mono text-sm sm:text-base md:text-lg uppercase tracking-widest text-[#475569] opacity-[0.1] ${className}`}
    style={{ top, left, right, bottom }}
    aria-hidden="true"
  >
    <div className="flex aspect-square flex-col items-center justify-center rounded-full border border-slate-300 p-3 shadow-inner">
      <span className="text-2xl font-black">{symbol}</span>
      <span className="mt-1 text-[7px] font-bold">{label} = {value}</span>
    </div>
  </div>
)

export default StatisticalSeal

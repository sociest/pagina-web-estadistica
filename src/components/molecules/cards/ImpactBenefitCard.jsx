import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'

const ImpactBenefitCard = ({ item, index }) => (
  <article className={`group relative flex w-full flex-col items-center gap-8 rounded-[4rem] border border-slate-100 bg-white p-10 shadow-xl transition-[box-shadow,transform,border-color] duration-300 motion-reduce:transition-none md:flex-row ${index > 0 ? 'md:-mt-20' : ''}`} style={{ zIndex: 30 - index * 10 }}>
    <StatisticalOverlay sigma="1.01" r2="0.93" n="320" />

    <div className="flex size-20 shrink-0 items-center justify-center rounded-[2rem] border border-slate-100 bg-[#f8fafc] text-[#c2410c] shadow-inner transition-colors duration-300 group-hover:bg-[#c2410c] group-hover:text-white">
      <item.icon size={32} />
    </div>

    <div className="relative z-10">
      <h4 className="mb-2 text-xl font-black uppercase tracking-tighter text-[#002a52]">{item.t}</h4>
      <p className="text-sm font-medium italic leading-relaxed text-slate-500">{item.d}</p>
    </div>

    <div className="absolute right-10 top-8 font-mono text-[9px] font-black text-slate-100">VAL_ID: 0{index + 1}</div>
  </article>
)

export default ImpactBenefitCard

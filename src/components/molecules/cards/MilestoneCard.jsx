import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'
import { Sigma } from 'lucide-react'

const MilestoneCard = ({ milestone, index }) => (
  <article className="relative z-10 w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:w-[48%] md:p-6">
    <div className="mb-5 h-40 overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm grayscale md:h-48">
      <img src={milestone.img} className="h-full w-full object-cover contrast-110" alt={milestone.year} />
      <div className="absolute inset-0 bg-[#00447e]/5" />
      <span className="absolute left-10 top-9 text-3xl italic font-black text-white drop-shadow-md">{milestone.year}</span>
    </div>

    <div className="px-2">
      <h4 className="mb-1 text-base font-black uppercase leading-tight tracking-tight text-[#002a52] md:text-lg">{milestone.title}</h4>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{milestone.desc}</p>
    </div>

    <StatisticalOverlay sigma={`${index}.1`} r2="0.98" n="380" />

    <div className="pointer-events-none hidden w-[48%] flex-col gap-4 px-10 opacity-20 md:flex">
      <div className="flex items-center gap-3">
        <Sigma size={14} />
        <div className="h-[1px] flex-1 bg-slate-300" />
        <span className="font-mono text-[9px]">P(X = {index}) = 0.{index + 1}</span>
      </div>
      <div className="flex flex-col gap-1 pl-6">
        <div className="h-[2px] w-8 bg-[#c2410c]" />
        <div className="h-[2px] w-16 bg-slate-300" />
      </div>
    </div>
  </article>
)

export default MilestoneCard

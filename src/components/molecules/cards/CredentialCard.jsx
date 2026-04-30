import { ArrowRight } from 'lucide-react'
import { GaussianCurve, MiniBarChart, TrendLineChart } from '../../atoms/data/StatisticalCharts'
import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'

const chartByIndex = {
  0: GaussianCurve,
  1: MiniBarChart,
  2: TrendLineChart,
}

const CredentialCard = ({ card, index }) => {
  const Chart = chartByIndex[index % 3]

  return (
    <article className="group relative overflow-hidden rounded-[3rem] border border-slate-200 bg-[#f8fafc] p-10 transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none hover:bg-white hover:shadow-2xl">
      <StatisticalOverlay sigma="1.02" r2="0.96" n="380" />
      <Chart color={index % 2 === 0 ? '#00447e' : '#c2410c'} opacity={0.08} />

      <div className="relative z-10">
        <div className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#00447e] shadow-sm transition-colors duration-300 group-hover:bg-[#00447e] group-hover:text-white">
          <card.icon size={26} />
        </div>

        <h4 className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#c2410c]">{card.sub}</h4>
        <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tighter text-[#002a52]">{card.title}</h3>
        <p className="mb-6 inline-block border-b border-slate-200 pb-4 text-xs font-bold uppercase tracking-widest text-slate-400">{card.org}</p>

        <p className="mb-10 text-sm font-medium leading-relaxed text-slate-500">{card.desc}</p>

        <button type="button" className="group/btn flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#00447e] transition-[gap] duration-300 hover:gap-5 motion-reduce:transition-none">
          {card.cta}
          <ArrowRight size={14} className="text-[#c2410c]" />
        </button>
      </div>
    </article>
  )
}

export default CredentialCard

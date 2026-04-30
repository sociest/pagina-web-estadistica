import { GaussianCurve, MiniBarChart, ScatterPlot, TrendLineChart } from '../../atoms/data/StatisticalCharts'
import StatisticalOverlay from '../../atoms/data/StatisticalOverlay'

const chartByIndex = {
  0: GaussianCurve,
  1: MiniBarChart,
  2: TrendLineChart,
  3: ScatterPlot,
}

const ValueCard = ({ value, index }) => {
  const Chart = chartByIndex[index % 4]

  return (
    <article className="group relative overflow-hidden rounded-[3rem] border border-slate-100 bg-[#f8fafc] p-8 transition-[background-color,box-shadow,border-color,transform] duration-300 motion-reduce:transition-none hover:bg-white hover:shadow-2xl md:rounded-[4rem] md:p-10">
      <StatisticalOverlay sigma="1.05" r2="0.94" n="380" />
      <Chart color={value.color} opacity={0.1} />
      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex size-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 motion-reduce:transition-none group-hover:rotate-3 group-hover:scale-110 md:size-16" style={{ background: `${value.color}15` }}>
            <value.icon className="size-7 md:size-8" style={{ color: value.color }} />
          </div>
          <div className="rounded-full px-3 py-1.5 font-mono text-[9px] font-bold" style={{ background: `${value.color}10`, color: value.color }}>
            {value.stat}
          </div>
        </div>
        <h3 className="mb-3 text-xl font-black uppercase tracking-tight md:text-2xl" style={{ color: value.color }}>{value.title}</h3>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-600 md:text-[14px]">{value.description}</p>
      </div>
    </article>
  )
}

export default ValueCard

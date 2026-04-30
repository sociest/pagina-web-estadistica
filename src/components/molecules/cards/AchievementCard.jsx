import { GaussianCurve, MiniBarChart, ScatterPlot, TrendLineChart } from '../../atoms/data/StatisticalCharts'

const chartByIndex = {
  0: TrendLineChart,
  1: MiniBarChart,
  2: GaussianCurve,
  3: ScatterPlot,
}

const chartColorByIndex = {
  0: '#00447e',
  1: '#c2410c',
  2: '#00447e',
  3: '#c2410c',
}

const AchievementCard = ({ item, index }) => {
  const Chart = chartByIndex[index % 4]
  const chartColor = chartColorByIndex[index % 4]

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-[#f8fafc] p-6 transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transition-none hover:border-[#00447e] md:rounded-[3rem] md:p-8">
      <Chart color={chartColor} opacity={0.12} />
      <div className="relative z-10">
        <div className="mb-4 flex size-8 items-center justify-center rounded-xl bg-white text-[#00447e] shadow-sm transition-colors group-hover:bg-[#00447e] group-hover:text-white md:size-10">
          <item.icon size={18} />
        </div>
        <div className="mb-1 text-3xl italic font-black leading-none tracking-tighter text-slate-900 md:text-4xl">
          {item.number}
        </div>
        <h5 className="text-xs font-black uppercase tracking-widest text-[#00447e]">{item.label}</h5>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{item.sublabel}</p>
      </div>
    </article>
  )
}

export default AchievementCard

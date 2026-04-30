import { ArrowRightLeft, History, Target } from 'lucide-react'

function ConvalidationMappingCard({ item }) {
  return (
    <article className="group relative flex flex-col items-center gap-4 rounded-[2rem] border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-[#001d3d] hover:shadow-xl md:flex-row md:gap-6">
      <div className="flex w-full flex-1 flex-col justify-between rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 transition-colors group-hover:bg-slate-50">
        <span className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
          <History size={12} /> Plan origen
        </span>
        <div className="flex min-w-0 items-center gap-3">
          <span className="rounded border border-slate-200 bg-white px-2 py-1 font-mono text-[10px] font-black text-slate-500 shadow-sm">{item.old.id}</span>
          <p className="min-w-0 break-words text-[12px] font-black uppercase leading-tight tracking-tight text-slate-700">{item.old.n}</p>
        </div>
      </div>

      <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-300 transition-all group-hover:border-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white">
        <ArrowRightLeft size={16} />
      </div>

      <div className="flex w-full flex-1 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/50">
        <span className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#001d3d]">
          <Target size={12} /> Plan nuevo
        </span>
        <div className="flex min-w-0 items-center gap-3">
          <span className="rounded border border-[#001d3d] bg-[#001d3d] px-2 py-1 font-mono text-[10px] font-black text-white shadow-sm">{item.new.id}</span>
          <p className="min-w-0 break-words text-[12px] font-black uppercase leading-tight tracking-tight text-[#001d3d]">{item.new.n}</p>
        </div>
      </div>
    </article>
  )
}

export default ConvalidationMappingCard

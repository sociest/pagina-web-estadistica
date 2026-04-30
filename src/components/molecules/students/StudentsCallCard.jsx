function statusStyles(status) {
  if (status === 'Abierta') {
    return 'bg-green-500/20 text-green-300 border-green-500/30'
  }

  if (status === 'Proximamente') {
    return 'bg-blue-400/20 text-blue-200 border-blue-400/30'
  }

  return 'bg-white/10 text-white/55 border-white/20'
}

function StudentsCallCard({
  call,
  viewIcon: ViewIcon,
  downloadIcon: DownloadIcon,
}) {
  const CallIcon = call.icon

  return (
    <article className="group flex flex-col overflow-hidden rounded-[2.3rem] border border-[#001d3d]/10 bg-white shadow-[0_15px_40px_-10px_rgba(0,29,61,0.15)] transition-all duration-500 hover:shadow-[0_24px_46px_-12px_rgba(0,29,61,0.25)] md:flex-row">
      <div className="relative flex flex-col justify-between overflow-hidden bg-[#001d3d] p-8 md:w-1/3 md:p-10">
        <div className="absolute left-0 top-0 h-2 w-full bg-[#ea580c]" />
        <div className="absolute -bottom-8 -left-8 opacity-[0.08] transition-transform duration-700 group-hover:scale-110">
          <CallIcon size={170} className="text-white" />
        </div>

        <div className="relative z-10">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-[#ea580c] text-white shadow-lg">
            <CallIcon size={30} />
          </div>

          <p className="mb-1 text-xs font-black uppercase tracking-[0.3em] text-blue-200">Cierre de postulacion</p>
          <h3 className="text-2xl font-black leading-tight tracking-tight text-white">{call.closeDate}</h3>
        </div>

        <span className={`relative z-10 mt-8 inline-flex w-fit rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-wider ${statusStyles(call.status)}`}>
          {call.status}
        </span>
      </div>

      <div className="relative overflow-hidden bg-white p-8 md:w-2/3 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(0,68,126,0.08)_25%,rgba(0,68,126,0.08)_26%,transparent_27%,transparent_74%,rgba(0,68,126,0.08)_75%,rgba(0,68,126,0.08)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,68,126,0.06)_25%,rgba(0,68,126,0.06)_26%,transparent_27%,transparent_74%,rgba(0,68,126,0.06)_75%,rgba(0,68,126,0.06)_76%,transparent_77%,transparent)] bg-[length:64px_64px]" />
        </div>
        <svg className="pointer-events-none absolute right-0 top-0 h-[150px] w-[300px] opacity-[0.14]" viewBox="0 0 300 150" fill="none" aria-hidden="true">
          <path d="M0 86 Q75 30 150 86 T300 86" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M0 108 Q75 52 150 108 T300 108" stroke="#00447e" strokeWidth="1.2" opacity="0.72" />
        </svg>

        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full bg-[#001d3d]" />
            <span className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">Convocatoria oficial</span>
          </div>

          <h4 className="mb-3 text-2xl font-black uppercase leading-tight tracking-tighter text-[#002a52] transition-colors group-hover:text-[#ea580c] md:text-3xl">{call.title}</h4>
          <p className="mb-6 rounded-r-xl border-l-4 border-slate-200 bg-slate-50 py-3 pl-4 text-sm font-medium italic leading-relaxed text-slate-500">
            {call.desc}
          </p>

          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="mb-1 text-xs font-black uppercase tracking-widest text-slate-400">Publicacion oficial</p>
              <p className="text-xs font-bold text-[#001d3d]">{call.pubDate}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="mb-1 text-xs font-black uppercase tracking-widest text-slate-400">Plazas requeridas</p>
              <p className="text-xs font-bold text-[#001d3d]">{call.plazas} estudiantes</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#001d3d] py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#ea580c]">
              {ViewIcon ? <ViewIcon size={16} /> : null}
              Vista previa
            </button>
            <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-[#001d3d] bg-white py-3.5 text-xs font-black uppercase tracking-widest text-[#001d3d] transition-colors hover:bg-slate-100">
              {DownloadIcon ? <DownloadIcon size={16} /> : null}
              Descargar
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StudentsCallCard

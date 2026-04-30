function toneClasses(tone) {
  if (tone === 'orange') {
    return {
      badge: 'text-[#ea580c] bg-orange-50 border-orange-100',
      icon: 'bg-[#ea580c] text-white',
      action: 'group-hover:bg-[#ea580c] group-hover:text-white',
    }
  }

  if (tone === 'teal') {
    return {
      badge: 'text-teal-700 bg-teal-50 border-teal-100',
      icon: 'bg-teal-700 text-white',
      action: 'group-hover:bg-teal-700 group-hover:text-white',
    }
  }

  return {
    badge: 'text-[#00447e] bg-blue-50 border-blue-100',
    icon: 'bg-[#00447e] text-white',
    action: 'group-hover:bg-[#001d3d] group-hover:text-white',
  }
}

function StudentsInternshipModalityCard({ modality }) {
  const ModalityIcon = modality.icon
  const tones = toneClasses(modality.tone)

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute -right-4 top-0 opacity-[0.06]" aria-hidden="true">
        <ModalityIcon size={130} className="text-[#001d3d]" />
      </div>

      <div className="relative z-10 mb-8">
        <div className={`mb-5 inline-flex size-14 items-center justify-center rounded-2xl shadow-lg ${tones.icon}`}>
          <ModalityIcon size={28} />
        </div>
        <p className={`mb-2 inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-widest ${tones.badge}`}>
          {modality.tag}
        </p>
        <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tighter text-[#001d3d]">
          {modality.title}
        </h3>
        <p className="text-sm font-medium italic leading-relaxed text-slate-500">{modality.desc}</p>
      </div>

      <button
        type="button"
        className={`relative z-10 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 text-xs font-black uppercase tracking-widest text-[#001d3d] transition-colors ${tones.action}`}
      >
        Ver reglamento
      </button>
    </article>
  )
}

export default StudentsInternshipModalityCard

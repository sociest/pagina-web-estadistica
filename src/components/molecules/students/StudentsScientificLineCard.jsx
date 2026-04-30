function toneClasses(tone) {
  if (tone === 'orange') return { icon: 'bg-[#ea580c] text-white', badge: 'text-[#ea580c] bg-orange-50 border-orange-100' }
  if (tone === 'teal') return { icon: 'bg-teal-700 text-white', badge: 'text-teal-700 bg-teal-50 border-teal-100' }
  return { icon: 'bg-[#00447e] text-white', badge: 'text-[#00447e] bg-blue-50 border-blue-100' }
}

function StudentsScientificLineCard({ line }) {
  const LineIcon = line.icon
  const tones = toneClasses(line.tone)

  return (
    <article className="group rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className={`mb-6 inline-flex size-14 items-center justify-center rounded-2xl shadow-lg ${tones.icon}`}>
        <LineIcon size={28} />
      </div>
      <p className={`mb-2 inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-widest ${tones.badge}`}>
        Linea de investigacion
      </p>
      <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tighter text-[#001d3d]">{line.title}</h3>
      <p className="text-sm font-medium italic leading-relaxed text-slate-500">{line.desc}</p>
    </article>
  )
}

export default StudentsScientificLineCard

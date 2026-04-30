function ContactGallerySection({ gallery }) {
  const GalleryIcon = gallery.icon

  return (
    <section className="mx-auto max-w-[1536px] px-4 pb-20 md:px-8">
      <div className="relative overflow-hidden rounded-[3rem] border-t-8 border-[#ea580c] bg-[#001d3d] p-8 shadow-2xl md:rounded-[4rem] md:p-14">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        <svg className="absolute left-0 top-0 h-full w-full opacity-[0.12]" viewBox="0 0 1600 620" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M0 200C300 140 580 220 900 190C1180 164 1380 120 1600 220" stroke="#ea580c" strokeWidth="2.2" />
          <path d="M0 260C300 200 580 280 900 250C1180 224 1380 180 1600 280" stroke="#93c5fd" strokeWidth="1.7" opacity="0.72" />
        </svg>

        <div className="relative z-10 mb-10 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="mb-2 text-3xl font-black uppercase tracking-tighter text-white md:text-4xl">
              {gallery.title[0]} <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{gallery.title[1]}</span>
            </h3>
            <p className="text-base font-medium italic text-blue-200">{gallery.subtitle}</p>
          </div>
          <div className="flex size-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <GalleryIcon size={32} />
          </div>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-3">
          {gallery.items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-xl">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover grayscale contrast-125 opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#001d3d] to-transparent p-6">
                <p className="mb-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ea580c]">{item.sub}</p>
                <h4 className="text-base font-black uppercase leading-tight text-white">{item.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactGallerySection

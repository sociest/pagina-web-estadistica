const AboutCtaSection = ({ accreditation }) => (
  <section className="bg-white px-6 py-20 md:px-10">
    <div className="mx-auto max-w-[900px] text-center">
      <div className="mb-8">
        <accreditation.icon className="mx-auto mb-6 size-16 text-[#00447e]" />
        <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-slate-900 md:text-4xl">{accreditation.title}</h3>
        <p className="mx-auto max-w-[600px] text-base font-medium uppercase tracking-wider text-slate-600">{accreditation.description}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {accreditation.links.map((link, idx) => (
          <a
            key={link.href}
            href={link.href}
            className={idx === 0
              ? 'inline-flex items-center gap-2 rounded-full bg-[#00447e] px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-xl transition-[background-color,transform] duration-300 motion-reduce:transition-none hover:bg-[#002a52] active:scale-95'
              : 'inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-700 shadow-lg transition-[border-color,color,transform] duration-300 motion-reduce:transition-none hover:border-[#00447e] hover:text-[#00447e] active:scale-95'}
          >
            {link.label}
            <link.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default AboutCtaSection

import ContactSectionHeader from '../../molecules/contact/ContactSectionHeader'

function ContactLocationsSection({ sectionData, locations }) {
  return (
    <section id="sedes" className="mx-auto max-w-[1536px] px-4 py-24 md:px-8">
      <ContactSectionHeader
        tag={sectionData.tag}
        title={sectionData.title}
        sub={sectionData.subtitle}
        center
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {locations.map((location) => {
          const LocationIcon = location.icon
          return (
            <article key={location.id} className="group overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-xl">
              <div className="relative h-64 w-full bg-slate-100">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.mapTitle}
                  className="grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className={`flex size-12 items-center justify-center rounded-xl shadow-lg ${location.iconClassName}`}>
                    <LocationIcon size={20} />
                  </div>
                  <div>
                    <p className={`mb-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest ${location.accentClassName}`}>{location.label}</p>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-[#001d3d]">{location.title}</h3>
                  </div>
                </div>

                <div className="space-y-4 text-sm font-medium text-slate-600">
                  {location.details.map((detail) => {
                    const DetailIcon = detail.icon
                    return (
                      <p key={detail.text} className="flex items-start gap-3">
                        <DetailIcon className="mt-0.5 shrink-0 text-slate-400" size={18} />
                        <span>{detail.text}</span>
                      </p>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ContactLocationsSection

import { ArrowUpRight } from 'lucide-react'
import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'

function CareerOutcomesSection({ section }) {
  const featured = section.featured
  const regularCards = section.cards.filter((card) => card.variant !== 'wide')
  const wideCard = section.cards.find((card) => card.variant === 'wide')

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_62%,#eef6ff_100%)] px-6 py-24 md:px-12">
      <svg className="pointer-events-none absolute left-0 top-0 h-[320px] w-[760px] opacity-[0.16]" viewBox="0 0 760 320" fill="none" aria-hidden="true">
        <path d="M0 164 Q190 78 380 164 T760 164" stroke="#00447e" strokeWidth="2.3" />
        <path d="M0 194 Q190 108 380 194 T760 194" stroke="#ea580c" strokeWidth="1.4" opacity="0.72" />
      </svg>
      

      <div className="mx-auto max-w-[1440px]">
        <PregradoSectionHeader tag={section.tag} title={section.title} sub={section.sub} />

        <div className="grid grid-cols-1 gap-4 md:auto-rows-[minmax(220px,auto)] md:grid-cols-4">
          <article className="group relative overflow-hidden rounded-[3rem] bg-[#00447e] p-10 text-white md:col-span-2 md:row-span-2">
            <div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:rotate-12">
              <featured.icon size={150} />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 inline-block rounded-full bg-[#ea580c] px-3 py-1 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest shadow-lg">{featured.badge}</div>
                <h3 className="mb-6 text-3xl font-black uppercase leading-none tracking-tighter">
                  {featured.title} <br />
                  <span className="font-serif text-blue-300 italic lowercase tracking-normal">({featured.subtitle})</span>
                </h3>
                <p className="max-w-sm text-base font-medium italic leading-relaxed text-blue-100">{featured.description}</p>
              </div>
              <button className="group/btn mt-8 flex items-center gap-2 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-[gap] hover:gap-4">
                {featured.ctaLabel}
                <ArrowUpRight className="transition-transform group-hover/btn:translate-x-1" size={14} />
              </button>
            </div>
          </article>

          {regularCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[2.5rem] p-8 transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 ${
                card.variant === 'dark'
                  ? 'border border-white/5 bg-[#001d3d] text-white'
                  : 'border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl'
              }`}
            >
              <div
                className={`mb-6 flex size-10 items-center justify-center rounded-xl ${
                  card.variant === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-[#ea580c] shadow-sm'
                }`}
              >
                <card.icon size={20} />
              </div>
              <h4 className={`mb-2 text-lg font-black uppercase ${card.variant === 'dark' ? 'text-white' : 'text-[#002a52]'}`}>{card.title}</h4>
              <p className={`text-sm md:text-base font-medium leading-relaxed ${card.variant === 'dark' ? 'text-white/70' : 'text-slate-500'}`}>{card.description}</p>
            </article>
          ))}

          {wideCard && (
            <article className="group flex items-center gap-8 rounded-[3rem] bg-slate-100 p-10 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl md:col-span-2">
              <div className="flex size-20 items-center justify-center rounded-3xl bg-white text-[#ea580c] shadow-inner transition-transform group-hover:scale-105">
                <wideCard.icon size={36} />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-xl font-black uppercase text-[#002a52]">{wideCard.title}</h4>
                <p className="text-sm md:text-base font-medium italic leading-relaxed text-slate-500">{wideCard.description}</p>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}

export default CareerOutcomesSection


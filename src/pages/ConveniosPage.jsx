import { useState } from 'react'
import { ArrowRight, BarChart3, Handshake, Landmark, Menu, SearchIcon, Star, Zap } from 'lucide-react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StatisticalSeal from '../components/atoms/data/StatisticalSeal'
import { benefits, conveniosCta, conveniosHero, sectors } from '../services/conveniosData'

function ConveniosPage() {
  const [activeTab, setActiveTab] = useState('publico')
  const activeSector = sectors.find((sector) => sector.id === activeTab)

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-800 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <section className="relative overflow-hidden px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <StatisticalSeal symbol="Sigma" label="TOTAL" value="12+" top="15%" right="5%" className="opacity-[0.12]" />

        <svg className="pointer-events-none absolute left-0 top-0 h-[380px] w-[760px] opacity-[0.14]" viewBox="0 0 760 380" fill="none" aria-hidden="true">
          <path d="M0 180 Q190 80 380 180 T760 180" stroke="#00447e" strokeWidth="2.8" />
          <path d="M0 214 Q190 114 380 214 T760 214" stroke="#c2410c" strokeWidth="1.8" opacity="0.72" />
        </svg>

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-10 rounded-full bg-[#c2410c]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{conveniosHero.eyebrow}</span>
            </div>
            <h2 className="mb-8 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-[#002a52] md:text-6xl">
              {conveniosHero.title[0]} <br />
              <span className="font-serif italic lowercase tracking-tight text-slate-400">{conveniosHero.title[1]}</span> <br />
              {conveniosHero.title[2]}
            </h2>
            <div className="max-w-lg">
              <p className="mb-10 rounded-r-2xl border-l-4 border-[#c2410c] bg-white/30 py-4 pl-6 text-sm font-medium leading-relaxed text-slate-500 shadow-sm md:text-base">
                {conveniosHero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {conveniosHero.chips.map((chip) => (
                  <div key={chip.symbol} className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
                    <span className="font-serif text-2xl italic leading-none text-[#00447e]">{chip.symbol}</span>
                    <span className="text-[9px] font-black uppercase leading-tight tracking-widest text-slate-400">
                      {chip.label} <br />
                      {chip.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-blue-500/5 blur-[80px]" />
            <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white p-4 shadow-2xl">
              <img src={conveniosHero.imageUrl} className="h-[450px] w-full rounded-[3rem] object-cover grayscale-[0.8] brightness-95 contrast-[1.3]" alt="Alianzas Estrategicas" />
              <div className="absolute inset-4 rounded-[3rem] bg-[#00447e]/5" />
              <div className="absolute bottom-12 right-12 flex flex-col items-end text-white drop-shadow-2xl">
                <span className="text-4xl font-black italic tracking-tighter">infty</span>
                <p className="mt-1 border-t border-white/40 pt-1 text-[10px] font-bold uppercase tracking-[0.3em]">Oportunidad Real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 px-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-4 md:justify-start">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveTab(sector.id)}
              className={`flex items-center gap-3 rounded-full border-b-4 px-8 py-3.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === sector.id
                  ? 'scale-105 border-[#c2410c] bg-[#00447e] text-white shadow-2xl'
                  : 'border-transparent bg-white text-slate-400 hover:bg-slate-50'
              }`}
            >
              <sector.icon size={16} />
              {sector.label}
            </button>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[4rem] border-y border-slate-100 bg-white px-6 py-12 shadow-inner md:rounded-[6rem] md:px-10 md:py-24">
        <StatisticalSeal symbol={activeSector.symbol} label="SECTOR" value={activeSector.id.toUpperCase()} bottom="5%" left="5%" className="opacity-[0.12]" />

        <svg className="pointer-events-none absolute -right-16 top-8 h-[260px] w-[760px] opacity-[0.14]" viewBox="0 0 760 260" fill="none" aria-hidden="true">
          <path d="M0 140 Q190 48 380 140 T760 140" stroke="#00447e" strokeWidth="2.8" />
          <path d="M0 172 Q190 80 380 172 T760 172" stroke="#c2410c" strokeWidth="1.8" opacity="0.72" />
        </svg>

        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-center gap-3">
            <div className="h-[2px] w-10 rounded-full bg-[#00447e]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{activeSector.label}</span>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300">
              {activeSector.items.map((item, index) => (
                <article key={item.name} className="group relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-[#f8fafc] p-10 transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-2xl">
                  <div className="absolute right-8 top-6 font-mono text-[10px] font-black uppercase tracking-widest text-slate-200 transition-colors group-hover:text-[#c2410c]">
                    {index + 1}/{activeSector.items.length}
                  </div>
                  <div className="mb-8 flex size-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#00447e] shadow-sm transition-colors group-hover:bg-[#00447e] group-hover:text-white">
                    <Landmark size={28} />
                  </div>
                  <h3 className="mb-4 text-xl font-black uppercase leading-tight tracking-tighter text-[#002a52]">{item.name}</h3>
                  <p className="mb-10 text-sm font-medium leading-relaxed italic text-slate-500">{item.desc}</p>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-6 text-[9px] font-black uppercase tracking-widest text-[#c2410c]">
                    <Handshake size={14} /> Carácter Académico
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f1f5f9] px-6 py-24 md:px-10 md:py-40">
        <svg className="pointer-events-none absolute left-0 top-10 h-[300px] w-[760px] opacity-[0.14]" viewBox="0 0 760 300" fill="none" aria-hidden="true">
          <path d="M0 170 Q190 90 380 170 T760 170" stroke="#00447e" strokeWidth="2.8" />
          <path d="M0 196 Q190 116 380 196 T760 196" stroke="#00447e" strokeWidth="1.8" opacity="0.72" />
          <path d="M0 222 Q190 142 380 222 T760 222" stroke="#c2410c" strokeWidth="1.6" opacity="0.62" />
        </svg>

        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <div>
              <div className="lg:sticky lg:top-40">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-12 bg-[#00447e]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Propuesta de Valor</span>
                </div>
                <h2 className="mb-10 text-4xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-5xl">
                  Beneficios para <br /> <span className="text-[#c2410c]">Estudiantes</span>
                </h2>
                <p className="mb-14 rounded-r-3xl border-l-4 border-slate-200 bg-white/10 py-4 pl-8 text-sm font-medium leading-relaxed text-slate-500 md:text-base">
                  Aprovecha estas oportunidades para potenciar tu desarrollo profesional con experiencia real certificada.
                </p>
                <div className="relative overflow-hidden rounded-[4rem] border-b-[10px] border-[#c2410c] bg-[#002a52] p-10 text-white shadow-2xl">
                  <Zap className="absolute -bottom-10 -right-10 opacity-10" size={160} />
                  <h4 className="mb-4 text-2xl font-black uppercase tracking-tighter">Gestión 2026</h4>
                  <p className="mb-10 text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-blue-100/70">
                    Convenios activos para Pasantías Pre-profesionales y Trabajos Dirigidos de titulación.
                  </p>
                  <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="size-3 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Entorno Profesional Activo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 space-y-10 lg:mt-0">
              {benefits.map((item, index) => (
                <article
                  key={item.title}
                  className={`group relative flex w-full flex-col items-center gap-10 rounded-[3.5rem] border border-slate-100 bg-white p-10 shadow-xl transition-[box-shadow,transform,border-color] duration-300 hover:z-50 hover:shadow-2xl hover:border-[#00447e] md:flex-row ${index > 0 ? 'md:-mt-24' : ''}`}
                  style={{ zIndex: 30 - index * 10 }}
                >
                  <div className="flex size-24 shrink-0 items-center justify-center rounded-[2.5rem] border border-slate-100 bg-[#f8fafc] text-[#c2410c] shadow-inner transition-colors duration-300 group-hover:bg-[#c2410c] group-hover:text-white">
                    <item.icon size={36} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-2xl font-black uppercase leading-none tracking-tighter text-[#002a52]">{item.title}</h4>
                    <p className="text-[13px] font-medium leading-relaxed uppercase tracking-wider italic text-slate-500">{item.description}</p>
                  </div>
                  <div className="absolute right-12 top-10 font-mono text-[16px] font-black uppercase text-slate-100 transition-colors group-hover:text-slate-200">{item.symbol}</div>
                </article>
              ))}

              <div className="pt-16 flex justify-center">
                <div className="w-full rounded-[4rem] border-2 border-dashed border-slate-300 bg-white/60 p-10 text-center backdrop-blur-md transition-colors hover:border-[#00447e]">
                  <span className="mb-6 block text-[11px] font-black uppercase tracking-[0.6em] text-slate-400">Referente Nacional</span>
                  <h5 className="flex flex-wrap items-center justify-center gap-6 text-2xl font-black uppercase tracking-[0.2em] text-[#00447e]">
                    <Star className="text-[#c2410c] transition-transform hover:scale-125" size={32} />
                    {conveniosCta.label}
                    <Star className="text-[#c2410c] transition-transform hover:scale-125" size={32} />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ConveniosPage

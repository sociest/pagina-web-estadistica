import { useState } from 'react'
import {
  ArrowRight,
  Landmark,
  History,
  Star,
  Zap,
} from 'lucide-react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StatisticalSeal from '../components/atoms/data/StatisticalSeal'
import {
  regulationsHero,
  universityFramework,
  internalRegulations,
  resolutionHighlight,
  regulationBenefits,
  regulationsCta,
} from '../services/regulationsData'

function RegulationsPage() {
  const [activeTab, setActiveTab] = useState('academica')
  const currentSector = internalRegulations.find((sector) => sector.id === activeTab) ?? internalRegulations[0]

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-800 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <section className="relative overflow-hidden px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
          <StatisticalSeal symbol="§" label="MARCO" value="LEGAL" top="15%" right="5%" className="opacity-[0.12]" />

          <svg className="pointer-events-none absolute left-0 top-0 h-[380px] w-[760px] opacity-[0.14]" viewBox="0 0 760 380" fill="none" aria-hidden="true">
            <path d="M0 180 Q190 80 380 180 T760 180" stroke="#00447e" strokeWidth="2.8" />
            <path d="M0 214 Q190 114 380 214 T760 214" stroke="#c2410c" strokeWidth="1.8" opacity="0.72" />
          </svg>

          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-10 rounded-full bg-[#c2410c]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{regulationsHero.eyebrow}</span>
              </div>
              <h2 className="mb-8 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-[#002a52] md:text-6xl">
                {regulationsHero.title[0]} <br />
                <span className="font-serif italic lowercase tracking-tight text-slate-400">{regulationsHero.title[1]}</span> <br />
                {regulationsHero.title[2]}
              </h2>
              <div className="max-w-lg">
                <p className="mb-10 rounded-r-2xl border-l-4 border-[#c2410c] bg-white/30 py-4 pl-6 text-sm font-medium leading-relaxed text-slate-500 shadow-sm md:text-base">
                  {regulationsHero.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {regulationsHero.chips.map((chip) => (
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
                <img src={regulationsHero.imageUrl} className="h-[450px] w-full rounded-[3rem] object-cover grayscale-[0.8] brightness-95 contrast-[1.3]" alt="Marco legal" />
                <div className="absolute inset-4 rounded-[3rem] bg-[#00447e]/5" />
                <div className="absolute bottom-12 right-12 flex flex-col items-end text-white drop-shadow-2xl">
                  <span className="text-4xl font-black italic tracking-tighter">≡</span>
                  <p className="mt-1 border-t border-white/40 pt-1 text-[10px] font-bold uppercase tracking-[0.3em]">Transparencia Total</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-2 overflow-hidden rounded-[4rem] bg-[#001d3d] px-6 py-24 shadow-2xl md:mx-4 md:rounded-[6rem] md:px-10 md:py-32">
          <StatisticalSeal symbol="§" label="ART" value="CEUB" top="5%" right="5%" className="opacity-[0.12] text-white" />
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-1 w-12 bg-[#c2410c]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Jerarquia Superior</span>
                </div>
                <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-white md:text-5xl">
                  Marco Normativo <br />
                  Universitario
                </h2>
              </div>
              <p className="text-left text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 md:text-right">
                Sistema Universitario <br />
                Boliviano (CEUB)
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {universityFramework.map((law) => (
                <article
                  key={law.art}
                  className="group rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-[transform,background-color] duration-300 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="mb-10 flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#c2410c] text-white shadow-xl">
                      <law.icon size={24} />
                    </div>
                    <span className="font-mono text-[10px] font-black text-white/20">{law.art}</span>
                  </div>
                  <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">{law.title}</h4>
                  <h3 className="mb-4 h-12 overflow-hidden text-lg font-black uppercase leading-tight tracking-tighter text-white">{law.sub}</h3>
                  <p className="mb-8 text-xs font-medium italic leading-relaxed text-white/40">{law.desc}</p>
                  <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-blue-300 transition-[gap] hover:gap-4">
                    Ver documento <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-24 text-center">
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#c2410c]">Regulaciones de la Carrera</span>
              <h2 className="mt-4 text-4xl font-black uppercase italic leading-none tracking-tighter text-[#002a52] md:text-5xl">Reglamentos Internos</h2>
            </div>

            <div className="mb-16 flex flex-wrap justify-center gap-4">
              {internalRegulations.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 rounded-full border-b-4 px-8 py-3.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'scale-105 border-[#c2410c] bg-[#00447e] text-white shadow-2xl'
                      : 'border-transparent bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {currentSector.items.map((item, index) => (
                <article
                  key={item.name}
                  className={`relative flex flex-col justify-between overflow-hidden rounded-[3rem] border border-slate-100 bg-[#f8fafc] p-8 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl ${
                    index % 2 !== 0 ? 'lg:mt-10' : ''
                  }`}
                >
                  <div className="absolute right-8 top-6 font-mono text-2xl font-black text-slate-100 opacity-40">{currentSector.symbol}</div>
                  <div>
                    <span className="mb-4 block text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
                      {index + 1} / {currentSector.items.length}
                    </span>
                    <h4 className="mb-4 border-b border-slate-100 pb-4 text-base font-black uppercase leading-tight tracking-tighter text-[#002a52]">{item.name}</h4>
                    <p className="text-[11px] font-medium uppercase leading-relaxed tracking-wider text-slate-500">{item.desc}</p>
                  </div>
                  <button className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-[#c2410c] transition-[gap] hover:gap-4">
                    Ver reglamento <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f1f5f9] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="relative overflow-hidden rounded-[4rem] border-b-[12px] border-[#c2410c] bg-[#002a52] p-10 text-white shadow-2xl md:rounded-[6rem] md:p-24">
              <StatisticalSeal symbol="ℜ" label="FUND" value="1972" bottom="-20px" right="-20px" className="text-white/70" />
              <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-1 w-12 bg-[#c2410c]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-200">{resolutionHighlight.eyebrow}</span>
                  </div>
                  <h2 className="mb-8 text-4xl font-black uppercase italic tracking-tighter md:text-6xl">{resolutionHighlight.title}</h2>
                  <p className="mb-12 border-l-2 border-white/20 pl-8 text-base font-medium italic leading-relaxed text-blue-100/70 md:text-lg">
                    {resolutionHighlight.description}
                  </p>
                  <button className="flex items-center gap-4 rounded-full bg-white px-10 py-5 text-xs font-black uppercase tracking-widest text-[#002a52] shadow-xl transition-[background-color,color] hover:bg-[#c2410c] hover:text-white">
                    Explorar resolucion historica <ArrowRight size={20} />
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute -inset-10 rounded-full bg-white/5 blur-3xl" />
                  <div className="relative rounded-[3rem] border-2 border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
                    <img src={resolutionHighlight.imageUrl} className="h-[400px] w-full rounded-[2.5rem] object-cover grayscale opacity-60" alt="Documento historico" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-24 items-center justify-center rounded-full border-4 border-white bg-[#c2410c]/80 shadow-2xl backdrop-blur-md">
                        <History className="text-white" size={40} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="grid items-start gap-16 md:gap-24 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="lg:sticky lg:top-40">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-1 w-12 bg-[#00447e]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Propuesta de Valor</span>
                  </div>
                  <h2 className="mb-10 text-4xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-5xl">
                    Beneficios del <br />
                    <span className="text-[#c2410c]">Marco Normativo</span>
                  </h2>
                  <p className="mb-14 rounded-r-3xl border-l-4 border-slate-200 bg-white/10 py-4 pl-8 text-sm font-medium leading-relaxed text-slate-500 md:text-base">
                    Un sistema normativo robusto mejora la calidad academica, reduce incertidumbre y garantiza procesos transparentes.
                  </p>
                  <div className="relative overflow-hidden rounded-[4rem] border-b-[10px] border-[#c2410c] bg-[#002a52] p-10 text-white shadow-2xl">
                    <Zap className="absolute -bottom-10 -right-10 opacity-10" size={160} />
                    <h4 className="mb-4 text-2xl font-black uppercase tracking-tighter">Gestion 2026</h4>
                    <p className="mb-10 text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-blue-100/70">
                      Actualizacion continua de reglamentos, resoluciones y procedimientos academicos.
                    </p>
                    <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="size-3 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em]">Repositorio vigente</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-12 space-y-10 lg:mt-0">
                {regulationBenefits.map((item, index) => (
                  <article
                    key={item.title}
                    className={`group relative flex w-full flex-col items-center gap-10 rounded-[3.5rem] border border-slate-100 bg-white p-10 shadow-xl transition-[box-shadow,transform,border-color] duration-300 hover:z-50 hover:border-[#00447e] hover:shadow-2xl md:flex-row ${
                      index > 0 ? 'md:-mt-24' : ''
                    }`}
                    style={{ zIndex: 30 - index * 10 }}
                  >
                    <div className="flex size-24 shrink-0 items-center justify-center rounded-[2.5rem] border border-slate-100 bg-[#f8fafc] text-[#c2410c] shadow-inner transition-colors duration-300 group-hover:bg-[#c2410c] group-hover:text-white">
                      <item.icon size={36} />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3 text-2xl font-black uppercase leading-none tracking-tighter text-[#002a52]">{item.title}</h4>
                      <p className="text-[13px] font-medium uppercase tracking-wider text-slate-500">{item.description}</p>
                    </div>
                    <div className="absolute right-12 top-10 font-mono text-[16px] font-black uppercase text-slate-100 transition-colors group-hover:text-slate-200">
                      {item.symbol}
                    </div>
                  </article>
                ))}

                <div className="flex justify-center pt-16">
                  <div className="w-full rounded-[4rem] border-2 border-dashed border-slate-300 bg-white/60 p-10 text-center backdrop-blur-md transition-colors hover:border-[#00447e]">
                    <span className="mb-6 block text-[11px] font-black uppercase tracking-[0.6em] text-slate-400">Referente Nacional</span>
                    <h5 className="flex flex-wrap items-center justify-center gap-6 text-2xl font-black uppercase tracking-[0.2em] text-[#00447e]">
                      <Star className="text-[#c2410c] transition-transform hover:scale-125" size={32} />
                      {regulationsCta.label}
                      <Star className="text-[#c2410c] transition-transform hover:scale-125" size={32} />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RegulationsPage

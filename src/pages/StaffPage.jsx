import { useMemo, useState } from 'react'
import { ArrowRight, Briefcase, GraduationCap, Mail, SearchIcon, ShieldAlert, Sigma, UserCircle, Users } from 'lucide-react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StatisticalSeal from '../components/atoms/data/StatisticalSeal'
import { admins, assistants, staffHero, teachers } from '../services/staffData'

function StaffPage() {
  const [activeTab, setActiveTab] = useState('docentes')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTeachers = useMemo(
    () => teachers.filter((t) => t.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm],
  )
  const filteredAdmins = useMemo(
    () => admins.filter((a) => a.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm],
  )
  const filteredAux = useMemo(
    () => assistants.filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm],
  )

  const emptyState =
    (activeTab === 'docentes' && filteredTeachers.length === 0) ||
    (activeTab === 'administrativos' && filteredAdmins.length === 0) ||
    (activeTab === 'auxiliares' && filteredAux.length === 0)

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white text-slate-800">
      <InstitutionalBackdrop />

      <section className="relative overflow-hidden px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <StatisticalSeal symbol="psi" label="PERSONAL" value="0.94" top="15%" right="5%" className="opacity-[0.12]" />

        <svg className="pointer-events-none absolute left-0 top-0 h-[340px] w-[720px] opacity-[0.12]" viewBox="0 0 720 340" fill="none" aria-hidden="true">
          <path d="M0 190 Q180 80 360 190 T720 190" stroke="#00447e" strokeWidth="2.6" />
          <path d="M0 222 Q180 112 360 222 T720 222" stroke="#c2410c" strokeWidth="1.7" opacity="0.7" />
        </svg>

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-10 rounded-full bg-[#c2410c]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{staffHero.eyebrow}</span>
            </div>

            <h2 className="mb-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-[#002a52] md:text-7xl">
              {staffHero.title[0]} <br />
              <span className="font-serif italic lowercase tracking-tight text-slate-400">{staffHero.title[1]}</span>
            </h2>

            <div className="max-w-lg">
              <p className="mb-10 rounded-r-2xl border-l-4 border-[#c2410c] bg-white/30 py-4 pl-6 text-sm font-medium leading-relaxed text-slate-500 shadow-sm md:text-base">
                {staffHero.description}
              </p>

              <div className="relative group">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-hover:text-[#c2410c]" size={18} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por nombre o especialidad..."
                  className="w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-6 text-xs font-bold uppercase tracking-widest outline-none transition-all focus:ring-2 focus:ring-[#00447e] shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-blue-500/5 blur-[80px]" />
            <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white p-4 shadow-2xl">
              <img src={staffHero.imageUrl} className="h-[450px] w-full rounded-[3rem] object-cover grayscale-[0.8] brightness-90 contrast-[1.3]" alt="Personal UMSA" />
              <div className="absolute inset-4 rounded-[3rem] bg-[#00447e]/5" />
              <div className="absolute bottom-12 right-12 flex flex-col items-end text-white drop-shadow-2xl">
                <span className="text-4xl font-black italic tracking-tighter">omega</span>
                <p className="mt-1 border-t border-white/40 pt-1 text-[10px] font-bold uppercase tracking-[0.3em]">Talento Humano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 px-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] justify-center gap-4 md:justify-start">
          {[
            { id: 'docentes', label: 'Docentes', icon: Users },
            { id: 'administrativos', label: 'Administrativos', icon: Briefcase },
            { id: 'auxiliares', label: 'Auxiliares', icon: GraduationCap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 rounded-full border-b-4 px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.id
                  ? 'scale-105 border-[#c2410c] bg-[#00447e] text-white shadow-2xl'
                  : 'border-transparent bg-white text-slate-400 hover:bg-slate-50'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[4rem] border-y border-slate-100 bg-white px-6 py-12 shadow-inner md:rounded-[6rem] md:px-10 md:py-24">
        <StatisticalSeal symbol="theta" label="RATIO" value="0.92" bottom="5%" left="5%" className="opacity-[0.12]" />

        <svg className="pointer-events-none absolute -right-16 top-8 h-[260px] w-[700px] opacity-[0.12]" viewBox="0 0 700 260" fill="none" aria-hidden="true">
          <path d="M0 140 Q175 48 350 140 T700 140" stroke="#00447e" strokeWidth="2.4" />
          <path d="M0 172 Q175 80 350 172 T700 172" stroke="#c2410c" strokeWidth="1.6" opacity="0.75" />
        </svg>

        <div className="mx-auto max-w-[1440px]">
          {activeTab === 'docentes' && (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredTeachers.map((doc) => (
                <article key={doc.email} className="group relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-[#f8fafc] p-10 transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-2xl">
                  <div className="absolute right-8 top-6 font-mono text-[9px] font-black uppercase tracking-widest text-slate-200 transition-colors group-hover:text-[#c2410c]">r = 0.92</div>
                  <div className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#c2410c] shadow-sm transition-colors group-hover:bg-[#c2410c] group-hover:text-white">
                    <span className="text-xs font-black">{doc.degree}</span>
                  </div>
                  <h3 className="mb-1 text-xl font-black uppercase leading-tight tracking-tighter text-[#002a52]">{doc.name}</h3>
                  <p className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#c2410c]">{doc.role}</p>
                  <div className="mb-10 space-y-3">
                    <p className="border-b border-slate-100 pb-2 text-[9px] font-black uppercase tracking-widest text-slate-400">Especialidades Tecnicas:</p>
                    <div className="flex flex-wrap gap-2">
                      {doc.specs.map((s) => (
                        <span key={s} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[8px] font-bold uppercase italic tracking-tight text-slate-500">sigma {s}</span>
                      ))}
                    </div>
                  </div>
                  <button type="button" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00447e]/5 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#00447e] transition-all hover:bg-[#00447e] hover:text-white">
                    <Mail size={14} /> Enviar Correo
                  </button>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'administrativos' && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {filteredAdmins.map((adm, i) => (
                <article key={`${adm.name}-${i}`} className="group relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-8 text-center transition-[box-shadow,border-color] duration-300 hover:shadow-xl">
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 text-4xl font-black text-[#00447e] opacity-[0.04] transition-opacity group-hover:opacity-[0.12]">{adm.symbol}</div>
                  <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-slate-100 bg-[#f8fafc] text-slate-300 shadow-inner transition-colors group-hover:bg-[#c2410c] group-hover:text-white">
                    <UserCircle size={32} />
                  </div>
                  <h4 className="mb-2 text-sm font-black uppercase leading-tight text-[#002a52]">{adm.name}</h4>
                  <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{adm.role}</p>
                  <button type="button" className="mx-auto flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#c2410c] transition-[gap] duration-300 hover:gap-4">
                    Contactar <ArrowRight size={12} />
                  </button>
                  <div className="absolute bottom-2 right-4 font-mono text-[7px] text-slate-100 transition-colors group-hover:text-slate-200">mu = 85 | sigma = 12</div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'auxiliares' && (
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
              {filteredAux.map((aux, i) => (
                <article key={`${aux.name}-${i}`} className="group relative flex gap-8 overflow-hidden rounded-[4rem] border border-slate-100 bg-white p-10 shadow-xl">
                  <div className="flex size-20 shrink-0 items-center justify-center rounded-[2rem] border border-[#c2410c]/10 bg-[#c2410c]/5 text-[#c2410c] transition-colors duration-300 group-hover:bg-[#c2410c] group-hover:text-white">
                    <GraduationCap size={36} />
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">{aux.stats}</p>
                    <h3 className="mb-1 text-xl font-black uppercase tracking-tighter text-[#002a52]">{aux.name}</h3>
                    <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#c2410c]">{aux.role}</p>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                      <Sigma size={14} className="text-slate-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{aux.course}</span>
                    </div>
                  </div>
                  <div className="absolute right-8 top-4 font-mono text-[8px] font-black italic text-slate-50">INT f(x) dx</div>
                </article>
              ))}
            </div>
          )}

          {emptyState && (
            <div className="py-20 text-center">
              <ShieldAlert className="mx-auto mb-6 text-slate-200" size={60} />
              <p className="text-xl font-black uppercase tracking-widest text-slate-300">No se encontraron resultados</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default StaffPage

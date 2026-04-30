import { useMemo } from 'react'
import { ChevronRight, Download } from 'lucide-react'

function StudyPlanSection({ curriculumData, activeSem, onSelectSem }) {
  const currentSemester = curriculumData[activeSem - 1]

  const totals = useMemo(() => {
    const subjects = currentSemester?.subjects ?? []
    const totalHours = subjects.reduce((acc, item) => acc + item.ht, 0)
    const totalCredits = subjects.reduce((acc, item) => acc + item.cred, 0)
    return { totalHours, totalCredits }
  }, [currentSemester])

  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-2xl lg:flex-row">
        <svg className="pointer-events-none absolute right-0 top-0 h-[260px] w-[520px] opacity-[0.12]" viewBox="0 0 520 260" fill="none" aria-hidden="true">
          <path d="M0 130 Q130 44 260 130 T520 130" stroke="#00447e" strokeWidth="2.2" />
          <path d="M0 160 Q130 74 260 160 T520 160" stroke="#ea580c" strokeWidth="1.4" opacity="0.7" />
        </svg>

        <aside className="w-full border-r border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] p-8 lg:w-72">
          <div>
            <h2 className="mb-8 border-l-4 border-orange-700 pl-4 text-lg font-black uppercase tracking-tighter text-[#001d3d]">Niveles</h2>
            <div className="space-y-2">
              {curriculumData.map((semester) => (
                <button
                  key={semester.sem}
                  onClick={() => onSelectSem(semester.sem)}
                  className={`flex w-full items-center justify-between rounded-2xl border-2 px-6 py-4 text-[11px] font-black uppercase transition-all ${
                    activeSem === semester.sem
                      ? 'scale-105 border-[#001d3d] bg-[#001d3d] text-white shadow-lg'
                      : 'border-slate-100 bg-white text-slate-400 hover:border-slate-300'
                  }`}
                  type="button"
                >
                  Semestre {semester.sem}
                  {activeSem === semester.sem && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ea580c] py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-xl transition hover:bg-orange-800" type="button">
              <Download size={14} /> PDF oficial
            </button>
          </div>
        </aside>

        <div className="flex-1 overflow-x-auto p-8 lg:p-12">
          <div className="mb-10 flex items-center justify-between border-b border-slate-100 pb-8">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-[#001d3d]">Semestre {activeSem}&deg;</h3>
              <p className="mt-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-orange-700">{currentSemester.level}</p>
            </div>
            <div className="flex gap-8 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <div>
                <p className="text-[9px] font-black uppercase text-slate-400">Horas semestre</p>
                <p className="text-xl font-black text-[#001d3d]">{totals.totalHours}</p>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase text-slate-400">Creditos</p>
                <p className="text-xl font-black text-[#ea580c]">{totals.totalCredits}</p>
              </div>
            </div>
          </div>

          <table className="w-full text-left">
            <thead className="rounded-lg bg-slate-50">
              <tr>
                <th className="rounded-l-xl p-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">Sigla</th>
                <th className="p-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">Asignatura</th>
                <th className="p-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">Prerrequisito</th>
                <th className="p-4 text-center text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-orange-700">HP</th>
                <th className="p-4 text-center text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">HNP</th>
                <th className="p-4 text-center text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-blue-800">HT</th>
                <th className="rounded-r-xl p-4 text-center text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">Cred</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentSemester.subjects.map((subject) => (
                <tr key={subject.id} className="transition-colors hover:bg-slate-50/70">
                  <td className="p-4 font-mono text-xs font-black text-blue-900">{subject.id}</td>
                  <td className="p-4">
                    <h5 className="text-base font-black uppercase leading-tight text-slate-800">{subject.n}</h5>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {subject.pre.length > 0 ? subject.pre.map((pre) => (
                        <span key={pre} className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[9px] font-bold uppercase text-slate-500 shadow-sm">
                          {pre}
                        </span>
                      )) : <span className="text-[9px] font-bold uppercase italic tracking-tighter text-slate-300">Sin requisito</span>}
                    </div>
                  </td>
                  <td className="p-4 text-center text-[12px] font-bold text-slate-500">{subject.hp}</td>
                  <td className="p-4 text-center text-[12px] font-bold text-slate-500">{subject.hnp}</td>
                  <td className="p-4 text-center text-[12px] font-black text-blue-800">{subject.ht}</td>
                  <td className="p-4 text-center"><span className="text-[11px] font-black text-slate-500">{subject.cred}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default StudyPlanSection

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Download } from 'lucide-react'
import CurriculumSubjectCard from '../../molecules/pregrado/CurriculumSubjectCard'

function CurriculumGridSection({ curriculumData, flatSubjects, areaLegend, meta }) {
  const [hoverSubject, setHoverSubject] = useState(null)
  const rafRef = useRef(null)
  const hoveredIdRef = useRef(null)
  const emptySet = useMemo(() => new Set(), [])

  const relatedBySubject = useMemo(() => {
    const prereqById = new Map(flatSubjects.map((subject) => [subject.id, subject.pre ?? []]))
    const dependentsById = new Map()

    flatSubjects.forEach((subject) => {
      ;(subject.pre ?? []).forEach((pre) => {
        if (!dependentsById.has(pre)) {
          dependentsById.set(pre, [])
        }
        dependentsById.get(pre).push(subject.id)
      })
    })

    const collectReachable = (startId, edgesMap) => {
      const visited = new Set()
      const stack = [startId]

      while (stack.length) {
        const current = stack.pop()
        const nextNodes = edgesMap.get(current) ?? []

        nextNodes.forEach((node) => {
          if (!visited.has(node)) {
            visited.add(node)
            stack.push(node)
          }
        })
      }

      return visited
    }

    const map = new Map()
    flatSubjects.forEach((subject) => {
      const related = new Set([subject.id])
      collectReachable(subject.id, prereqById).forEach((id) => related.add(id))
      collectReachable(subject.id, dependentsById).forEach((id) => related.add(id))
      map.set(subject.id, related)
    })

    return map
  }, [flatSubjects])

  const relatedSet = hoverSubject ? (relatedBySubject.get(hoverSubject.id) ?? emptySet) : emptySet
  const hasHover = !!hoverSubject

  const handleHover = useCallback((subject) => {
    if (!subject || hoveredIdRef.current === subject.id) return
    hoveredIdRef.current = subject.id

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setHoverSubject((prev) => (prev?.id === subject.id ? prev : subject))
      rafRef.current = null
    })
  }, [])

  const handleLeave = useCallback(() => {
    hoveredIdRef.current = null
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setHoverSubject(null)
      rafRef.current = null
    })
  }, [])

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#001d3d_0%,#00284d_58%,#003560_100%)] py-24 shadow-2xl">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
      <svg className="pointer-events-none absolute right-0 top-0 h-[380px] w-[780px] opacity-[0.18]" viewBox="0 0 780 380" fill="none" aria-hidden="true">
        <path d="M0 188 Q195 86 390 188 T780 188" stroke="#ea580c" strokeWidth="2.5" />
        <path d="M0 226 Q195 124 390 226 T780 226" stroke="#8dc7ff" strokeWidth="1.5" opacity="0.75" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1536px] px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <meta.icon size={16} className="animate-pulse text-orange-600" />
              <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-white/55">{meta.eyebrow}</span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
              {meta.title[0]} <span className="text-blue-300 italic">{meta.title[1]}</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base font-medium italic text-white/60">{meta.interactionHint}</p>
          </div>
          <button className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#001d3d]" type="button">
            <Download size={16} /> Descargar malla
          </button>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          {areaLegend.map((legend) => (
            <div key={legend.label} className="flex items-center gap-3">
              <div className="size-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: legend.color, color: legend.color }} />
              <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-white/65">{legend.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {curriculumData.map((semester) => (
            <div key={semester.sem} className="flex flex-col gap-4">
              <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center text-white backdrop-blur-md">
                <span className="text-xl font-black">{semester.sem}&deg;</span>
                <p className="mt-1 text-[8px] font-black uppercase opacity-40 tracking-widest">Nivel</p>
              </div>
              {semester.subjects.map((subject) => (
                <CurriculumSubjectCard
                  key={subject.id}
                  subject={subject}
                  hasHover={hasHover}
                  isHovered={hoverSubject?.id === subject.id}
                  isRelated={relatedSet.has(subject.id)}
                  onHover={handleHover}
                  onLeave={handleLeave}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurriculumGridSection

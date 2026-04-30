import StudentsCenterSectionHeader from '../../molecules/students/StudentsCenterSectionHeader'
import StudentsScientificLineCard from '../../molecules/students/StudentsScientificLineCard'
import StudentsScientificCard from '../../molecules/students/StudentsScientificCard'

function StudentsScientificResearchSection({ researchLines, studyNodes }) {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-[1536px] px-6 md:px-12">
      <div className="grid gap-8 lg:grid-cols-3">
        {researchLines.map((line) => (
          <StudentsScientificLineCard key={line.title} line={line} />
        ))}
      </div>

      <div className="mt-20 rounded-[3rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
        <StudentsCenterSectionHeader
          tag="Especializacion"
          title="Grupos de estudio estrategicos"
          sub="Nodos de investigacion donde la teoria se convierte en practica con proyectos y experimentacion real."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {studyNodes.map((node) => (
            <StudentsScientificCard key={node.title} item={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentsScientificResearchSection

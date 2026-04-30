import StudentsCallCard from '../../molecules/students/StudentsCallCard'
import StudentsSectionHeader from '../../molecules/students/StudentsSectionHeader'

function StudentsCallsListSection({ calls, viewIcon, downloadIcon }) {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <StudentsSectionHeader
          tag="Oportunidades"
          title="Convocatorias vigentes"
          sub="Revisa detalle de plazas, fechas de cierre y documentos oficiales para cada proceso de seleccion."
        />

        <div className="mt-12 grid grid-cols-1 gap-10">
          {calls.map((call) => (
            <StudentsCallCard key={call.id} call={call} viewIcon={viewIcon} downloadIcon={downloadIcon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentsCallsListSection

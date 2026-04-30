import StudentsInternshipModalityCard from '../../molecules/students/StudentsInternshipModalityCard'

function StudentsInternshipsModalitiesSection({ modalities }) {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-[1536px] px-6 md:px-12">
      <div className="grid gap-8 lg:grid-cols-3">
        {modalities.map((modality) => (
          <StudentsInternshipModalityCard key={modality.title} modality={modality} />
        ))}
      </div>
    </section>
  )
}

export default StudentsInternshipsModalitiesSection

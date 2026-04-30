import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AcademicCalendarSection from '../components/organisms/pregrado/AcademicCalendarSection'
import {
  curriculumCalendarMeta,
  eventTypeStyles,
  examSessionData,
  regularCourseData,
  specialEnrollmentNote,
} from '../services/pregradoCurriculumData'

function PregradoAcademicCalendarPage() {
  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-16 pb-24 pt-16">
        <AcademicCalendarSection
          calendarMeta={curriculumCalendarMeta}
          examSessionData={examSessionData}
          regularCourseData={regularCourseData}
          eventTypes={eventTypeStyles}
          specialNote={specialEnrollmentNote}
        />
      </div>
    </div>
  )
}

export default PregradoAcademicCalendarPage

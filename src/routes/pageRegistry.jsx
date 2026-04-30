import AboutPage from '../pages/AboutPage'
import AccreditationPage from '../pages/AccreditationPage'
import AuthoritiesPage from '../pages/AuthoritiesPage'
import LandingPage from '../pages/LandingPage'
import NotFoundPage from '../pages/NotFoundPage'
import ConveniosPage from '../pages/ConveniosPage'
import PregradoAcademicCalendarPage from '../pages/PregradoAcademicCalendarPage'
import PregradoAdmissionsPage from '../pages/PregradoAdmissionsPage'
import PregradoConvalidationsPage from '../pages/PregradoConvalidationsPage'
import PregradoCurriculumPage from '../pages/PregradoCurriculumPage'
import PregradoGraduationPage from '../pages/PregradoGraduationPage'
import PregradoProfessionalProfilePage from '../pages/PregradoProfessionalProfilePage'
import PostgradoTerminalPage from '../pages/PostgradoTerminalPage'
import PostgradoAutofinanciadaPage from '../pages/PostgradoAutofinanciadaPage'
import PostgradoDiplomadosPage from '../pages/PostgradoDiplomadosPage'
import RegulationsPage from '../pages/RegulationsPage'
import StaffPage from '../pages/StaffPage'
import StudentsProceduresPage from '../pages/StudentsProceduresPage'
import StudentsCenterPage from '../pages/StudentsCenterPage'
import StudentsCallsPage from '../pages/StudentsCallsPage'
import StudentsInternshipsPage from '../pages/StudentsInternshipsPage'
import StudentsScientificSocietyPage from '../pages/StudentsScientificSocietyPage'
import ContactPage from '../pages/ContactPage'
import InvestigacionAcercaIetaPage from '../pages/InvestigacionAcercaIetaPage'
import InvestigacionPersonalPage from '../pages/InvestigacionPersonalPage'
import InvestigacionProyectosPage from '../pages/InvestigacionProyectosPage'
import InvestigacionRevistaVarianzaPage from '../pages/InvestigacionRevistaVarianzaPage'
import InvestigacionAutoresVarianzaPage from '../pages/InvestigacionAutoresVarianzaPage'
import InvestigacionServiciosPage from '../pages/InvestigacionServiciosPage'
import InvestigacionContactoPage from '../pages/InvestigacionContactoPage'
import RecursosBibliotecaPage from '../pages/RecursosBibliotecaPage'

export const pageRegistry = [
  { path: '/', component: LandingPage },
  { path: '/inicio', component: LandingPage },
  { path: '/institucional/acerca', component: AboutPage },
  { path: '/institucional/acreditacion', component: AccreditationPage },
  { path: '/institucional/autoridades', component: AuthoritiesPage },
  { path: '/institucional/docentes', component: StaffPage },
  { path: '/institucional/convenios', component: ConveniosPage },
  { path: '/institucional/reglamentos', component: RegulationsPage },
  { path: '/postgrado', component: PostgradoTerminalPage },
  { path: '/postgrado/maestria-terminal', component: PostgradoTerminalPage },
  { path: '/postgrado/maestria-autofinanciada', component: PostgradoAutofinanciadaPage },
  { path: '/postgrado/autofinanciada', component: PostgradoAutofinanciadaPage },
  { path: '/postgrado/diplomados-especialidades', component: PostgradoDiplomadosPage },
  { path: '/postgrado/diplomados', component: PostgradoDiplomadosPage },
  { path: '/estudiantes/guia-seguimiento-tramites', component: StudentsProceduresPage },
  { path: '/estudiantes/tramites', component: StudentsProceduresPage },
  { path: '/estudiantes/centro-estudiantes', component: StudentsCenterPage },
  { path: '/estudiantes/convocatorias-auxiliaturas', component: StudentsCallsPage },
  { path: '/estudiantes/auxiliaturas', component: StudentsCallsPage },
  { path: '/estudiantes/pasantias-bolsa-trabajo', component: StudentsInternshipsPage },
  { path: '/estudiantes/pasantias', component: StudentsInternshipsPage },
  { path: '/estudiantes/sociedad-cientifica', component: StudentsScientificSocietyPage },
  { path: '/estudiantes/sociedades-cientificas', component: StudentsScientificSocietyPage },
  { path: '/investigacion/acerca-ieta', component: InvestigacionAcercaIetaPage },
  { path: '/investigacion/ieta', component: InvestigacionAcercaIetaPage },
  { path: '/institucional/ieta', component: InvestigacionAcercaIetaPage },
  { path: '/investigacion/personal', component: InvestigacionPersonalPage },
  { path: '/institucional/ieta/personal', component: InvestigacionPersonalPage },
  { path: '/investigacion/proyectos', component: InvestigacionProyectosPage },
  { path: '/institucional/ieta/proyectos', component: InvestigacionProyectosPage },
  { path: '/investigacion/revista-varianza', component: InvestigacionRevistaVarianzaPage },
  { path: '/investigacion/autores-varianza', component: InvestigacionAutoresVarianzaPage },
  { path: '/investigacion/servicios', component: InvestigacionServiciosPage },
  { path: '/investigacion/contacto', component: InvestigacionContactoPage },
  { path: '/recursos/biblioteca', component: RecursosBibliotecaPage },
  { path: '/contacto', component: ContactPage },
  { path: '/pregrado/perfil-profesional', component: PregradoProfessionalProfilePage },
  { path: '/pregrado/malla-curricular', component: PregradoCurriculumPage },
  { path: '/pregrado/calendario-academico', component: PregradoAcademicCalendarPage },
  { path: '/pregrado/admisiones', component: PregradoAdmissionsPage },
  { path: '/pregrado/convalidaciones', component: PregradoConvalidationsPage },
  { path: '/pregrado/modalidades-graduacion', component: PregradoGraduationPage },
]

// Planned paths for upcoming screens. Add real page components as they are created.
export const futureRouteBacklog = [
  '/institucional/transparencia',
]

export function resolvePageByPath(pathname) {
  const found = pageRegistry.find((entry) => entry.path === pathname)
  return found?.component ?? NotFoundPage
}

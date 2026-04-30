import { Navigate, Route, Routes } from 'react-router-dom'
import AppTemplate from '../components/templates/AppTemplate.jsx'
import HomePage from '../pages/HomePage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import PostgradoDiplomadosPage from '../pages/PostgradoDiplomadosPage.jsx'
import StudentsProceduresPage from '../pages/StudentsProceduresPage.jsx'
import StudentsCenterPage from '../pages/StudentsCenterPage.jsx'
import StudentsCallsPage from '../pages/StudentsCallsPage.jsx'
import StudentsInternshipsPage from '../pages/StudentsInternshipsPage.jsx'
import StudentsScientificSocietyPage from '../pages/StudentsScientificSocietyPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'

/**
 * Central route registry for the application.
 *
 * Keep this file small and declarative so future pages can be added without coupling routing,
 * layouts, or content concerns in a single component.
 *
 * @returns {JSX.Element} Route tree for the public application.
 */
function AppRouter() {
  return (
    <Routes>
      <Route element={<AppTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="/postgrado/diplomados-especialidades" element={<PostgradoDiplomadosPage />} />
        <Route path="/postgrado/diplomados" element={<PostgradoDiplomadosPage />} />
        <Route path="/estudiantes/guia-seguimiento-tramites" element={<StudentsProceduresPage />} />
        <Route path="/estudiantes/tramites" element={<StudentsProceduresPage />} />
        <Route path="/estudiantes/centro-estudiantes" element={<StudentsCenterPage />} />
        <Route path="/estudiantes/convocatorias-auxiliaturas" element={<StudentsCallsPage />} />
        <Route path="/estudiantes/auxiliaturas" element={<StudentsCallsPage />} />
        <Route path="/estudiantes/pasantias-bolsa-trabajo" element={<StudentsInternshipsPage />} />
        <Route path="/estudiantes/pasantias" element={<StudentsInternshipsPage />} />
        <Route path="/estudiantes/sociedad-cientifica" element={<StudentsScientificSocietyPage />} />
        <Route path="/estudiantes/sociedades-cientificas" element={<StudentsScientificSocietyPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
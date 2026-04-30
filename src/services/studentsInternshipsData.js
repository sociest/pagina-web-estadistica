import {
  Activity,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  FileSearch,
  FileSignature,
  GraduationCap,
  Search,
  Send,
  ShieldCheck,
  Sigma,
  Target,
} from 'lucide-react'

export const studentsInternshipsHero = {
  eyebrow: 'Vinculacion laboral y titulacion',
  title: ['Gestion de Pasantias y', 'Practicas Pre-Profesionales'],
  description:
    'Conecta tu formacion estadistica con instituciones publicas y privadas. Encuentra plazas activas, requisitos y rutas de postulacion.',
  leftShape: Sigma,
  rightShape: Building2,
}

export const studentsInternshipModalities = [
  {
    title: 'Pasantia de Grado',
    tag: 'Titulacion directa',
    icon: GraduationCap,
    desc: 'Modalidad para obtener licenciatura cumpliendo horas de practica en analisis de datos bajo supervision academica.',
    tone: 'blue',
  },
  {
    title: 'Pasantia Pre-Profesional',
    tag: 'Experiencia laboral',
    icon: Briefcase,
    desc: 'Practicas por convenio para fortalecer experiencia en el mercado antes del egreso.',
    tone: 'teal',
  },
  {
    title: 'Trabajo Dirigido',
    tag: 'Proyecto institucional',
    icon: Target,
    desc: 'Desarrollo de proyectos de mejora estadistica dentro de instituciones aliadas con tutorias mixtas.',
    tone: 'orange',
  },
]

export const studentsInternshipProcess = [
  {
    id: 1,
    title: 'Postulacion',
    desc: 'Selecciona una plaza del banco de ofertas o presenta carta de aceptacion externa.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Habilitacion',
    desc: 'Kardex valida avance academico minimo segun reglamento vigente.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Convenio',
    desc: 'Firma tripartita entre UMSA, institucion receptora y estudiante.',
    icon: FileSignature,
  },
  {
    id: 4,
    title: 'Ejecucion',
    desc: 'Desarrollo de actividades estadisticas y reportes periodicos de avance.',
    icon: Activity,
  },
  {
    id: 5,
    title: 'Defensa',
    desc: 'Informe final y defensa ante tribunal cuando aplique titulacion.',
    icon: Award,
  },
]

export const studentsInternshipOffers = [
  {
    id: 'ine-demografia',
    company: 'Instituto Nacional de Estadistica (INE)',
    role: 'Pasante en Analisis Demografico',
    area: 'Sector Publico',
    reqs: '8vo semestre, manejo de SPSS y R.',
    type: 'Trabajo Dirigido / Grado',
    date: 'Hasta el 30 de Nov, 2026',
  },
  {
    id: 'bnb-riesgos',
    company: 'Banco Nacional de Bolivia (BNB)',
    role: 'Asistente de Riesgos y Credit Scoring',
    area: 'Finanzas',
    reqs: '7mo semestre, SQL, Python y modelos logisticos.',
    type: 'Pre-Profesional',
    date: 'Hasta el 15 de Dic, 2026',
  },
  {
    id: 'mefp-economia',
    company: 'Ministerio de Economia',
    role: 'Analista de Datos Economicos',
    area: 'Gobierno',
    reqs: 'Egresado, econometria y series de tiempo.',
    type: 'Trabajo Dirigido',
    date: 'Hasta el 05 de Ene, 2027',
  },
]

export const studentsInternshipRequirements = [
  'Matricula universitaria de la gestion actual (fotocopia simple).',
  'Record academico actualizado con materias vencidas.',
  'Carta de solicitud dirigida a Direccion de Carrera.',
  'Plan de trabajo inicial firmado por tutor institucional.',
]

export const studentsInternshipDocuments = [
  {
    title: 'Formato de Informe Mensual',
    desc: 'Plantilla oficial para reporte de actividades.',
    icon: ClipboardList,
    tone: 'blue',
  },
  {
    title: 'Guia de Informe Final',
    desc: 'Estructura requerida para defensa de pasantia.',
    icon: FileSignature,
    tone: 'orange',
  },
  {
    title: 'Reglamento de Pasantias',
    desc: 'Normativa oficial sobre practicas pre-profesionales.',
    icon: ShieldCheck,
    tone: 'slate',
  },
]

export const studentsInternshipTestimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Analista Junior - INE Bolivia',
    quote:
      'La pasantia me permitio aplicar modelos de regresion y muestreo complejo en proyectos nacionales.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Lucia Vargas',
    role: 'Data Scientist - Banca Privada',
    quote:
      'El trabajo dirigido fue decisivo para mi insercion laboral y consolidacion profesional.',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
  },
]

export const studentsInternshipMapNodes = [
  { label: 'INE La Paz', x: '32%', y: '28%', color: '#ea580c' },
  { label: 'Min. Economia', x: '72%', y: '61%', color: '#00447e' },
  { label: 'Banca Privada', x: '51%', y: '45%', color: '#0f766e' },
]

export const studentsInternshipUi = {
  reqCheckIcon: CheckCircle2,
  searchIcon: Search,
  downloadIcon: Download,
  postulateIcon: Send,
  viewIcon: Eye,
  formatIcon: FileSearch,
}

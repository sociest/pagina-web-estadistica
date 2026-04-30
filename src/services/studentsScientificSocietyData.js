import {
  Award,
  BadgeCheck,
  BookMarked,
  Briefcase,
  Cpu,
  Database,
  FileSignature,
  HeartPulse,
  Layers,
  Lightbulb,
  Network,
  Search,
  Sigma,
  Terminal,
  Users,
  CalendarDays,
  ClipboardList,
  FileSearch,
} from 'lucide-react'

export const studentsScientificHero = {
  eyebrow: 'Investigacion y desarrollo',
  title: ['Sociedad Cientifica de', 'Estudiantes de Estadistica'],
  description:
    'El nucleo donde las ideas se transforman en investigaciones, papers y proyectos con impacto real en Bolivia.',
  ctaLabel: 'Unirme a la proxima convocatoria',
  icon: Lightbulb,
  leftShape: Sigma,
  rightShape: Users,
}

export const researchLines = [
  {
    title: 'Ciencia de Datos Aplicada',
    desc: 'Modelado predictivo, machine learning y mineria de datos para resolver problemas complejos.',
    icon: Database,
    tone: 'blue',
  },
  {
    title: 'Estadistica Social y Demografica',
    desc: 'Analisis de censos, encuestas de hogares y proyecciones para politicas publicas.',
    icon: Users,
    tone: 'orange',
  },
  {
    title: 'Bioestadistica',
    desc: 'Colaboracion en salud publica, epidemiologia y analisis estadistico de ensayos clinicos.',
    icon: HeartPulse,
    tone: 'teal',
  },
]

export const studyNodes = [
  {
    title: 'Nodo R & Python',
    tag: 'Programacion',
    desc: 'Automatizacion de procesos, web scraping y visualizacion de datos dinamica.',
    icon: Terminal,
  },
  {
    title: 'Metodos Bayesianos',
    tag: 'Inferencia avanzada',
    desc: 'Estadistica bayesiana, simulacion MCMC y modelos probabilisticos.',
    icon: Sigma,
  },
  {
    title: 'Laboratorio de Mineria',
    tag: 'Inteligencia artificial',
    desc: 'Clasificacion, clustering y redes neuronales para exploracion de datos.',
    icon: Cpu,
  },
]

export const benefits = [
  {
    title: 'Certificaciones',
    desc: 'Certificados avalados por la Carrera y la FCPN.',
    icon: BadgeCheck,
  },
  {
    title: 'Publicaciones',
    desc: 'Articulos para revistas cientificas indexadas.',
    icon: BookMarked,
  },
  {
    title: 'Eventos exclusivos',
    desc: 'Congresos, hackatones y ferias de ciencia nacionales.',
    icon: CalendarDays,
  },
  {
    title: 'Networking pro',
    desc: 'Conexion con investigadores y profesionales del area.',
    icon: Network,
  },
]

export const admissionSteps = [
  {
    id: 1,
    title: 'Convocatoria',
    desc: 'Publicacion anual de nuevos miembros investigadores.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Postulacion',
    desc: 'Carta de interes y record academico.',
    icon: FileSignature,
  },
  {
    id: 3,
    title: 'Entrevista',
    desc: 'Reunion con la directiva para conocer aptitudes.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Induccion',
    desc: 'Asignacion a un grupo activo de investigacion.',
    icon: Award,
  },
]

export const papers = [
  {
    id: 'PUB-001',
    title: 'Prediccion de desercion estudiantil usando Random Forest',
    author: 'Nodo R & Python',
    year: '2025',
    tag: 'Ciencia de Datos',
  },
  {
    id: 'PUB-002',
    title: 'Analisis Bayesiano de la inflacion interanual en Bolivia',
    author: 'Grupo Bayesiano',
    year: '2024',
    tag: 'Econometria',
  },
  {
    id: 'PUB-003',
    title: 'Impacto sociodemografico post-censo 2024 en La Paz',
    author: 'Linea Demografica',
    year: '2025',
    tag: 'Estadistica Social',
  },
  {
    id: 'PUB-004',
    title: 'Clustering de patologias respiratorias en zonas de altitud',
    author: 'Linea Bioestadistica',
    year: '2023',
    tag: 'Salud Publica',
  },
]

export const journals = [
  {
    name: 'Revista Varianza',
    desc: 'Publicacion oficial del IETA - UMSA.',
    type: 'UMSA',
  },
  {
    name: 'Revista de Ciencias Puras',
    desc: 'Divulgacion cientifica de la FCPN.',
    type: 'FCPN',
  },
  {
    name: 'Data Science Journal (BO)',
    desc: 'Revista boliviana de analitica avanzada e IA.',
    type: 'Nacional',
  },
]

export const societyTestimonials = [
  {
    name: 'Sofia Fernandez',
    role: 'Investigadora estudiante',
    quote:
      'El grupo me dio disciplina, metodo y apoyo para convertir mi interes en un articulo real.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Diego Huanca',
    role: 'Miembro de la SCEE',
    quote:
      'La Sociedad Cientifica me permitio trabajar con datos reales y aprender a comunicar resultados con rigor.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
]

export const societyMapNodes = [
  { label: 'INE La Paz', x: '28%', y: '30%', color: '#ea580c' },
  { label: 'FCPN', x: '62%', y: '58%', color: '#00447e' },
  { label: 'Banca Privada', x: '48%', y: '42%', color: '#0f766e' },
]

export const societyUi = {
  sectionIcon: FileSearch,
  downloadIcon: Layers,
}

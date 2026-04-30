import {
  BarChart3,
  Database,
  Layers,
  Award,
  ClipboardCheck,
  CheckCircle2
} from 'lucide-react'

export const serviciosIetaHero = {
  tag: 'Soluciones para el Desarrollo Social',
  title: ['Asistencia Técnica y', 'Educación de Élite'],
  subtitle: 'Unidad especializada del Instituto de Estadística Teórica y Aplicada (IETA) dedicada al procesamiento de datos, consultoría metodológica y formación profesional continua.',
  stats: [
    { label: 'Confianza', value: '95%' },
    { label: 'Muestra', value: 'N = Institucional' }
  ]
}

export const serviciosConsultoria = [
  {
    id: 'cons',
    title: 'Consultoría Estadística Integral',
    icon: BarChart3,
    desc: 'Diseño científico de mediciones. Ideal para instituciones que necesitan respaldo metodológico en sus indicadores.',
    features: ['Diseño de encuestas y muestreo', 'Determinación de tamaños de muestra', 'Elaboración de marcos muestrales', 'Auditoría y validación de datos']
  },
  {
    id: 'proc',
    title: 'Procesamiento y Análisis de Datos',
    icon: Database,
    desc: 'Limpieza y modelado avanzado. Enfocado a organizaciones que poseen datos pero requieren interpretación experta.',
    features: ['Data Cleaning (Limpieza)', 'Análisis Multivariado', 'Modelamiento Predictivo', 'Tabulación y Visualización']
  },
  {
    id: 'log',
    title: 'Apoyo Técnico y Logístico',
    icon: Layers,
    desc: 'Organización de operativos de campo. Supervisión de encuestas a nivel nacional con personal capacitado.',
    features: ['Operativos de campo nacionales', 'Supervisión técnica de encuestas', 'Soporte en infraestructura', 'Capacitación de encuestadores']
  }
]

export const serviciosRigorCientifico = {
  title: ['Rigor Científico', 'UMSA'],
  description: 'A diferencia de consultoras comerciales, el IETA ofrece el respaldo académico de la Facultad de Ciencias Puras y Naturales, garantizando resultados con validez estadística real para auditorías y toma de decisiones críticas.',
  highlights: [
    { label: 'Metodologías ISI / Indexadas', icon: Award, color: 'text-[#ea580c]' },
    { label: 'Informes con Validez de Certificación', icon: ClipboardCheck, color: 'text-green-400' }
  ],
  capacities: [
    { label: 'Diseño Muestral', value: '100% Riguroso', color: 'text-green-400' },
    { label: 'Minería de Datos', value: 'Soporte IA', color: 'text-green-400' },
    { label: 'Auditoría de Bases', value: 'Data Cleaning', color: 'text-green-400' },
    { label: 'Proyecciones', value: 'Econometría', color: 'text-yellow-400' }
  ]
}

export const serviciosCursos = [
  {
    id: 1,
    title: 'Análisis de Datos con R-Studio (Nivel Avanzado)',
    date: '15 de Mayo, 2025',
    duration: '40 Horas Académicas',
    status: 'Inscripciones Abiertas',
    price: '450 BOB',
    software: ['R', 'Tidyverse'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Econometría Aplicada con Stata',
    date: '02 de Junio, 2025',
    duration: '30 Horas Académicas',
    status: 'Próximamente',
    price: '500 BOB',
    software: ['Stata'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
]

export const serviciosSoftwareStack = [
  { name: 'R-Studio', color: 'text-blue-600' },
  { name: 'Python', color: 'text-yellow-600' },
  { name: 'Stata', color: 'text-blue-800' },
  { name: 'SPSS', color: 'text-red-700' },
  { name: 'Excel Avanzado', color: 'text-green-700' }
]

export const serviciosAreasExperticia = [
  'Encuestas Complejas', 
  'Series de Tiempo', 
  'Geoestadística', 
  'Machine Learning'
]

export const serviciosCta = {
  tag: 'Paso final',
  title: 'Impulsa tu Proyecto con Ciencia de Datos',
  subtitle: 'Transforma tus interrogantes institucionales en soluciones estadísticas validadas.'
}

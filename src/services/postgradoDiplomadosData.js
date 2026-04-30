import {
  Activity,
  Award,
  BookOpen,
  Briefcase,
  CheckSquare,
  Clock,
  Code,
  CreditCard,
  FileSearch,
  Filter,
  Monitor,
  Sigma,
  Binary,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'

export const diplomadosHero = {
  eyebrow: 'Programas de certificacion corta',
  title: ['Diplomados y', 'Especialidades'],
  description:
    'Oferta de actualizacion profesional orientada a analitica aplicada, investigacion y toma de decisiones en contextos reales.',
  highlights: ['Convocatorias vigentes', 'Modalidad flexible', 'Enfoque estadistico'],
  iconLeft: Sigma,
  iconRight: Binary,
}

export const diplomadosFilters = ['Todos', 'Tecnologia', 'Salud', 'Economia', 'Social']

export const diplomadosPrograms = [
  {
    id: 'dip-data-science',
    title: 'Ciencia de Datos con R y Python',
    area: 'Tecnologia',
    desc: 'Especializacion en lenguajes lideres para analisis masivo de datos y visualizacion interactiva.',
    duration: '4 meses',
    modality: 'Virtual / Sincronica',
    badge: 'Convocatoria vigente',
    badgeTone: 'open',
    icon: Code,
    details: {
      objective:
        'Proporcionar competencias para manejo, limpieza, analisis y visualizacion de datos con software libre aplicado a casos reales.',
      modules: [
        { title: 'Modulo I', name: 'Fundamentos avanzados de programacion en R y Python' },
        { title: 'Modulo II', name: 'Analisis exploratorio y limpieza de datos' },
        { title: 'Modulo III', name: 'Modelamiento y algoritmos de prediccion' },
        { title: 'Modulo IV', name: 'Visualizacion interactiva y reporte de resultados' },
      ],
      investment: {
        total: '4.500 Bs.',
        matricula: '500 Bs.',
        plan: 'Hasta 4 cuotas mensuales de 1.000 Bs.',
      },
    },
  },
  {
    id: 'dip-bioestadistica',
    title: 'Bioestadistica Aplicada',
    area: 'Salud',
    desc: 'Herramientas estadisticas para analisis epidemiologico, salud publica y ensayos clinicos.',
    duration: '5 meses',
    modality: 'Semipresencial',
    badge: 'Proximo inicio',
    badgeTone: 'closing',
    icon: Activity,
    details: {
      objective:
        'Capacitar en diseno de estudios, recoleccion de datos y modelos estadisticos para investigacion clinica y epidemiologica.',
      modules: [
        { title: 'Modulo I', name: 'Fundamentos estadisticos en ciencias de la salud' },
        { title: 'Modulo II', name: 'Diseno epidemiologico y muestreo clinico' },
        { title: 'Modulo III', name: 'Supervivencia y regresion logistica' },
        { title: 'Modulo IV', name: 'Software estadistico aplicado a bioestadistica' },
      ],
      investment: {
        total: '5.200 Bs.',
        matricula: '600 Bs.',
        plan: 'Matricula + 4 cuotas mensuales de 1.150 Bs.',
      },
    },
  },
  {
    id: 'dip-econometria',
    title: 'Econometria y Modelos Financieros',
    area: 'Economia',
    desc: 'Modelos predictivos y series de tiempo para riesgos, banca y analisis macroeconomico.',
    duration: '4 meses',
    modality: 'Virtual',
    badge: 'En planificacion',
    badgeTone: 'closed',
    icon: TrendingUp,
    details: {
      objective:
        'Brindar herramientas econometricas para modelacion de volatilidad, pronostico de variables economicas y evaluacion de riesgos.',
      modules: [
        { title: 'Modulo I', name: 'Fundamentos de econometria y algebra matricial' },
        { title: 'Modulo II', name: 'Series de tiempo estacionarias y no estacionarias' },
        { title: 'Modulo III', name: 'Modelos ARCH GARCH y riesgo financiero' },
        { title: 'Modulo IV', name: 'Microeconometria y datos de panel' },
      ],
      investment: {
        total: '4.800 Bs.',
        matricula: '500 Bs.',
        plan: 'Matricula + 4 cuotas mensuales.',
      },
    },
  },
]

export const diplomadosRequirements = {
  tag: 'Tramite rapido',
  title: 'Requisitos generales',
  sub: 'Documentacion requerida para la matriculacion formal en programas de Diplomado y Especialidad.',
  profileTitle: 'Perfil estudiantil',
  profileText:
    'Programas dirigidos a profesionales con titulo de licenciatura o egresados con certificado de conclusion de estudios avalado.',
  ctaLabel: 'Ver proceso en portal SIA',
  ctaHref: '#',
  ctaIcon: ArrowUpRight,
  icon: CheckSquare,
  items: [
    'Fotocopia simple de diploma academico o titulo profesional.',
    'Fotocopia de cedula de identidad vigente.',
    'Formulario de registro de postgrado generado por el sistema SIA.',
    'Comprobante de deposito bancario original de matricula o cuota inicial.',
  ],
}

export const diplomadosUi = {
  sectionIcon: Award,
  filterIcon: Filter,
  durationIcon: Clock,
  modalityIcon: Monitor,
  moduleIcon: FileSearch,
  investmentIcon: CreditCard,
  emptyIcon: BookOpen,
  opportunitiesIcon: Briefcase,
}

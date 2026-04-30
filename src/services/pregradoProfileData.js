import {
  Activity,
  BadgeCheck,
  Briefcase,
  Calculator,
  CheckCircle2,
  Cpu,
  Database,
  GraduationCap,
  Microscope,
  Network,
  ShieldCheck,
  Sigma,
  TrendingUp,
  Binary,
} from 'lucide-react'

export const pregradoHero = {
  eyebrow: 'Carrera de Licenciatura · UMSA',
  title: ['Forjando los lideres', 'del analisis de datos', 'en Bolivia.'],
  description:
    'La incertidumbre es el caos; la estadistica es la ley que lo gobierna. Unete a una formacion cientifica con enfoque cuantitativo, tecnologico y etico.',
  imageUrl:
    'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1600',
  primaryCta: { label: 'Ver plan de estudios', href: '/pregrado/malla-curricular' },
  secondaryCta: { label: 'Perfil del postulante', href: '/pregrado/perfil-profesional' },
}

export const applicantProfile = {
  tag: 'Aptitud',
  title: 'Vocacion y Aptitudes',
  sub: 'Buscamos mentes inquietas con base etica, curiosidad intelectual y capacidad para resolver problemas logicos en escenarios reales.',
  cards: [
    {
      title: 'Razonamiento Analitico',
      description: 'Inclinacion por matematicas, abstraccion y comprension de fenomenos aleatorios.',
      icon: Calculator,
      colorClass: 'text-blue-600 bg-blue-50',
    },
    {
      title: 'DNA Tecnologico',
      description: 'Interes en programacion, automatizacion y software especializado para analitica.',
      icon: Cpu,
      colorClass: 'text-[#ea580c] bg-orange-50',
    },
    {
      title: 'Vision Interdisciplinaria',
      description: 'Capacidad para traducir necesidades reales a modelos cuantitativos robustos.',
      icon: Network,
      colorClass: 'text-teal-600 bg-teal-50',
    },
    {
      title: 'Compromiso Etico',
      description: 'Responsabilidad y cuidado en el manejo de informacion sensible y datos publicos.',
      icon: ShieldCheck,
      colorClass: 'text-indigo-600 bg-indigo-50',
    },
  ],
}

export const graduateCompetencies = {
  tag: 'Excelencia',
  title: 'Competencias del Egresado',
  sub: 'Formacion rigurosa para liderar la ciencia de datos en sectores estrategicos de Bolivia.',
  degree: {
    icon: GraduationCap,
    title: 'Licenciado en Estadistica',
    subtitle: 'Acreditacion nacional vigente',
    decorationIcon: Sigma,
  },
  accordions: [
    {
      id: 'modelamiento',
      title: 'Modelamiento y Analisis Estadistico',
      icon: Calculator,
      bullets: [
        {
          icon: CheckCircle2,
          title: 'Fundamentacion Matematica',
          text: 'Formula, valida y resuelve problemas usando probabilidad e inferencia.',
        },
        {
          icon: CheckCircle2,
          title: 'Inferencia y Prediccion',
          text: 'Explica fenomenos y proyecta escenarios bajo incertidumbre.',
        },
        {
          icon: CheckCircle2,
          title: 'Analisis Multivariante',
          text: 'Identifica patrones complejos en grandes volumenes de variables.',
        },
      ],
    },
    {
      id: 'innovacion',
      title: 'Gestion de Datos e Innovacion',
      icon: Database,
      bullets: [
        {
          icon: CheckCircle2,
          title: 'Arquitectura de Datos',
          text: 'Administra datos relacionales y dimensionales con enfoque de seguridad.',
        },
        {
          icon: CheckCircle2,
          title: 'Data Science y Big Data',
          text: 'Extrae valor estrategico con mineria de datos y aprendizaje automatico.',
        },
        {
          icon: CheckCircle2,
          title: 'Procesos Estocasticos',
          text: 'Modela series de tiempo y dinamicas aleatorias en distintos dominios.',
        },
      ],
    },
    {
      id: 'investigacion',
      title: 'Investigacion Cientifica',
      icon: Microscope,
      bullets: [
        {
          icon: CheckCircle2,
          title: 'Diseno Metodologico',
          text: 'Planifica encuestas y muestras para estudios de alcance nacional.',
        },
        {
          icon: CheckCircle2,
          title: 'Comunicacion de Hallazgos',
          text: 'Traduce resultados estadisticos en informes ejecutivos de decision.',
        },
      ],
    },
  ],
}

export const careerOutcomes = {
  tag: 'Proyeccion',
  title: 'Salidas Laborales',
  sub: 'Nuestros graduados ocupan puestos de decision en la economia del dato.',
  featured: {
    badge: 'Mas demandado',
    title: 'Cientifico de Datos',
    subtitle: 'Data Scientist',
    description:
      'Optimiza procesos y predice tendencias con analitica avanzada, modelos estadisticos e IA aplicada.',
    icon: Binary,
    ctaLabel: 'Ver perfil',
  },
  cards: [
    {
      title: 'Consultor Actuarial',
      description: 'Seguros, pensiones y modelos de riesgo financiero.',
      icon: Calculator,
      variant: 'light',
    },
    {
      title: 'Investigador Senior',
      description: 'Especialista en demografia y diseno de experimentos sociales.',
      icon: Microscope,
      variant: 'dark',
    },
    {
      title: 'Lider Estrategico',
      description:
        'Direccion de estadistica en corporaciones, banca y entidades de gobierno.',
      icon: TrendingUp,
      variant: 'wide',
    },
  ],
}

export const occupationalField = {
  tag: 'Ubicacion',
  title: 'Campo Ocupacional',
  sectors: {
    Estatales: [
      {
        name: 'INE Bolivia',
        line: 'Instituto Nacional de Estadistica',
        description: 'Diseno de muestras maestras, censos y analisis demografico avanzado.',
      },
      {
        name: 'Ministerios',
        line: 'Economia y Planificacion',
        description: 'Modelamiento de politicas publicas y seguimiento de indicadores sociales.',
      },
      {
        name: 'Reguladores',
        line: 'ASFI, ANH y APS',
        description: 'Control tecnico de mercados mediante auditoria de datos y riesgos.',
      },
    ],
    Finanzas: [
      {
        name: 'Banca Privada',
        line: 'Entidades Financieras',
        description: 'Modelos de credit scoring, fraude y evaluacion de cartera.',
      },
      {
        name: 'Seguros',
        line: 'Mercado Asegurador',
        description: 'Calculo actuarial de primas y estimacion de reservas tecnicas.',
      },
      {
        name: 'Inversiones',
        line: 'Mercado de Capitales',
        description: 'Proyeccion de activos y optimizacion de portafolios.',
      },
    ],
    Ciencia: [
      {
        name: 'Epidemiologia',
        line: 'Salud Publica',
        description: 'Vigilancia de brotes, bioestadistica y analisis de ensayos.',
      },
      {
        name: 'Investigacion',
        line: 'Universidades y ONG',
        description: 'Diseno experimental y evaluacion de impacto social.',
      },
      {
        name: 'Biomedicina',
        line: 'Genomica y Clinica',
        description: 'Analisis de datos geneticos y validacion de protocolos.',
      },
    ],
    Corporativo: [
      {
        name: 'Big Data',
        line: 'Tech y E-commerce',
        description: 'Prediccion de consumo y optimizacion de logistica.',
      },
      {
        name: 'Marketing',
        line: 'Inteligencia de Mercados',
        description: 'Segmentacion, mineria de opiniones y analitica digital.',
      },
      {
        name: 'Industria',
        line: 'Control de Calidad',
        description: 'Metodologias seis sigma y mejora de procesos.',
      },
    ],
  },
  cta: {
    title: 'Listo para transformar la realidad con datos?',
    buttonLabel: 'Inicia tu carrera hoy',
    status: {
      icon: BadgeCheck,
      label: 'Alta demanda profesional',
      metric: 'n = 380+',
    },
  },
}

export const pregradoStats = [
  { icon: Activity, label: 'Dinamica laboral', value: '92%' },
  { icon: Briefcase, label: 'Sectores de impacto', value: '12+' },
  { icon: Database, label: 'Cursos cuantitativos', value: '40+' },
]

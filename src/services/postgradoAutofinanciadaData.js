import {
  AlertCircle,
  BarChart3,
  Activity,
  Binary,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  FileCheck,
  FileSignature,
  FolderOpen,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  Microscope,
  Network,
  PieChart,
  ShieldCheck,
  Sigma,
  Stamp,
  Target,
  Users,
  Globe,
  Cpu,
  LayoutGrid,
  ArrowUpRight,
} from 'lucide-react'

export const autofinancedHero = {
  icon: BarChart3,
  eyebrow: 'Programa autofinanciado',
  title: ['Maestría', 'Autofinanciada'],
  description:
    'Formación avanzada para profesionales que buscan una vía flexible, competitiva y orientada a la aplicación real de la estadística, la ciencia de datos y la toma de decisiones.',
  highlights: ['Pago por cohortes', 'Ingreso por admisión', 'Horario ejecutivo'],
  ctaPrimary: { label: 'Descargar convocatoria', href: '#' },
  ctaSecondary: { label: 'Ver plan modular', href: '#plan-estudios' },
}

export const autofinancedProfile = {
  tag: 'Perfil de egreso',
  title: 'Competencias aplicadas y flexibles',
  sub: 'El egresado domina herramientas cuantitativas orientadas a investigación aplicada, analítica empresarial y proyectos de innovación.',
  seal: { symbol: 'μ', label: 'PERFIL', value: 'APLICADO' },
  cards: [
    {
      title: 'Arquitectura y bases de datos',
      desc: 'Identificación, depuración y manejo de bases relacionales y dimensionales con altos criterios de calidad.',
      icon: Database,
      span: 'md:col-span-2',
    },
    {
      title: 'Big Data y data mining',
      icon: Network,
      desc: 'Extracción de tendencias, patrones complejos y aplicación de técnicas de minería en escenarios simulados y reales.',
      span: 'md:col-span-1',
    },
    {
      title: 'Muestreo y series de tiempo',
      desc: 'Diseños muestrales precisos y modelado temporal para el análisis predictivo.',
      icon: Activity,
      span: 'md:col-span-1',
    },
    {
      title: 'Multivariante y software',
      desc: 'Uso experto de software estadístico actualizado para el análisis multivariante y la toma de decisiones estratégicas.',
      icon: Cpu,
      span: 'md:col-span-2',
    },
  ],
}

export const autofinancedCurriculumMeta = {
  tag: 'Organización académica',
  title: 'Plan de estudios modular',
  sub: 'La estructura modular permite certificaciones intermedias y cierre de maestría con talleres de tesis progresivos.',
  icon: LayoutGrid,
  note: 'Cada módulo consolida una etapa con un diploma de avance.',
}

export const autofinancedModules = [
  {
    id: 'mod1',
    title: 'Primer módulo',
    subtitle: 'Diplomado en Ciencia de Datos',
    icon: Layers,
    items: [
      { id: 'MAD-415', name: 'Ciencia de Datos I - Introducción', type: 'Especialidad' },
      { id: 'MAD-416', name: 'Programación Estadística', type: 'Herramienta' },
      { id: 'MAD-417', name: 'Muestreo Complejo', type: 'Metodología' },
    ],
  },
  {
    id: 'mod2',
    title: 'Segundo módulo',
    subtitle: 'Diplomado en Big Data',
    icon: Database,
    items: [
      { id: 'MAD-425', name: 'Ciencia de Datos II - Big Data', type: 'Especialidad' },
      { id: 'MAD-426', name: 'Base de Datos', type: 'Herramienta' },
      { id: 'MAD-427', name: 'Análisis Multivariante', type: 'Metodología' },
      { id: 'MAD-428', name: 'Taller de Tesis I', type: 'Investigación', highlight: true },
    ],
  },
  {
    id: 'mod3',
    title: 'Tercer módulo',
    subtitle: 'Diplomado en Data Mining',
    icon: Network,
    items: [
      { id: 'MAD-435', name: 'Ciencia de Datos III - Data Mining', type: 'Especialidad' },
      { id: 'MAD-436', name: 'Modelos Lineales y No Lineales', type: 'Metodología' },
      { id: 'MAD-437', name: 'Taller de Tesis II', type: 'Investigación', highlight: true },
    ],
  },
  {
    id: 'mod4',
    title: 'Cuarto módulo',
    subtitle: 'Maestría en Ciencia y Análisis de Datos',
    icon: GraduationCap,
    items: [
      { id: 'MAD-445', name: 'Ciencia de Datos IV - Machine and Deep Learning', type: 'Especialidad' },
      { id: 'MAD-446', name: 'Series de Tiempo', type: 'Metodología' },
      { id: 'MAD-447', name: 'Taller de Tesis III', type: 'Investigación', highlight: true },
    ],
  },
]

export const autofinancedAdmissionRequirements = {
  tag: 'Trámite administrativo',
  title: 'Requisitos de admisión',
  sub: 'La admisión se organiza por dos vías de titulación, con documentación estándar y presentación física en folder azul.',
  note: {
    icon: AlertCircle,
    title: 'Presentación obligatoria',
    text: 'Toda la documentación debe entregarse en folder color azul y de forma ordenada.',
  },
  tabs: [
    {
      id: 'bolivia',
      label: 'Titulación nacional',
      icon: Stamp,
      items: [
        'Nota de solicitud de admisión dirigida al Coordinador(a) de la maestría.',
        'Documentos firmados de compromisos de participación y cuotas de pago al día.',
        'Fotocopia legalizada del título en provisión nacional de licenciatura.',
        'Fotocopia legalizada del diploma académico de licenciatura.',
        'Curriculum vitae documentado.',
        'Certificado de nacimiento original con sello de Estado Plurinacional.',
        'Fotocopia de cédula de identidad vigente.',
        'Fotocopia de la matrícula de posgrado.',
        'Fotocopia de depósito bancario del 25% por pago de la colegiatura.',
        'Cuatro fotografías tamaño 4x4, fondo plomo claro.',
        'Folder color azul.',
      ],
    },
    {
      id: 'exterior',
      label: 'Titulación extranjera',
      icon: Globe,
      items: [
        'Nota de solicitud de admisión dirigida al Coordinador(a) de la maestría.',
        'Documentos firmados de compromisos de participación y cuotas de pago al día.',
        'Fotocopia legalizada de licenciatura (o equivalente legalizado por Ministerio de Educación y Cancillería boliviana).',
        'Curriculum vitae documentado.',
        'Partida de nacimiento legalizada por Cancillería boliviana.',
        'Fotocopia de C.I., carnet de extranjero o pasaporte con visa de estudios vigente.',
        'Fotocopia de la matrícula de posgrado.',
        'Fotocopia de depósito bancario del 25% por pago de la colegiatura.',
        'Cuatro fotografías tamaño 4x4, fondo plomo claro.',
        'Folder color azul.',
      ],
    },
  ],
}

export const autofinancedOpportunities = {
  tag: 'Oportunidades',
  title: 'Mercado laboral y destinatarios',
  sub: 'La maestría prepara perfiles para liderazgo de datos, consultoría y docencia universitaria con enfoque ejecutivo.',
  sectors: [
    'Instituciones públicas y privadas',
    'Centros de investigación',
    'Universidades',
    'Seguros y banca',
    'Marketing e industria',
    'Minería y servicios',
    'Consultoras y estudios de mercado',
    'Organismos gubernamentales y de salud',
  ],
  roles: [
    { role: 'Analista e investigador', desc: 'Sobre probabilidades, teoría y métodos estadísticos puros y aplicados.' },
    { role: 'Asesor cuantitativo', desc: 'Diseño, dirección y ejecución de análisis de datos en entidades públicas y privadas.' },
    { role: 'Analista Big Data', desc: 'Procesamiento e inteligencia artificial en ecosistemas masivos.' },
    { role: 'Gestor de consultoría', desc: 'Organizador y administrador de empresas especializadas en consultoría estadística.' },
    { role: 'Profesional independiente', desc: 'Integración en equipos interdisciplinarios para la toma de decisiones empresariales.' },
    { role: 'Docente universitario', desc: 'Cátedra en educación superior e institutos de investigación académica.' },
  ],
  icon: Briefcase,
  arrowIcon: ChevronRight,
}

export const autofinancedSeal = {
  symbol: 'σ',
  label: 'AUTOFIN.',
  value: 'MODULAR',
}

export const autofinancedCTA = {
  icon: BarChart3,
  title: 'Domina el mundo de los datos',
  quote: 'El próximo cohorte está por iniciar. Asegura tu lugar en la maestría más competitiva de la región.',
  buttonLabel: 'Inscripción en Línea',
}

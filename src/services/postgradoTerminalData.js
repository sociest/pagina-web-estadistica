import {
  AlertCircle,
  Activity,
  BarChart3,
  Binary,
  BookOpen,
  BrainCircuit,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  FileCheck,
  FileSignature,
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
  Briefcase,
  Globe,
  Cpu,
  LayoutGrid,
} from 'lucide-react'

export const postgradoHero = {
  icon: BarChart3,
  eyebrow: 'Programa de excelencia',
  title: ['Maestría Terminal', 'en Estadística'],
  description:
    'Formación avanzada para profesionales que lideran investigación, modelado matemático y ciencia de datos con rigor científico y proyección internacional.',
  highlights: ['Modalidad modular', 'Enfoque investigativo', 'Proyección Ph.D.'],
  ctaPrimary: { label: 'Descargar convocatoria oficial', href: '#' },
  ctaSecondary: { label: 'Ver plan de estudios', href: '#plan-estudios' },
}

export const postgradoProfile = {
  tag: 'Perfil de egreso',
  title: 'Alta capacidad analitica',
  sub: 'El egresado domina inferencia bajo incertidumbre, optimizacion, modelado avanzado y direccion tecnica de proyectos cuantitativos.',
  seal: { symbol: 'σ', label: 'RIGOR', value: 'ALTO' },
  cards: [
    {
      title: 'Modelado y matematica avanzada',
      desc: 'Abstraccion matematica para resolver problemas complejos, usando optimizacion, simulacion estocastica y modelos lineales generalizados.',
      icon: Sigma,
      span: 'md:col-span-2',
    },
    {
      title: 'Ciencia de datos y big data',
      desc: 'Analisis masivo mediante machine learning, bases de datos multidimensionales y entornos de desarrollo integrado.',
      icon: Database,
      span: 'md:col-span-1',
    },
    {
      title: 'Investigacion cientifica',
      desc: 'Aplicacion del metodo cientifico para formular hipotesis, validar resultados y publicar hallazgos de alto impacto.',
      icon: Microscope,
      span: 'md:col-span-1',
    },
    {
      title: 'Diseno de muestras y censos',
      desc: 'Planificacion y analisis riguroso de encuestas complejas y operativos estadisticos a escala nacional.',
      icon: Target,
      span: 'md:col-span-2',
    },
  ],
}

export const admissionRequirements = {
  tag: 'Admision',
  title: 'Dossier de ingreso',
  sub: 'La documentacion debe acreditar legalidad, respaldo academico y dominio basico de un idioma extranjero.',
  items: [
    {
      title: 'Titulacion profesional',
      desc: 'Fotocopia legalizada del titulo profesional y/o grado de maestria. Si esta en tramite, se acepta documento de conclusion firmado y compromiso de entrega.',
      icon: GraduationCap,
    },
    {
      title: 'Respaldo academico',
      desc: 'Hoja de vida documentada y certificado de calificaciones originales de pregrado.',
      icon: FileCheck,
    },
    {
      title: 'Acreditacion de idioma',
      desc: 'Certificacion de conocimiento de idioma extranjero (ingles), segun reglamentacion general de postgrados.',
      icon: Globe,
    },
    {
      title: 'Solicitud formal',
      desc: 'Carta de solicitud de admision dirigida a la Direccion y formulario oficial de inscripcion.',
      icon: FileSignature,
    },
    {
      title: 'Legalidad y registro',
      desc: 'Certificado de no tener proceso universitario ejecutoriado y matricula posterior a la aceptacion.',
      icon: Stamp,
    },
  ],
  note: {
    icon: AlertCircle,
    title: 'Exigencia de idioma',
    text: 'El conocimiento de un idioma extranjero es obligatorio y debe adecuarse a la reglamentacion vigente.',
  },
}

export const occupationalFields = {
  tag: 'Proyeccion',
  title: 'Ecosistema laboral y academico',
  sub: 'La maestria habilita al profesional para liderar proyectos cuantitativos, consultoria de alto nivel y docencia universitaria.',
  icon: Target,
  arrowIcon: ChevronRight,
  sectors: [
    'INE y organismos gubernamentales',
    'Banca y companias de seguros',
    'ONU, Banco Mundial, CEPAL',
    'Universidades y centros de pensamiento',
    'Empresas multinacionales tech',
    'Consultoras de mercado e industria',
  ],
  roles: [
    { role: 'Direccion de centros de investigacion', desc: 'Liderazgo en instituciones de ciencias sociales y economicas.' },
    { role: 'Analista de datos masivos', desc: 'Procesamiento e inteligencia artificial en ecosistemas masivos.' },
    { role: 'Asesor cuantitativo especializado', desc: 'Diseno y direccion de analisis de datos para entidades publicas y privadas.' },
    { role: 'Muestrista y arquitecto censal', desc: 'Asesoria de alto nivel en censos y encuestas poblacionales.' },
    { role: 'Consultor y gestor independiente', desc: 'Administracion de empresas de consultoria estadistica interdisciplinaria.' },
    { role: 'Docente investigador', desc: 'Catedra universitaria con proyeccion a estudios de doctorado.' },
  ],
}

export const curriculumMeta = {
  tag: 'Organizacion academica',
  title: 'Plan de estudios modular',
  sub: 'La estructura curricular integra progresivamente optimizacion, inferencia avanzada, series de tiempo y cierre investigativo con taller de grado.',
  icon: LayoutGrid,
  note: 'Cada modulo conserva el mismo peso academico y culmina en un curso o proyecto de avance.',
}

export const curriculumModules = [
  {
    id: 'mod1',
    title: 'Primer modulo',
    subtitle: 'Optimizacion y modelos lineales',
    icon: Layers,
    items: [
      { id: 'EST-411', name: 'Metodos de optimizacion', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-412', name: 'Modelos lineales II', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-413', name: 'Muestras complejas', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 240, hi: 360, ht: 600, cr: 15 },
  },
  {
    id: 'mod2',
    title: 'Segundo modulo',
    subtitle: 'Inferencia avanzada',
    icon: Sigma,
    items: [
      { id: 'EST-421', name: 'Modelos lineales generalizados', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-422', name: 'Estadistica bayesiana II', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-423', name: 'Materia electiva I', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 240, hi: 360, ht: 600, cr: 15 },
  },
  {
    id: 'mod3',
    title: 'Tercer modulo',
    subtitle: 'Series de tiempo y simulacion',
    icon: Activity,
    items: [
      { id: 'EST-431', name: 'Series de tiempo multivariadas', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-432', name: 'Simulacion estocastica', hp: 80, hi: 120, ht: 200, cr: 5 },
      { id: 'EST-433', name: 'Materia electiva II', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 240, hi: 360, ht: 600, cr: 15 },
  },
  {
    id: 'mod4',
    title: 'Cuarto modulo',
    subtitle: 'Investigacion aplicada',
    icon: BookOpen,
    items: [
      { id: 'EST-447', name: 'Taller de grado', hp: 200, hi: 200, ht: 400, cr: 10, highlight: true },
      { id: 'EST-448', name: 'Materia electiva III', hp: 80, hi: 120, ht: 200, cr: 5 },
    ],
    totals: { hp: 280, hi: 320, ht: 600, cr: 15 },
  },
]

export const electiveCatalog = {
  tag: 'Especializacion',
  title: 'Catalogo de materias electivas',
  sub: 'El estudiante puede orientar su perfil hacia data science, demografia, estadistica espacial o procesos avanzados.',
  seal: { icon: PieChart, symbol: 'μ', label: 'CATALOGO', value: 'ABIERTO' },
  groups: [
    {
      title: 'Analitica avanzada',
      icon: BrainCircuit,
      items: [
        { id: 'EST-433', name: 'Estadistica espacial', pre: 'Metodos avanzados', ht: 200, cr: 5 },
        { id: 'EST-434', name: 'Analisis de datos masivos II', pre: 'Computacion estadistica', ht: 200, cr: 5 },
        { id: 'EST-435', name: 'Aprendizaje automatico estadistico', pre: 'Modelos lineales', ht: 200, cr: 5 },
      ],
    },
    {
      title: 'Ciencias sociales y poblacion',
      icon: Users,
      items: [
        { id: 'EST-441', name: 'Demografia II', pre: 'Demografia', ht: 200, cr: 5 },
        { id: 'EST-442', name: 'Procesos estocasticos II', pre: 'Series de tiempo', ht: 200, cr: 5 },
        { id: 'EST-443', name: 'Estadistica bayesiana III', pre: 'Bayesiana II', ht: 200, cr: 5 },
      ],
    },
  ],
}

export const programHighlights = [
  { label: 'Horas totales', value: '2400', suffix: 'HRS', icon: Calculator },
  { label: 'Creditos', value: '60', suffix: 'CR', icon: CheckCircle2 },
  { label: 'Modulo de tesis', value: '1', suffix: 'FINAL', icon: FileCheck },
  { label: 'Proyeccion', value: 'Ph.D.', suffix: 'ACADEMICA', icon: ShieldCheck },
]

export const postgradoSeal = {
  symbol: 'σ',
  label: 'POSTGRADO',
  value: 'ELITE',
}

export const postgradoFooter = {
  brand: 'Estadistica — Postgrado',
  subtitle: 'Maestria Terminal en Ciencia de Datos',
  metrics: ['MAGISTER SCIENTIARUM', 'UMSA 2026'],
  icon: BarChart3,
}

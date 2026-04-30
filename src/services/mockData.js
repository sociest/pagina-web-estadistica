import {
  GraduationCap,
  Mail,
  BarChart3,
  Database,
  TrendingUp,
  FlaskConical,
  Trophy,
  Users
} from 'lucide-react';

/**
 * @typedef {Object} CmsLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} CmsNewsItem
 * @property {number} id
 * @property {string} category
 * @property {string} accent
 * @property {string} date
 * @property {string} title
 * @property {string} excerpt
 * @property {string} imageUrl
 * @property {string} readTime
 * @property {string} href
 */

/**
 * @typedef {Object} CmsEventItem
 * @property {string} day
 * @property {string} month
 * @property {string} color
 * @property {string} category
 * @property {string} title
 * @property {string} time
 * @property {string} location
 */

export const mockNavItems = [
  {
    label: 'Inicio',
    href: '/',
    accent: '#00447e',
    align: 'left',
  },
  {
    label: 'Institucional',
    href: '/institucional/acerca',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Acerca de la Carrera (Historia, Misión, Visión)', href: '/institucional/acerca' },
      { label: 'Acreditación y Evaluación Continua', href: '/institucional/acreditacion' },
      { label: 'Autoridades (Director y HCC)', href: '/institucional/autoridades' },
      { label: 'Plantel Docente y Administrativo', href: '/institucional/docentes' },
      { label: 'Convenios Interinstitucionales', href: '/institucional/convenios' },
      { label: 'Reglamentos y Resoluciones', href: '/institucional/reglamentos' },
    ]
  },
  {
    label: 'Pregrado',
    href: '/pregrado/perfil-profesional',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Perfil Profesional y Laboral', href: '/pregrado/perfil-profesional' },
      { label: 'Plan de Estudios y Malla Curricular', href: '/pregrado/malla-curricular' },
      { label: 'Admisiones y Modalidades de Ingreso', href: '/pregrado/admisiones' },
      { label: 'Convalidaciones', href: '/pregrado/convalidaciones' },
      { label: 'Modalidades de Graduación', href: '/pregrado/modalidades-graduacion' },
      { label: 'Calendario Académico', href: '/pregrado/calendario-academico' },
    ],
  },
  {
    label: 'Postgrado',
    href: '/postgrado/maestria-terminal',
    accent: '#00447e',
    align: 'center',
    children: [
      { label: 'Maestría Terminal', href: '/postgrado/maestria-terminal' },
      { label: 'Maestría Autofinanciada', href: '/postgrado/maestria-autofinanciada' },
      { label: 'Diplomados y Especialidades', href: '/postgrado/diplomados-especialidades' },
    ],
  },
  {
    label: 'Estudiantes',
    href: '#estudiantes',
    accent: '#ea580c',
    align: 'center',
    children: [
      { label: 'Guia y Seguimiento de Tramites', href: '/estudiantes/guia-seguimiento-tramites' },
      { label: 'Centro de Estudiantes (CEE)', href: '/estudiantes/centro-estudiantes' },
      { label: 'Convocatorias (Auxiliaturas)', href: '/estudiantes/convocatorias-auxiliaturas' },
      { label: 'Pasantías y Bolsa de Trabajo', href: '/estudiantes/pasantias-bolsa-trabajo' },
      { label: 'Sociedades Científicas', href: '/estudiantes/sociedad-cientifica' },
    ],
  },
  {
    label: 'Investigación',
    href: '#investigacion',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Acerca del IETA', href: '/investigacion/acerca-ieta' },
      { label: 'Personal', href: '/investigacion/personal' },
      { label: 'Investigación y Proyectos', href: '/investigacion/proyectos' },
      { label: 'Revista Varianza', href: '/investigacion/revista-varianza' },
      { label: 'Autores Varianza', href: '/investigacion/autores-varianza' },
      { label: 'Servicios y Capacitación', href: '/investigacion/servicios' },
      { label: 'Contacto IETA', href: '/investigacion/contacto' },
    ],
  },
  {
    label: 'Recursos',
    href: '#recursos',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Biblioteca Especializada', href: '/recursos/biblioteca' },
      { label: 'Banco de Datos (Censos y Encuestas)', href: '/recursos/banco-datos' },
      { label: 'Revistas y Publicaciones', href: '/recursos/revistas' },
      { label: 'Repositorio de Tesis y Proyectos (Cyber-Tesis)', href: '/recursos/tesis' },
      { label: 'Documentos Digitales', href: '/recursos/documentos' },
    ],
  },
  {
    label: 'Contacto',
    href: '/contacto',
    accent: '#ea580c',
    align: 'right',
  },
];

export const mockSlides = [
  {
    title: 'Formando Científicos de Datos para el Futuro',
    subtitle: 'PREGRADO · ESTADÍSTICA UMSA',
    description: 'Prepárate en análisis estadístico, modelado predictivo y ciencia de datos con los mejores docentes investigadores de Bolivia.',
    buttonText: 'Conoce la Carrera',
    imageUrl: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRhdGElMjBzY2llbmNlJTIwY29tcHV0ZXIlMjBsYWIlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3Mzk0NDIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#00447e',
    tag: '🎓 CARRERA DE PREGRADO',
    stats: ['σ = 1.05', 'R² = 0.94', 'n = 380+'],
  },
  {
    title: 'Participa en el Censo Universitario 2025',
    subtitle: 'AVISO IMPORTANTE',
    description: 'Comunicado para estudiantes, docentes y personal administrativo. Participación obligatoria del 20 al 27 de marzo de 2025.',
    buttonText: 'Llenar Formulario',
    imageUrl: 'https://images.unsplash.com/photo-1673656866903-f0c9af5d5605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2Vuc3VzJTIwc3VydmV5JTIwc3R1ZGVudHMlMjBCb2xpdmlhfGVufDF8fHx8MTc3Mzk0NDIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#ea580c',
    tag: '📋 AVISO INSTITUCIONAL',
    stats: ['μ = 2025', 'N = 5420', 'p < 0.001'],
  },
  {
    title: 'Magíster en Análisis de Datos',
    subtitle: 'POSTGRADO · INSCRIPCIONES ABIERTAS',
    description: 'Formación avanzada en machine learning, estadística bayesiana y big data. Clases presenciales y en línea para profesionales.',
    buttonText: 'Inscripciones Abiertas',
    imageUrl: 'https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXJzJTIwZGVncmVlJTIwZ3JhZHVhdGlvbiUyMHByb2Zlc3Npb25hbHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczOTQ0MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#00447e',
    tag: '📊 POSTGRADO 2025',
    stats: ['β₁ = 0.87', 'R² = 0.96', 'n = 140+'],
  },
];

export const mockQuickLinks = [
  { title: 'Seguimiento de Egresados', description: 'Portal de empleabilidad', href: '#', icon: Users, color: '#00447e', stat: 'Activo' },
  { title: 'Olimpiadas de Estadística', description: 'Competencia académica', href: '#', icon: Trophy, color: '#ea580c', stat: '2026' },
  { title: 'Correo Institucional', description: 'Webmail UMSA', href: '#', icon: Mail, color: '#00447e', stat: 'Office 365' },
  { title: 'Acceso SIA', description: 'Sistema de Información', href: '#', icon: GraduationCap, color: '#ea580c', stat: 'Kardex' }
];

export const mockStats = [
  { value: '92', suffix: '%', title: 'Empleabilidad<br/>Directa', description: 'Egresados en puestos senior', color: '#00447e' },
  { value: '15', suffix: ':1', title: 'Ratio Estudiante<br/>Docente', description: 'Atención personalizada', color: '#ea580c' },
  { value: '25', suffix: '+', title: 'Investigaciones<br/>Publicadas', description: 'Gestión 2025-2026', color: '#00447e' },
  { value: 'A', suffix: '+', title: 'Acreditación<br/>Internacional', description: 'Mercosur Educativo', color: '#ea580c' }
];

/** @type {CmsNewsItem[]} */
export const mockNews = [
  {
    id: 1,
    category: 'Investigación',
    accent: '#ea580c',
    date: '15 Mar 2025',
    title: 'Investigadores de la Carrera publican en revista ISI sobre modelos de pobreza multidimensional en Bolivia',
    excerpt: 'El equipo del IETA presentó resultados de tres años de investigación aplicada con datos del INE, siendo la primera publicación boliviana en el índice.',
    imageUrl: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?w=600',
    readTime: '4 min',
    href: '#',
  },
  {
    id: 2,
    category: 'Académico',
    accent: '#00447e',
    date: '10 Mar 2025',
    title: 'Apertura de inscripciones para la Maestría en Análisis de Datos 2025',
    excerpt: 'El Postgrado de la Carrera anuncia el inicio de inscripciones para la nueva cohorte.',
    imageUrl: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?w=600',
    readTime: '3 min',
    href: '#',
  },
  {
    id: 3,
    category: 'Eventos',
    accent: '#64748b',
    date: '05 Mar 2025',
    title: 'Feria de Ciencia de Datos: estudiantes presentan proyectos de análisis social',
    excerpt: 'La segunda edición reunió a más de 150 estudiantes con proyectos innovadores.',
    imageUrl: 'https://images.unsplash.com/photo-1761223976721-8fb221946658?w=600',
    readTime: '5 min',
    href: '#',
  },
  {
    id: 4,
    category: 'Institucional',
    accent: '#00447e',
    date: '01 Mar 2025',
    title: 'Actualización de reglamento académico 2025',
    excerpt: 'Nuevos lineamientos para procesos de evaluación y seguimiento estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
    readTime: '2 min',
    href: '#',
  },
  {
    id: 5,
    category: 'Postgrado',
    accent: '#ea580c',
    date: '27 Feb 2025',
    title: 'Becas parciales para diplomados en estadística aplicada',
    excerpt: 'Convocatoria abierta para profesionales del sector público y privado.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    readTime: '3 min',
    href: '#',
  },
];

/** @type {CmsEventItem[]} */
export const mockEvents = [
  { day: '20', month: 'MAR', color: '#00447e', category: 'Institucional', title: 'Inicio Censo Universitario 2025', time: '08:00 — 17:00', location: 'Campus UMSA' },
  { day: '25', month: 'MAR', color: '#00447e', category: 'Académico', title: 'Ceremonia de Graduación 2024', time: '09:00 — 12:00', location: 'Auditorio Central UMSA' },
  { day: '30', month: 'MAR', color: '#ea580c', category: 'Postgrado', title: 'Cierre de Inscripciones — Postgrado', time: '08:00 — 16:00', location: 'Secretaría, Piso 3' },
  { day: '04', month: 'ABR', color: '#64748b', category: 'Taller', title: 'Taller: Python para Estadísticos', time: '14:00 — 18:00', location: 'Sala de Cómputo 201' },
  { day: '10', month: 'ABR', color: '#00447e', category: 'Investigación', title: 'Defensa de Tesis de Maestría', time: '09:00 — 13:00', location: 'Sala de Postgrado' },
  { day: '18', month: 'ABR', color: '#ea580c', category: 'Seminario', title: 'Seminario: Big Data en el INE Bolivia', time: '10:00 — 12:00', location: 'Auditorio Facultad' },
];

/** @type {CmsLink[]} */
export const mockFooterLinks = [
  { label: 'Plan de Estudios', href: '#' },
  { label: 'Malla Curricular', href: '#' },
  { label: 'Calendario Académico', href: '/pregrado/calendario-academico' },
  { label: 'Docentes', href: '#' },
  { label: 'Trámites y Servicios', href: '#' },
  { label: 'Maestría en Análisis de Datos', href: '#' },
  { label: 'Diplomados', href: '/postgrado/diplomados-especialidades' },
  { label: 'Cursos de Actualización', href: '#' },
  { label: 'IETA — Investigación', href: '#' },
  { label: 'Repositorio Institucional', href: '#' },
];

export const mockGraduateProfile = {
  badgeValue: '92',
  badgeSuffix: '%',
  badgeLabel: 'Tasa de Empleo Directo',
  titleLines: ['PERFIL DEL', 'EGRESADO'],
  description:
    'Nuestros profesionales dominan el lenguaje de los datos. Están capacitados para liderar la transformación digital mediante el modelado matemático riguroso.',
};

export const mockGraduateRoles = [
  {
    title: 'Analista de Riesgos',
    subtitle: 'Sectores Bancarios y Seguros',
    icon: BarChart3,
    accent: '#ea580c',
  },
  {
    title: 'Data Scientist',
    subtitle: 'IA y Machine Learning Avanzado',
    icon: Database,
    accent: '#00447e',
  },
  {
    title: 'Consultor Público',
    subtitle: 'Políticas Basadas en Evidencia',
    icon: TrendingUp,
    accent: '#00447e',
  },
  {
    title: 'Investigador',
    subtitle: 'Desarrollo de Nuevas Metodologías',
    icon: FlaskConical,
    accent: '#00447e',
  },
];

export const mockIETAContent = {
  eyebrow: 'EX_13',
  title: ['CIENCIA', 'APLICADA', 'INSTITUTO', 'IETA'],
  description:
    'El Instituto de Estadística Teórica y Aplicada (IETA) es el motor de investigación de nuestra facultad. Desarrollamos modelos de alta precisión para resolver desafíos críticos de Bolivia.',
  imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600',
  badge: { label: 'R²', value: '0.98', subtitle: 'Poder Predictivo' },
  projects: [
    {
      title: 'Modelado Multivariante',
      description: 'Análisis de pobreza multidimensional con organismos internacionales.',
    },
    {
      title: 'Ciencia de Datos Pública',
      description: 'Soporte técnico avanzado para el INE y UDAPE.',
    },
  ],
  ctaLabel: 'Explorar Investigaciones',
  ctaHref: '#',
};

export const mockPartners = [
  { name: 'INE Bolivia', abbr: 'INE' },
  { name: 'Banco Central de Bolivia', abbr: 'BCB' },
  { name: 'Ministerio de Economía', abbr: 'MEF' },
  { name: 'UDAPE', abbr: 'UDAPE' },
  { name: 'Banco Mundial', abbr: 'BM' },
  { name: 'OPS / OMS', abbr: 'OPS' },
  { name: 'CEPAL', abbr: 'CEPAL' },
  { name: 'Banco BNB', abbr: 'BNB' },
  { name: 'UNFPA Bolivia', abbr: 'UNFPA' },
  { name: 'Ministerio de Salud', abbr: 'MSD' },
  { name: 'Banco Unión', abbr: 'BU' },
  { name: 'PNUD Bolivia', abbr: 'PNUD' },
];

export const mockTestimonials = [
  {
    name: 'María Alejandra Quispe',
    role: 'Analista de Datos Senior',
    company: 'Banco Central de Bolivia',
    quote:
      'La formación que recibí en la Carrera de Estadística me dio herramientas para liderar equipos de análisis en el sector financiero boliviano.',
    avatar: 'MA',
    year: 'Egresada 2018',
    color: '#00447e',
    stats: 'β₁ = 0.92 · R² = 0.96',
  },
  {
    name: 'Carlos Andrés Mamani',
    role: 'Director de Estadísticas',
    company: 'INE Bolivia',
    quote:
      'Aplico diariamente técnicas de muestreo y estimación aprendidas en los laboratorios del IETA para retos reales del país.',
    avatar: 'CA',
    year: 'Egresado 2015',
    color: '#00447e',
    stats: 'σ = 0.15 · n = 1,200',
  },
  {
    name: 'Ana Patricia García',
    role: 'Consultora en Data Science',
    company: 'PNUD Bolivia',
    quote:
      'El pensamiento analítico y estadístico de la UMSA me permitió trabajar en proyectos de desarrollo sostenible para organismos internacionales.',
    avatar: 'AP',
    year: 'Egresada 2020',
    color: '#ea580c',
    stats: 'μ = 8.9 · IC 95%',
  },
  {
    name: 'Roberto Daniel Luna',
    role: 'Investigador Principal',
    company: 'UDAPE',
    quote:
      'El IETA me permitió participar en investigaciones publicadas internacionalmente: aquí se forman científicos comprometidos con Bolivia.',
    avatar: 'RL',
    year: 'Egresado 2012',
    color: '#00447e',
    stats: 'χ² = 18.4 · p<0.001',
  },
];
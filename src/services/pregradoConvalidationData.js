import {
  AlertTriangle,
  ArrowRightLeft,
  BookOpen,
  Factory,
  FileSearch,
  FileText,
  Globe,
  History,
  Layers,
  ListFilter,
  Map,
  PieChart,
  RefreshCcw,
  Sigma,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'

export const convalidationHero = {
  eyebrow: 'Migracion de planes',
  title: ['Tabla de', 'Convalidaciones'],
  highlights: ['Resoluciones oficiales', 'Mapeo directo'],
}

export const convalidationIntro = {
  title: 'Herramienta de Transicion',
  description:
    'Verifica la equivalencia exacta de asignaturas entre planes de estudio para facilitar tu tramite de homologacion academica.',
  searchPlaceholder: 'Buscar sigla o materia...',
}

export const convalidationData2007to2012 = [
  {
    sem: 1,
    title: 'Primer Semestre',
    items: [
      { old: { id: 'INF-111', n: 'Programacion I' }, new: { id: 'INF-111', n: 'Programacion I' } },
      { old: { id: 'LAB-111', n: 'Laboratorio de Programacion I' }, new: { id: 'LAB-111', n: 'Laboratorio de Programacion I' } },
      { old: { id: 'MAT-130', n: 'Algebra' }, new: { id: 'MAT-130', n: 'Algebra' } },
      { old: { id: 'MAT-132', n: 'Calculo I' }, new: { id: 'MAT-132', n: 'Calculo I' } },
      { old: { id: 'EST-130', n: 'Estadistica General' }, new: { id: 'EST-130', n: 'Estadistica General' } },
      { old: { id: 'LIN-116', n: 'Ingles I' }, new: { id: 'LIN-116', n: 'Ingles I' } },
    ],
  },
  {
    sem: 2,
    title: 'Segundo Semestre',
    items: [
      { old: { id: 'INF-121', n: 'Programacion II' }, new: { id: 'INF-121', n: 'Programacion II' } },
      { old: { id: 'LAB-121', n: 'Laboratorio de Programacion II' }, new: { id: 'LAB-121', n: 'Laboratorio de Programacion II' } },
      { old: { id: 'MAT-136', n: 'Algebra Lineal' }, new: { id: 'MAT-136', n: 'Algebra Lineal' } },
      { old: { id: 'MAT-134', n: 'Calculo II' }, new: { id: 'MAT-134', n: 'Calculo II' } },
      { old: { id: 'EST-133', n: 'Probabilidad I' }, new: { id: 'EST-133', n: 'Probabilidad I' } },
      { old: { id: 'LIN-117', n: 'Ingles II' }, new: { id: 'LIN-117', n: 'Ingles II' } },
    ],
  },
  {
    sem: 3,
    title: 'Tercer Semestre',
    items: [
      { old: { id: 'MAT-274', n: 'Calculo III' }, new: { id: 'MAT-274', n: 'Calculo III' } },
      { old: { id: 'EST-233', n: 'Probabilidad II' }, new: { id: 'EST-233', n: 'Probabilidad II' } },
      { old: { id: 'EST-231', n: 'Algebra Lineal Aplicada' }, new: { id: 'EST-231', n: 'Algebra Lineal Aplicada' } },
      { old: { id: 'EST-230', n: 'Bases de Datos' }, new: { id: 'EST-230', n: 'Bases de Datos' } },
      { old: { id: 'EST-232', n: 'Metodologia de la Investigacion' }, new: { id: 'EST-232', n: 'Metodologia de la Investigacion' } },
    ],
  },
  {
    sem: 4,
    title: 'Cuarto Semestre',
    items: [
      { old: { id: 'MAT-278', n: 'Calculo IV' }, new: { id: 'MAT-278', n: 'Calculo IV' } },
      { old: { id: 'EST-270', n: 'Intro. Teoria de Probabilidad I' }, new: { id: 'EST-270', n: 'Intro. Teoria de Probabilidad I' } },
      { old: { id: 'EST-216', n: 'Investigacion Operativa I' }, new: { id: 'EST-216', n: 'Investigacion Operativa I' } },
      { old: { id: 'EST-250', n: 'Muestreo I' }, new: { id: 'EST-250', n: 'Muestreo I' } },
      { old: { id: 'EST-225', n: 'Estadistica Matematica I' }, new: { id: 'EST-225', n: 'Estadistica Matematica I' } },
    ],
  },
  {
    sem: 5,
    title: 'Quinto Semestre',
    items: [
      { old: { id: 'EST-330', n: 'Modelos Lineales' }, new: { id: 'EST-330', n: 'Modelos Lineales' } },
      { old: { id: 'EST-350', n: 'Muestreo II' }, new: { id: 'EST-350', n: 'Muestreo II' } },
      { old: { id: 'EST-378', n: 'Estadistica no Parametrica' }, new: { id: 'EST-378', n: 'Estadistica no Parametrica' } },
      { old: { id: 'EST-310', n: 'Investigacion Operativa II' }, new: { id: 'EST-310', n: 'Investigacion Operativa II' } },
      { old: { id: 'OPT-001', n: 'Optativa I' }, new: { id: 'OPT-001', n: 'Optativa I' } },
    ],
  },
  {
    sem: 6,
    title: 'Sexto Semestre',
    items: [
      { old: { id: 'EST-315', n: 'Procesos Estocasticos' }, new: { id: 'EST-315', n: 'Procesos Estocasticos' } },
      { old: { id: 'EST-376', n: 'Estadistica Bayesiana' }, new: { id: 'EST-376', n: 'Estadistica Bayesiana' } },
      { old: { id: 'EST-335', n: 'Metodos Multivariados I' }, new: { id: 'EST-335', n: 'Metodos Multivariados I' } },
      { old: { id: 'EST-377', n: 'Sistemas de Informacion Estadistica' }, new: { id: 'EST-377', n: 'Sistemas de Informacion Estadistica' } },
      { old: { id: 'OPT-002', n: 'Optativa II' }, new: { id: 'OPT-002', n: 'Optativa II' } },
    ],
  },
  {
    sem: 7,
    title: 'Septimo Semestre',
    items: [
      { old: { id: 'EST-367', n: 'Series de Tiempo I' }, new: { id: 'EST-367', n: 'Series de Tiempo I' } },
      { old: { id: 'EST-360', n: 'Diseno de Experimentos' }, new: { id: 'EST-360', n: 'Diseno de Experimentos' } },
      { old: { id: 'EST-337', n: 'Metodos Multivariados II' }, new: { id: 'EST-337', n: 'Metodos Multivariados II' } },
      { old: { id: 'OPT-003', n: 'Optativa III' }, new: { id: 'OPT-003', n: 'Optativa III' } },
      { old: { id: 'OPT-004', n: 'Optativa IV' }, new: { id: 'OPT-004', n: 'Optativa IV' } },
    ],
  },
  {
    sem: 8,
    title: 'Octavo Semestre',
    items: [
      { old: { id: 'EST-437', n: 'Analisis de Datos Categoricos' }, new: { id: 'EST-339', n: 'Analisis de Datos Categoricos' } },
      { old: { id: 'EST-499', n: 'Trabajo de Grado' }, new: { id: 'EST-399', n: 'Trabajo de Grado' } },
      { old: { id: 'OPT-005', n: 'Optativa V' }, new: { id: 'OPT-005', n: 'Optativa V' } },
    ],
  },
]

export const convalidation2012to2021Troncales = [
  { old: { id: 'INF 111', n: 'Programacion I' }, new: { id: 'INF 111', n: 'Programacion I' } },
  { old: { id: 'LAB 111', n: 'Laboratorio de Programacion I' }, new: { id: 'LAB 111', n: 'Laboratorio de Programacion I' } },
  { old: { id: 'MAT 130', n: 'Algebra' }, new: { id: 'MAT 130', n: 'Algebra' } },
  { old: { id: 'MAT 132', n: 'Calculo I' }, new: { id: 'MAT 132', n: 'Calculo I' } },
  { old: { id: 'EST 130', n: 'Estadistica General' }, new: { id: 'EST 113', n: 'Estadistica Descriptiva' } },
  { old: { id: 'INF 121', n: 'Programacion II' }, new: { id: 'EST 122', n: 'Computacion Estadistica I' } },
  { old: { id: 'EST 233', n: 'Probabilidad II' }, new: { id: 'EST 235', n: 'Inferencia Estadistica I' } },
  { old: { id: 'EST 230', n: 'Bases de Datos' }, new: { id: 'EST 351', n: 'Computacion Estadistica II' } },
  { old: { id: 'EST 330', n: 'Modelos Lineales' }, new: { id: 'EST 353', n: 'Modelos Lineales I' } },
  { old: { id: 'EST 315', n: 'Procesos Estocasticos' }, new: { id: 'EST 355', n: 'Procesos Estocasticos' } },
  { old: { id: 'EST 337', n: 'Metodos Multivariados II' }, new: { id: 'EST 375', n: 'Metodos Multivariados II' } },
  { old: { id: 'EST 383', n: 'Programacion Estadistica I' }, new: { id: 'EST 372', n: 'Analisis de Datos Masivo I' } },
]

export const convalidation2012to2021Optativas = [
  {
    title: 'Area Estadistica',
    icon: PieChart,
    items: [
      { old: { id: 'IIM 337', n: 'Control de Calidad' }, new: { id: 'EST 384', n: 'Control Est. de la Calidad' } },
      { old: { id: 'ECO 315', n: 'Matematica Actuarial' }, new: { id: 'EST 385', n: 'Estadistica Actuarial' } },
      { old: { id: 'BIO 258', n: 'Epidemiologia Medica' }, new: { id: 'EST 386', n: 'Epidemiologia Estadistica' } },
    ],
  },
  {
    title: 'Area Economia',
    icon: TrendingUp,
    items: [
      { old: { id: 'ECO 200', n: 'Microeconomia' }, new: { id: 'TE 302', n: 'Microeconomia I' } },
      { old: { id: 'ECO 201', n: 'Macroeconomia' }, new: { id: 'TE 313', n: 'Macroeconomia I' } },
      { old: { id: 'ECO 300', n: 'Econometria' }, new: { id: 'C 115', n: 'Econometria I' } },
    ],
  },
  {
    title: 'Area Matematica',
    icon: Sigma,
    items: [
      { old: { id: 'MAT 263', n: 'Topologia General' }, new: { id: 'MAT 253', n: 'Topologia General' } },
      { old: { id: 'MAT 278', n: 'Calculo IV' }, new: { id: 'MAT 262', n: 'Analisis Complejo I' } },
    ],
  },
  {
    title: 'Area Fisica',
    icon: Zap,
    items: [
      { old: { id: 'FIS 222', n: 'Termodinamica' }, new: { id: 'FIS 362', n: 'Termodinamica' } },
      { old: { id: 'FIS 230', n: 'Mecanica Estadistica' }, new: { id: 'FIS 370', n: 'Mecanica Estadistica' } },
    ],
  },
  {
    title: 'Area Ing. Geografica',
    icon: Map,
    items: [
      { old: { id: 'IIM 384', n: 'Cartografia Digitalizada' }, new: { id: 'MAP 202', n: 'Cartografia' } },
    ],
  },
  {
    title: 'Area Ing. Industrial',
    icon: Factory,
    items: [
      { old: { id: 'ECO 320', n: 'Mercadotecnia I' }, new: { id: 'IND 621', n: 'Marketing' } },
      { old: { id: 'IIM 375', n: 'Prep. y Eval. de Proyectos' }, new: { id: 'IND 723', n: 'Prep. y Eval. de Proyectos I' } },
    ],
  },
]

export const convalidationMappingMeta = {
  tag: 'Mapeo analitico',
  title: 'Equivalencias Oficiales',
  sub: 'Selecciona la resolucion de transicion que corresponda a tu historial academico para visualizar la matriz de convalidacion.',
  planTabs: [
    { id: '2021', label: 'Plan 2012 -> 2021', icon: ArrowRightLeft, accent: 'orange' },
    { id: '2012', label: 'Plan 2007 -> 2012', icon: History, accent: 'blue' },
  ],
  typeTabs: [
    { id: 'troncales', label: 'Materias troncales', icon: Layers, accent: 'blue' },
    { id: 'optativas', label: 'Materias optativas', icon: ListFilter, accent: 'orange' },
  ],
  emptyLabel: 'No se encontraron equivalencias',
  warningTitle: 'Normativa de convalidacion de optativas',
  warningText:
    'El estudiante debe elegir una sola area para convalidar materias optativas. No se permite combinar optativas de distintas areas en el plan nuevo.',
  warningIcon: AlertTriangle,
  searchIcon: FileSearch,
}

export const convalidationProcedure = {
  tag: 'Tramites',
  title: ['Proceso de', 'Homologacion'],
  description:
    'La convalidacion de materias es un proceso automatico para estudiantes regulares. En casos especiales de abandono, readmision o traspaso, se aplica protocolo normativo.',
  requirements: [
    'Memorial o carta valorada dirigida a Direccion de Carrera solicitando homologacion.',
    'Historial academico original (record) firmado y sellado.',
    'Fotocopia de Resolucion de Traspaso o Readmision (si aplica).',
    'Fotocopia simple de Cedula de Identidad.',
    'Formulario de Convalidacion adquirido en Caja Universitaria.',
    'Presentar documentacion en folder oficial de la Carrera.',
  ],
  ctaLabel: 'Tabla oficial PDF',
  icon: BookOpen,
}

export const convalidationVisuals = {
  searchIcon: RefreshCcw,
  pageMarks: [
    { label: 'r = 0.94' },
    { label: 'sigma = 0.33' },
    { label: 'n = 240' },
  ],
  areaChips: [
    { label: 'Area estadistica', icon: PieChart },
    { label: 'Area economia', icon: TrendingUp },
    { label: 'Area matematica', icon: Sigma },
    { label: 'Area industrial', icon: Factory },
    { label: 'Area geografica', icon: Globe },
  ],
  headerIcon: FileText,
  processIcon: Target,
}

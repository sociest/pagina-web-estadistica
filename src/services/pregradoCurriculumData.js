import {
  AlertTriangle,
  Award,
  BookOpen,
  Calculator,
  CalendarClock,
  CheckCircle2,
  CheckSquare,
  Clock,
  Code,
  Download,
  Factory,
  FileEdit,
  FileText,
  Info,
  Layers,
  ListPlus,
  Map,
  MousePointer2,
  PenTool,
  PieChart,
  ShieldCheck,
  Sigma,
  Timer,
  TrendingUp,
} from 'lucide-react'

export const curriculumHero = {
  eyebrow: 'Resolucion academica 2021',
  title: ['Plan de Estudios', 'y Malla Curricular'],
  highlights: ['9,600 Horas', '240 Creditos'],
}

export const curriculumData = [
  {
    sem: 1,
    level: 'Basico',
    subjects: [
      { id: 'INF 111', n: 'Programacion I', area: 'prog', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'LAB 111', n: 'Laboratorio de Programacion I', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: [] },
      { id: 'MAT 130', n: 'Algebra', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'MAT 132', n: 'Calculo I', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'EST 113', n: 'Estadistica Descriptiva', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: [] },
      { id: 'LIN 116', n: 'Ingles I', area: 'other', hp: 4, hnp: 2, ht: 120, cred: 3, pre: [] },
    ],
  },
  {
    sem: 2,
    level: 'Basico',
    subjects: [
      { id: 'EST 122', n: 'Computacion Estadistica I', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['INF 111', 'LAB 111'] },
      { id: 'EST 124', n: 'Diseno y Proc. Estadistico I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 113'] },
      { id: 'MAT 136', n: 'Algebra Lineal', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 130'] },
      { id: 'MAT 134', n: 'Calculo II', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 132'] },
      { id: 'EST 123', n: 'Probabilidad I', area: 'stats', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 132'] },
      { id: 'LIN 117', n: 'Ingles II', area: 'other', hp: 4, hnp: 2, ht: 120, cred: 3, pre: ['LIN 116'] },
    ],
  },
  {
    sem: 3,
    level: 'Formacion',
    subjects: [
      { id: 'MAT 274', n: 'Ecuaciones Diferenciales', area: 'math', hp: 8, hnp: 2, ht: 200, cred: 5, pre: ['MAT 134'] },
      { id: 'EST 233', n: 'Probabilidad II', area: 'stats', hp: 8, hnp: 6, ht: 280, cred: 7, pre: ['EST 123'] },
      { id: 'EST 231', n: 'Analisis Matricial Estadistico', area: 'math', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['MAT 136'] },
      { id: 'EST 235', n: 'Inferencia Estadistica I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 123'] },
      { id: 'EST 232', n: 'Demografia', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 123'] },
    ],
  },
  {
    sem: 4,
    level: 'Formacion',
    subjects: [
      { id: 'EST 240', n: 'Teoria de Probabilidad I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 233'] },
      { id: 'EST 241', n: 'Estadistica no Parametrica', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 235'] },
      { id: 'EST 242', n: 'Investigacion Operativa I', area: 'math', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 231'] },
      { id: 'EST 243', n: 'Inferencia Estadistica II', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 235'] },
      { id: 'EST 244', n: 'Muestreo I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 235'] },
    ],
  },
  {
    sem: 5,
    level: 'Profesional',
    subjects: [
      { id: 'EST 354', n: 'Muestreo II', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 244'] },
      { id: 'EST 355', n: 'Procesos Estocasticos', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 240'] },
      { id: 'EST 352', n: 'Investigacion Operativa II', area: 'math', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 242'] },
      { id: 'EST 353', n: 'Modelos Lineales I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 243'] },
      { id: 'EST 351', n: 'Computacion Estadistica II', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 122'] },
    ],
  },
  {
    sem: 6,
    level: 'Profesional',
    subjects: [
      { id: 'EST 362', n: 'Estadistica Computacional', area: 'prog', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 351', 'EST 354'] },
      { id: 'EST 365', n: 'Metodos Multivariados I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 353'] },
      { id: 'EST 367', n: 'Series Tiempo Univariante', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 355'] },
      { id: 'EST 368', n: 'Metodologia Investigacion', area: 'other', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 354'] },
      { id: 'EST 366', n: 'Estadistica Bayesiana I', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 243'] },
    ],
  },
  {
    sem: 7,
    level: 'Profesional',
    subjects: [
      { id: 'EST 373', n: 'Diseno de Experimentos', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 353'] },
      { id: 'EST 375', n: 'Metodos Multivariados II', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 365'] },
      { id: 'EST 374', n: 'Analisis Datos Categoricos', area: 'stats', hp: 8, hnp: 4, ht: 240, cred: 6, pre: ['EST 353'] },
      { id: 'EST 372', n: 'Analisis de Datos Masivo I', area: 'prog', hp: 10, hnp: 4, ht: 280, cred: 7, pre: ['EST 365'] },
      { id: 'OPT I', n: 'Optativa I', area: 'opt', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
    ],
  },
  {
    sem: 8,
    level: 'Titulacion',
    subjects: [
      { id: 'EST 381', n: 'Mineria de Datos', area: 'prog', hp: 10, hnp: 4, ht: 280, cred: 7, pre: ['EST 372'] },
      { id: 'EST 389', n: 'Taller de Titulacion', area: 'grad', hp: 12, hnp: 14, ht: 520, cred: 13, pre: ['Hasta 7o Semestre'] },
      { id: 'OPT II', n: 'Optativa II', area: 'opt', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
      { id: 'OPT III', n: 'Optativa III', area: 'opt', hp: 8, hnp: 2, ht: 200, cred: 5, pre: [] },
    ],
  },
]

export const electivesAreas = [
  {
    title: 'Estadistica Aplicada',
    icon: PieChart,
    items: [
      { id: 'EST 382', n: 'Visualizacion de Graficos', pre: 'Estadistica Computacional', ht: 200, cr: 5 },
      { id: 'EST 383', n: 'Diseno y Proc. Est. II', pre: 'Muestreo II', ht: 200, cr: 5 },
      { id: 'EST 384', n: 'Control Est. Calidad', pre: 'Inferencia II', ht: 200, cr: 5 },
      { id: 'EST 385', n: 'Estadistica Actuarial', pre: 'Inferencia II', ht: 200, cr: 5 },
      { id: 'EST 386', n: 'Epidemiologia Estadistica', pre: 'Inferencia II', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Area Matematica',
    icon: Sigma,
    items: [
      { id: 'MAT 252', n: 'Analisis I', pre: 'Hasta 4o Semestre', ht: 200, cr: 5 },
      { id: 'MAT 253', n: 'Topologia General', pre: 'Analisis I', ht: 200, cr: 5 },
      { id: 'MAT 382', n: 'Teoria de la Medida', pre: 'Analisis I', ht: 200, cr: 5 },
      { id: 'MAT 262', n: 'Analisis Complejo I', pre: 'Hasta 4o Semestre', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Ingenieria Geografica',
    icon: Map,
    items: [
      { id: 'MAP 202', n: 'Cartografia', pre: 'Computacion Est. I', ht: 200, cr: 5 },
      { id: 'GEO 304', n: 'Geografia Regional', pre: 'Cartografia', ht: 200, cr: 5 },
      { id: 'GEO 305', n: 'Sistemas de Inf. Geografica', pre: 'Geografia regional', ht: 400, cr: 10 },
      { id: 'GOE 406', n: 'Metodos Est. Geografia', pre: 'Cartografia', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Ingenieria Industrial',
    icon: Factory,
    items: [
      { id: 'IND 844', n: 'Gestion de la Calidad', pre: 'Hasta 4o Semestre', ht: 200, cr: 5 },
      { id: 'IND 621', n: 'Marketing', pre: 'Metodologia Inv.', ht: 400, cr: 10 },
      { id: 'IND 481', n: 'Calidad Industrial', pre: 'Hasta 4o Semestre', ht: 200, cr: 5 },
      { id: 'IND 723', n: 'Eval. de Proyectos I', pre: 'Inv. Operativa I', ht: 200, cr: 5 },
      { id: 'IND 823', n: 'Eval. de Proyectos II', pre: 'Eval. Proyectos I', ht: 200, cr: 5 },
    ],
  },
  {
    title: 'Area Economia',
    icon: TrendingUp,
    items: [
      { id: 'TE-302', n: 'Microeconomia I', pre: 'Hasta 4o Semestre', ht: 200, cr: 5 },
      { id: 'TE-303', n: 'Microeconomia II', pre: 'Microeconomia I', ht: 200, cr: 5 },
      { id: 'TE-313', n: 'Macroeconomia I', pre: 'Microeconomia I', ht: 200, cr: 5 },
      { id: 'C-115', n: 'Econometria I', pre: 'Hasta 4o Semestre', ht: 200, cr: 5 },
      { id: 'C-116', n: 'Econometria II', pre: 'Econometria I', ht: 200, cr: 5 },
    ],
  },
]

export const areaColors = {
  math: '#475569',
  stats: '#92400e',
  prog: '#115e59',
  grad: '#3730a3',
  opt: '#7c3aed',
  other: '#94a3b8',
}

export const areaLegend = [
  { label: 'Calculo y Algebra', color: areaColors.math },
  { label: 'Teoria Estadistica', color: areaColors.stats },
  { label: 'Data y Programacion', color: areaColors.prog },
  { label: 'Titulacion', color: areaColors.grad },
]

export const planMeta = {
  levelLabel: 'Niveles',
  semesterHoursLabel: 'Horas semestre',
  semesterCreditsLabel: 'Creditos',
  pdfLabel: 'PDF oficial',
  downloadIcon: Download,
  accentIcon: Award,
}

export const gridMeta = {
  eyebrow: 'Arquitectura de correlatividad',
  title: ['Malla', 'Curricular'],
  interactionHint: 'Pasa el cursor por una materia para ver su ruta de prerrequisitos y dependencias.',
  icon: MousePointer2,
}

export const electivesMeta = {
  title: ['Materias Optativas', 'Especializacion de Perfil'],
  icon: ListPlus,
}

export const curriculumCalendarMeta = {
  tag: 'Cronograma principal',
  title: 'Calendario Academico II/2026',
  sub: 'Fechas oficiales para mesa de examen, desarrollo del curso regular y cierre academico de gestion.',
  resolution: 'Resolucion FCPN.CE.DA.COM N 06/2026',
  term: 'II/2026',
  termLabel: 'Semestre regular',
  noticeTitle: 'Comunicado Institucional',
  noticeText:
    'La Direccion Academica de la Carrera de Estadistica pone en conocimiento de docentes y estudiantes el cronograma de actividades correspondiente a la gestion II/2026, en cumplimiento del calendario academico facultativo y disposiciones internas vigentes.',
  noticeIcon: CalendarClock,
  seal: { symbol: 'T', label: 'Timeline', value: 'Acad' },
  examSession: { title: 'Primera Mesa de Examen 2026', icon: Timer },
  downloadCard: {
    title: 'Documento Oficial',
    caption: 'Descarga el PDF sellado por Direccion Academica.',
    ctaLabel: 'PDF 06/2026',
    icon: FileText,
  },
}

export const examSessionData = [
  { event: 'Inscripciones', date: '21 de julio - 22 de julio' },
  { event: 'Aplicacion del examen', date: '28 de julio - 29 de julio' },
  { event: 'Notas en el SSA', date: '28 de julio - 29 de julio' },
  { event: 'Firma de actas en Kardex', date: '30 de julio' },
  { event: 'Notas en Vicedecanato', date: '31 de julio' },
]

export const regularCourseData = [
  { event: 'Inscripciones (*)', date: '26 de julio - 29 de julio', type: 'admin', icon: FileEdit },
  { event: 'Inicio de la actividad academica', date: '30 de julio', type: 'academic', icon: BookOpen },
  { event: 'Desarrollo de la actividad academica', date: '30 de julio - 12 de diciembre', type: 'academic', icon: Layers },
  { event: 'Retiro y/o adicion de materias', date: '18 de agosto - 22 de agosto', type: 'admin', icon: FileText },
  { event: 'Primer parcial', date: '22 de septiembre - 26 de septiembre', type: 'exam', icon: PenTool },
  { event: 'Segundo parcial', date: '24 de noviembre - 28 de noviembre', type: 'exam', icon: PenTool },
  { event: 'Examen final', date: '1 de diciembre - 5 de diciembre', type: 'exam', icon: CheckSquare },
  { event: 'Examen recuperatorio', date: '8 de diciembre - 12 de diciembre', type: 'examAlert', icon: AlertTriangle },
  { event: 'Notas en el SSA', date: '15 de diciembre - 17 de diciembre', type: 'closing', icon: Calculator },
  { event: 'Firma de actas en Kardex', date: '15 de diciembre - 18 de diciembre', type: 'closing', icon: CheckCircle2 },
  { event: 'Notas en Vicedecanato', date: '19 de diciembre', type: 'closing', icon: ShieldCheck },
]

export const eventTypeStyles = {
  admin: { color: 'bg-blue-600', border: 'border-blue-200', text: 'text-blue-800', label: 'Administrativo' },
  academic: { color: 'bg-teal-600', border: 'border-teal-200', text: 'text-teal-800', label: 'Academico' },
  exam: { color: 'bg-[#ea580c]', border: 'border-orange-200', text: 'text-[#c2410c]', label: 'Evaluacion' },
  examAlert: { color: 'bg-red-600', border: 'border-red-200', text: 'text-red-800', label: 'Recuperatorio' },
  closing: { color: 'bg-slate-700', border: 'border-slate-200', text: 'text-slate-800', label: 'Cierre gestion' },
}

export const specialEnrollmentNote = {
  title: '(*) Inscripcion de Casos Especiales',
  description:
    'Corresponde a una inscripcion excepcional para estudiantes en tramites de carrera paralela, traspaso, convalidacion de materias u otros casos que la Comision Academica considere pertinentes.',
  icon: AlertTriangle,
  detailIcon: Info,
}

export const footerMeta = {
  brand: 'Estadistica — UMSA',
  subtitle: 'Excelencia Academica CEUB',
  metrics: ['Sigma = 9,600 HRS', 'R2 = 0.99 QUALITY'],
  icon: Layers,
}

export const curriculumUtilities = {
  hourIcon: Clock,
  codeIcon: Code,
  semesterIcon: Calculator,
}

export const flatSubjects = curriculumData.flatMap((sem) => sem.subjects)

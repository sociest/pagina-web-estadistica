import {
  AlertCircle,
  BellRing,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  FileSearch,
  GraduationCap,
  History,
  Landmark,
  Monitor,
  PenTool,
  Sigma,
  Filter,
  Send,
  TrendingUp,
  Users,
} from 'lucide-react'

export const studentsCallsHero = {
  eyebrow: 'Portal de auxiliares',
  title: ['Convocatorias para', 'Auxiliaturas'],
  description:
    'Consulta convocatorias vigentes, requisitos y cronogramas oficiales para postular a auxiliaturas de docencia y laboratorio.',
  leftShape: Sigma,
  rightShape: Monitor,
}

export const studentsCallsFilters = ['Todas', 'Abierta', 'Proximamente', 'Concluida']

export const studentsCalls = [
  {
    id: 'docencia-2026-2',
    title: 'Auxiliatura de Docencia - Gestion II/2026',
    desc: 'Seleccion de auxiliares para areas de Matematicas, Probabilidad, Estadistica Aplicada y Programacion.',
    pubDate: '15 de Abril, 2026',
    closeDate: '30 de Abril, 2026',
    status: 'Abierta',
    icon: GraduationCap,
    plazas: 18,
    requirements: [
      'Matricula vigente de la gestion actual.',
      'Fotocopia de cedula de identidad.',
      'Record academico actualizado y firmado.',
      'Plan de trabajo preliminar para la materia.',
    ],
    steps: [
      {
        t: 'Revision de convocatoria',
        d: 'Verifica criterios de promedio minimo, materias vencidas y plazos oficiales.',
      },
      {
        t: 'Preparacion de file',
        d: 'Organiza kardex, CI, matricula y documentos respaldatorios solicitados.',
      },
      {
        t: 'Entrega en secretaria',
        d: 'Registra tu postulacion en ventanilla y recibe numero de seguimiento.',
      },
      {
        t: 'Evaluacion y resultados',
        d: 'Participa en examen/entrevista y consulta resolucion publicada.',
      },
    ],
  },
  {
    id: 'lab-2026-2',
    title: 'Auxiliatura de Laboratorio - Gestion II/2026',
    desc: 'Convocatoria para apoyo tecnico en laboratorios de software estadistico (R, Python, SPSS).',
    pubDate: '18 de Abril, 2026',
    closeDate: '05 de Mayo, 2026',
    status: 'Proximamente',
    icon: Monitor,
    plazas: 6,
    requirements: [
      'Experiencia demostrable en herramientas de analisis de datos.',
      'Aprobacion de materias de programacion y estadistica computacional.',
      'Disponibilidad horaria para practicas guiadas.',
    ],
    steps: [
      {
        t: 'Publicacion oficial',
        d: 'La convocatoria se habilita con lineamientos completos en secretaria.',
      },
      {
        t: 'Postulacion digital',
        d: 'Carga de requisitos y validacion inicial por comision academica.',
      },
      {
        t: 'Prueba tecnica',
        d: 'Resolucion de casos practicos de laboratorio y soporte a estudiantes.',
      },
    ],
  },
  {
    id: 'docencia-2026-1',
    title: 'Auxiliatura de Docencia - Gestion I/2026',
    desc: 'Proceso concluido de seleccion para el primer semestre de la gestion 2026.',
    pubDate: '10 de Noviembre, 2025',
    closeDate: '25 de Noviembre, 2025',
    status: 'Concluida',
    icon: History,
    plazas: 15,
    requirements: [
      'Proceso cerrado; consultar archivo historico para referencia.',
    ],
    steps: [
      {
        t: 'Cierre administrativo',
        d: 'Resultados consolidados y actas remitidas al consejo de carrera.',
      },
    ],
  },
]

export const studentsCallsSteps = [
  {
    title: 'Revision',
    desc: 'Descarga la convocatoria y valida que cumples requisitos academicos.',
    icon: FileSearch,
  },
  {
    title: 'Preparacion',
    desc: 'Organiza kardex, CI, matricula y documentos complementarios.',
    icon: ClipboardList,
  },
  {
    title: 'Entrega',
    desc: 'Presenta file en secretaria dentro del plazo oficial.',
    icon: Send,
  },
  {
    title: 'Evaluacion',
    desc: 'Sigue cronograma de examenes y publicacion de resultados.',
    icon: PenTool,
  },
]

export const studentsCallsRequirements = [
  {
    title: 'Condicion academica',
    desc: 'Ser estudiante regular de la Carrera de Estadistica con matricula vigente.',
    icon: Landmark,
    tone: 'blue',
  },
  {
    title: 'Rendimiento destacado',
    desc: 'Aprobar la materia objetivo con nota sobresaliente segun convocatoria.',
    icon: TrendingUp,
    tone: 'orange',
  },
  {
    title: 'Documentacion base',
    icon: ClipboardList,
    tone: 'slate',
    list: [
      'Nota de postulacion dirigida a Direccion de Carrera.',
      'Record academico y kardex actualizados.',
      'Curriculum Vitae segun formato FCPN.',
      'Fotocopia de CI y matricula vigente.',
    ],
  },
]

export const studentsCallsUi = {
  filterIcon: Filter,
  alertIcon: BellRing,
  alertActionIcon: BellRing,
  cardViewIcon: Eye,
  cardDownloadIcon: Download,
  cardStatusIcon: AlertCircle,
  requirementCheckIcon: CheckCircle2,
  supportIcon: Users,
}

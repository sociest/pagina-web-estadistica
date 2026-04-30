import {
  BrainCircuit,
  Briefcase,
  CalendarCheck,
  ClipboardEdit,
  Factory,
  FileText,
  Folder,
  Globe,
  Layers,
  ListOrdered,
  Map,
  PieChart,
  Sigma,
  Target,
  TrendingUp,
} from 'lucide-react'

export const admissionsHero = {
  badge: 'Convocatoria abierta 2026',
  title: ['Ingreso a la', 'ciencia de', 'Datos.'],
  description:
    'Tu futuro como arquitecto de la evidencia cientifica comienza aqui. Conoce las vias oficiales de admision a la Carrera de Estadistica de la UMSA.',
  stats: {
    icon: Sigma,
    label: 'Cupos por gestion',
    value: '150+',
    channels: ['PSA', 'PRE-U'],
  },
}

export const regularAdmissions = {
  tag: 'Vias de acceso',
  title: 'Modalidades Regulares',
  sub: 'Las dos rutas principales administradas por la Facultad de Ciencias Puras y Naturales para bachilleres.',
  cards: [
    {
      id: 'psa',
      icon: ClipboardEdit,
      badge: 'Evaluacion directa',
      title: 'Prueba de Suficiencia Academica (PSA)',
      description:
        'Examen de dispensacion administrado por la FCPN. Evalua aptitudes logico-matematicas y conocimientos exactos en una sola prueba de alto rigor.',
      topics: [
        'Matematica (Calculo y Algebra)',
        'Fisica',
        'Quimica',
        'Informatica basica',
      ],
      cta: {
        label: 'Convocatoria PSA FCPN',
        href: 'https://daf.fcpn.edu.bo/psa/',
      },
      style: 'blue',
    },
    {
      id: 'preu',
      icon: BrainCircuit,
      badge: 'Formacion continua',
      title: 'Curso Preparatorio Preuniversitario (Pre-U)',
      description:
        'Programa academico de nivelacion dictado por la FCPN. Combina clases teoricas y evaluaciones parciales para preparar al estudiante al rigor universitario.',
      highlights: ['Duracion: 10-12 semanas', 'Evaluaciones parciales'],
      cta: {
        label: 'Portal Curso Pre-U',
        href: 'https://daf.fcpn.edu.bo/cursopreparatorio/',
      },
      style: 'orange',
    },
  ],
}

export const generalRequirements = {
  title: ['Documentacion', 'General'],
  description:
    'Documentos obligatorios que todo postulante regular debe presentar en ventanillas de Kardex una vez aprobada la modalidad de ingreso (PSA o Pre-U).',
  items: [
    'Fotocopia legalizada del Titulo de Bachiller (o libreta de 6to si esta en tramite).',
    'Fotocopia simple de Cedula de Identidad vigente.',
    'Certificado de Nacimiento original computarizado.',
    'Comprobante de deposito bancario original (Canje de Valores).',
    'Dos fotografias tamano 3x4 con fondo celeste o plomo.',
    'Formulario de matriculacion web impreso y firmado.',
  ],
}

export const admissionsTimeline = {
  tag: 'Planificacion cronologica',
  title: 'Gestiones de Admision',
  sub: 'La UMSA habilita dos periodos de ingreso al ano. Conoce las etapas operativas para las gestiones regulares.',
  periods: [
    {
      id: 's1',
      badge: 'Primera convocatoria',
      title: 'Semestre I / 2026',
      summary: 'Ingreso programado para el inicio de clases en febrero/marzo.',
      badgeStyle: 'orange',
      rows: [
        ['Inscripcion Pre-U', 'Agosto - Sept. (ano previo)'],
        ['Inscripcion PSA', 'Noviembre - Diciembre'],
        ['Entrega de documentos', 'Enero 2026'],
        ['Matriculacion Kardex', 'Febrero 2026'],
      ],
    },
    {
      id: 's2',
      badge: 'Segunda convocatoria',
      title: 'Semestre II / 2026',
      summary: 'Ingreso programado para el inicio de clases en agosto.',
      badgeStyle: 'blue',
      rows: [
        ['Inscripcion Pre-U', 'Marzo - Abril'],
        ['Inscripcion PSA', 'Junio - Julio'],
        ['Entrega de documentos', 'Julio (ultima semana)'],
        ['Matriculacion Kardex', 'Agosto 2026'],
      ],
    },
  ],
}

export const specialModalities = [
  {
    id: 'paralelas',
    title: 'Carreras Paralelas',
    icon: Layers,
    desc: 'Para estudiantes regulares de la UMSA que deseen cursar Estadistica en simultaneo con su carrera de origen.',
    folder: 'Guindo',
    horario: '09:00 a 12:00 (Ventanillas 6 y 8)',
    hasTable: true,
    reqs: [
      'Carta dirigida a la Jefa Div. Gestiones con carrera origen/destino, C.I. y telefono.',
      'Historial academico original firmado por el Director de Carrera.',
      'Promedio minimo de materias aprobadas: 65% (o 80% del plan de estudios).',
      'Plan de estudios con firma y sello de la carrera de origen.',
      'Fotocopia simple de la ultima matricula universitaria.',
      'Fotocopia simple de Diploma de Bachiller y C.I.',
    ],
    proc: [
      'Recepcion en ventanilla 8 (C.I. pares) y ventanilla 6 (C.I. impares).',
      'Presentar documentacion en folder color guindo.',
      'Resultados publicados en vitrinas de la Division de Gestiones y portal UMSA.',
    ],
  },
  {
    id: 'profesionales',
    title: 'Admision de Profesionales',
    icon: Briefcase,
    desc: 'Ingreso directo para profesionales universitarios, militares/policias, maestros normalistas y titulados tecnicos por convenio.',
    folder: 'Naranja',
    horario: '09:00 a 10:00 (Ventanilla 8)',
    hasTable: true,
    reqs: [
      'Carta de solicitud dirigida a la Jefa Div. Gestiones.',
      'Fotocopia legalizada de Diploma Academico o Titulo en Provision Nacional.',
      'Fotocopia simple del Certificado de Calificacion de Grado Academico.',
      'Fotocopia legalizada de Diploma de Bachiller.',
      'Certificado de Nacimiento original y fotocopia simple de C.I.',
      'Un juego adicional de fotocopias simples de toda la documentacion.',
    ],
    proc: [
      'Presentar documentos en folder color naranja en ventanilla 8.',
      'Adquirir y llenar Formulario de Admisiones Especiales en Caja Recaudadora.',
      'La documentacion se enviara a la carrera para informe y aprobacion.',
      'Con informe favorable, recabar Orden de Compra de Matricula y pagar en entidad autorizada.',
    ],
  },
  {
    id: 'cambio_carrera',
    title: 'Cambio de Carrera (Interno)',
    icon: Target,
    desc: 'Movilidad estudiantil interna para universitarios UMSA que deseen trasladarse definitivamente a Estadistica.',
    folder: 'Oficial',
    horario: '09:00 a 10:00',
    hasTable: true,
    reqs: [
      'Matricula obtenida en una de las tres ultimas gestiones.',
      'Historial academico original: minimo 2 anuales o 4 semestrales aprobadas.',
      'Fotocopia simple de C.I. y Titulo de Bachiller.',
      'Fotocopia del plan de estudios de la carrera de origen.',
      'Certificacion de Biblioteca (origen) de no adeudo de libros.',
    ],
    proc: [
      'Recepcion y seleccion segun reglamento y requisitos FCPN.',
      'Comunicacion de procedencia al concluir seleccion.',
      'Estudiantes aceptados compran Formulario 010 de Cambio de Carrera.',
      'Con firmas autorizadas se emite orden de matriculacion en Estadistica.',
    ],
  },
  {
    id: 'traspasos_ext',
    title: 'Traspasos (Sistema y Exterior)',
    icon: Globe,
    desc: 'Movilidad para estudiantes de otras universidades del sistema boliviano o del exterior.',
    folder: 'Oficial',
    horario: 'Segun cronograma',
    hasTable: false,
    reqs: [
      'Matricula vigente en la universidad de origen.',
      'Historial academico original (minimo 4 materias semestrales aprobadas).',
      'Fotocopia de C.I. y Diploma de Bachiller.',
      'Certificados de no adeudo bibliografico.',
      'Exterior: documentos legalizados por Consulado Boliviano y Cancilleria.',
    ],
    proc: [
      'Carta de solicitud a la Jefa Div. Gestiones especificando carrera y universidad origen/destino.',
      'Adquirir formulario de traspaso tras autorizacion.',
      'Someterse a proceso de convalidacion de materias en la FCPN.',
    ],
  },
]

export const specialMeta = {
  title: ['Casos', 'Especiales'],
  entity: 'Division de Gestiones, Admisiones y Registros UMSA',
  requisitesIcon: FileText,
  procedureIcon: ListOrdered,
  folderIcon: Folder,
}

export const admissionsVisuals = {
  decorativeIcons: {
    regularA: ClipboardEdit,
    regularB: BrainCircuit,
    requirements: FileText,
    timeline: CalendarCheck,
  },
  electivesPalette: [
    { label: 'Analitica aplicada', icon: PieChart },
    { label: 'Proyeccion economica', icon: TrendingUp },
    { label: 'Rutas geograficas', icon: Map },
    { label: 'Entorno industrial', icon: Factory },
  ],
}

import {
  Award,
  Building2,
  CheckCircle2,
  Download,
  FileSignature,
  GraduationCap,
  Microscope,
  Presentation,
  Sigma,
  Star,
  Target,
} from 'lucide-react'

export const graduationHero = {
  icon: GraduationCap,
  eyebrow: 'Grado academico',
  title: ['Modalidades de', 'Graduacion'],
  highlights: ['Resolucion CEUB', 'Licenciatura'],
}

export const graduationWorkshop = {
  badge: 'Octavo semestre',
  title: ['El Taller de Titulacion', 'es el punto de partida'],
  description:
    'Segun el Plan de Estudios 2021, todo estudiante debe inscribirse al Taller de Titulacion en el ultimo semestre. En esta asignatura se disena, ajusta y aprueba el Perfil de Grado.',
  ctaLabel: 'Ver en malla curricular',
  ctaHref: '/pregrado/malla-curricular',
  icon: Sigma,
}

export const processSteps = [
  {
    icon: CheckCircle2,
    title: '1. Taller de Titulacion',
    desc: 'Inscripcion en 8o semestre para elaboracion y aprobacion del Perfil de Grado.',
  },
  {
    icon: FileSignature,
    title: '2. Aprobacion de Perfil',
    desc: 'Asignacion oficial de Tutor y Resolucion de aprobacion del H. Consejo de Carrera.',
  },
  {
    icon: Microscope,
    title: '3. Desarrollo',
    desc: 'Investigacion, redaccion o ejecucion del trabajo practico bajo seguimiento tutorial.',
  },
  {
    icon: Presentation,
    title: '4. Defensa Publica',
    desc: 'Sustentacion oral del trabajo final ante Tribunal Examinador calificado.',
  },
]

export const graduationModalitiesMeta = {
  tag: 'Opciones academicas',
  title: 'Las 4 vias de titulacion',
  sub: 'Explora las modalidades oficialmente reconocidas por la UMSA para obtener el grado de Licenciado en Estadistica.',
  seal: {
    symbol: 'mu',
    label: 'NIVEL',
    value: 'EXCELENCIA',
  },
  ctaLabel: 'Descargar reglamento',
  ctaIcon: Download,
}

export const graduationModalities = [
  {
    id: 'tesis',
    title: 'Tesis de Grado',
    icon: Microscope,
    pointIcon: CheckCircle2,
    tag: 'Investigacion cientifica',
    desc: 'Trabajo de investigacion original que aporta nuevo conocimiento cientifico, metodologico o tecnico al campo de la estadistica y ciencia de datos.',
    points: [
      'Aporte metodologico original al area.',
      'Rigor cientifico y comprobacion de hipotesis.',
      'Defensa publica ante tribunal examinador.',
    ],
    color: '#00447e',
  },
  {
    id: 'trabajo_dirigido',
    title: 'Trabajo Dirigido',
    icon: Building2,
    pointIcon: CheckCircle2,
    tag: 'Experiencia profesional',
    desc: 'Ejecucion de trabajo practico en instituciones publicas o privadas con convenios interinstitucionales vigentes.',
    points: [
      'Resolucion de problemas reales en campo.',
      'Supervision por tutor academico y tutor institucional.',
      'Duracion regulada y presentacion de informe final.',
    ],
    color: '#0f766e',
  },
  {
    id: 'proyecto',
    title: 'Proyecto de Grado',
    icon: Target,
    pointIcon: CheckCircle2,
    tag: 'Aplicacion practica',
    desc: 'Desarrollo de solucion estadistica, modelo predictivo o sistema de informacion aplicado a necesidades concretas del entorno.',
    points: [
      'Enfoque en viabilidad y aplicacion practica.',
      'Desarrollo de sistemas o modelos funcionales.',
      'Defensa de factibilidad tecnica y economica.',
    ],
    color: '#c2410c',
  },
  {
    id: 'excelencia',
    title: 'Excelencia Academica',
    icon: Award,
    pointIcon: CheckCircle2,
    tag: 'Merito estudiantil',
    desc: 'Modalidad de titulacion directa, eximida de defensa publica, que premia alto rendimiento academico y regularidad durante la carrera.',
    points: [
      'Promedio general sobresaliente segun reglamento.',
      'Culminacion en el tiempo establecido (8 semestres).',
      'Sin reprobaciones ni abandonos injustificados.',
    ],
    color: '#b45309',
  },
]

export const excellenceBanner = {
  eyebrow: 'Reconocimiento institucional',
  title: 'Graduacion por Excelencia',
  quote:
    'La Universidad Mayor de San Andres premia el esfuerzo constante. Si tu promedio supera la media exigida y concluiste sin reprobaciones, el H. Consejo de Carrera puede eximir la defensa publica.',
  ctaLabel: 'Revisar requisitos',
  icon: Star,
  accentIcon: GraduationCap,
}

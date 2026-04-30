import {
  Book,
  FileSignature,
  Globe,
  GraduationCap,
  Microscope,
  Landmark,
  Users,
  Briefcase,
  ShieldCheck,
  ScrollText,
} from 'lucide-react'

export const regulationsHero = {
  eyebrow: 'Normativa Institucional',
  title: ['Repositorio', 'y', 'Marco Legal'],
  description:
    'Compendio normativo que rige la vida academica, administrativa e investigativa de la Carrera de Estadistica, garantizando el respeto a la autonomia universitaria.',
  chips: [
    { symbol: '¶', label: 'Estatutos', subtitle: 'Universitarios' },
    { symbol: 'ℓ', label: 'Garantia', subtitle: 'Academica' },
  ],
  imageUrl:
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200',
}

export const universityFramework = [
  {
    art: 'Art. 1',
    title: 'Nacional (CEUB)',
    sub: 'Estatuto Organico de la Universidad Boliviana',
    desc: 'Base legal de la autonomia y del sistema universitario en Bolivia.',
    icon: Globe,
  },
  {
    art: 'Art. 2',
    title: 'Estudiantil',
    sub: 'Regimen Estudiantil de la Universidad Boliviana',
    desc: 'Derechos, deberes, becas y procesos disciplinarios del estudiante.',
    icon: GraduationCap,
  },
  {
    art: 'Art. 3',
    title: 'Docente',
    sub: 'Regimen Academico Docente',
    desc: 'Normativa sobre la carrera docente, escalafon y evaluacion continua.',
    icon: Users,
  },
  {
    art: 'Art. 4',
    title: 'Institucional',
    sub: 'Estatuto Organico de la UMSA',
    desc: 'Norma matriz propia de la Universidad Mayor de San Andres.',
    icon: Landmark,
  },
]

export const internalRegulations = [
  {
    id: 'academica',
    label: 'Gestion Academica',
    icon: Book,
    symbol: '∇',
    items: [
      {
        name: 'Reglamento de Convalidacion',
        desc: 'Requisitos tecnicos para traspasos y validacion de materias aprobadas.',
      },
      {
        name: 'Mesa de Examen',
        desc: 'Normas para solicitar examenes de ultima instancia y evaluacion extraordinaria.',
      },
      {
        name: 'Evaluacion del Aprendizaje',
        desc: 'Criterios de calificacion, asistencia y aprobacion por competencias.',
      },
      {
        name: 'Reglamento Interno de la Carrera',
        desc: 'Normas de convivencia y organizacion interna del estamento.',
      },
    ],
  },
  {
    id: 'graduacion',
    label: 'Modalidades de Graduacion',
    icon: FileSignature,
    symbol: '∆',
    items: [
      {
        name: 'Guia Metodologica General',
        desc: 'Estandares oficiales de formato y redaccion para trabajos finales de grado.',
      },
      {
        name: 'Reglamento de Tesis de Grado',
        desc: 'Protocolo para investigaciones de aporte cientifico y defensa.',
      },
      {
        name: 'Reglamento de Trabajo Dirigido',
        desc: 'Normativa para pasantias con convenio e impacto institucional.',
      },
      {
        name: 'Reglamento de Proyecto de Grado',
        desc: 'Guia para resolver problemas practicos en el entorno laboral.',
      },
    ],
  },
  {
    id: 'investigacion',
    label: 'Investigacion (IETA)',
    icon: Microscope,
    symbol: 'Σ',
    items: [
      {
        name: 'Reglamento Interno IETA',
        desc: 'Normas que rigen el funcionamiento del Instituto de Estadistica Teorica y Aplicada.',
      },
      {
        name: 'Congreso Interno',
        desc: 'Resoluciones y actas de las maximas instancias de decision cientifica.',
      },
      {
        name: 'Publicaciones y Repositorio',
        desc: 'Lineamientos para gestion editorial, citacion y acceso abierto.',
      },
      {
        name: 'Comites Tecnicos',
        desc: 'Criterios de conformacion y seguimiento de comites de evaluacion.',
      },
    ],
  },
]

export const resolutionHighlight = {
  eyebrow: 'Patrimonio Documental',
  title: 'Resolucion de Fundacion',
  description:
    'Documento historico que oficializa la creacion de la carrera en la Facultad de Ciencias Puras y Naturales, estableciendo sus bases academicas y administrativas.',
  imageUrl:
    'https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&q=80&w=800',
}

export const regulationBenefits = [
  {
    title: 'Seguridad Juridica',
    description: 'Normas claras para estudiantes, docentes y administrativos en cada proceso academico.',
    symbol: 'A1',
    icon: ShieldCheck,
  },
  {
    title: 'Transparencia de Procesos',
    description: 'Trazabilidad de decisiones mediante resoluciones, actas y reglamentos vigentes.',
    symbol: 'A2',
    icon: ScrollText,
  },
  {
    title: 'Proyeccion Profesional',
    description: 'Regulaciones que fortalecen practicas, pasantias y modalidades de graduacion aplicadas.',
    symbol: 'A3',
    icon: Briefcase,
  },
]

export const regulationsCta = {
  label: 'Repositorio Normativo Actualizado',
}

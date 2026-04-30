import {
  Activity,
  Award,
  CalendarDays,
  CheckCircle2,
  Database,
  FileText,
  Globe,
  Info,
  MapPin,
  Microscope,
  Phone,
  Search,
  UserCheck,
  Users,
} from 'lucide-react'

export const investigacionProyectosHero = {
  tag: 'INSTITUTO DE ESTADISTICA TEORICA Y APLICADA',
  title: ['INVESTIGACION CIENTIFICA', 'Y PROYECTOS'],
  subtitle:
    'EL IETA ES EL NUCLEO DE PRODUCCION CIENTIFICA DE LA CARRERA. GENERAMOS CONOCIMIENTO ESTRATEGICO Y SOLUCIONES ANALITICAS PARA EL DESARROLLO SOCIAL, ECONOMICO Y TECNOLOGICO DEL PAIS.',
  ctaPrimary: { label: 'EXPLORAR REPOSITORIO', href: '#proyectos', icon: Search },
  ctaSecondary: {
    label: 'VER REGLAMENTO IETA',
    href: 'https://ieta.umsa.bo/reglamento-interno',
    icon: FileText,
  },
}

export const investigacionProyectosContact = [
  {
    label: 'CAMPUS UNIVERSITARIO',
    value: 'BLOQUE FCPN, 1ER PISO. CALLE 27 DE COTA COTA.',
    icon: MapPin,
    iconClassName: 'text-[#ea580c]',
  },
  {
    label: 'LINEAS DE CONTACTO',
    value: '2612824 - 2612844',
    icon: Phone,
    iconClassName: 'text-blue-300',
  },
]

export const investigacionResearchAreas = {
  tag: 'PILARES FUNDAMENTALES',
  title: 'LINEAS DE INVESTIGACION',
  subtitle:
    'AREAS ESTRATEGICAS APROBADAS POR EL HONORABLE CONSEJO FACULTATIVO (RES. N 1323/2022) QUE GUIAN LA PRODUCCION CIENTIFICA DEL IETA.',
  items: [
    'Series de Tiempo',
    'Demografia',
    'Estadistica Bayesiana',
    'Machine Learning',
    'Analisis Multivariado',
    'Muestreo',
    'Optimizacion',
    'Bioestadistica',
    'Estadistica No Parametrica',
    'Modelos Lineales',
  ],
}

export const investigacionFeaturedProjects = {
  title: ['PROYECTOS DE', 'IMPACTO'],
  subtitle:
    'INVESTIGACIONES DESTACADAS QUE APORTAN VALOR DIRECTO A LA SOCIEDAD BOLIVIANA.',
  icon: Award,
  cards: [
    {
      category: 'SALUD PUBLICA',
      title: 'MODELACION DE DATOS COVID-19 EN EL MUNDO',
      summary: 'APLICACION DE SERIES DE TIEMPO UNIVARIADAS PARA PRONOSTICAR CASOS NUEVOS.',
      author: 'M.SC. NICOLAS CHAVEZ',
      icon: Activity,
      tone: 'red',
    },
    {
      category: 'SOCIO-ECONOMIA',
      title: 'EDUCACION Y POBREZA URBANA Y RURAL',
      summary: 'COMPARACION MULTIDIMENSIONAL EN EL DEPARTAMENTO DE LA PAZ PARA POLITICAS PUBLICAS.',
      author: 'LIC. RAUL DELGADO',
      icon: Globe,
      tone: 'blue',
    },
    {
      category: 'DEMOGRAFIA',
      title: 'DETERMINANTES DE FECUNDIDAD EN BOLIVIA',
      summary: 'ANALISIS MEDIANTE MODELOS LINEALES GENERALIZADOS PARA ENTENDER FACTORES DEMOGRAFICOS.',
      author: 'M.SC. DINDO VALDEZ',
      icon: Database,
      tone: 'teal',
    },
  ],
}

export const investigacionMemoriesMeta = {
  tag: 'REPOSITORIO OFICIAL',
  title: 'MEMORIAS DE INVESTIGACION',
  subtitle:
    'EXPLORA LOS PROYECTOS DESARROLLADOS POR LOS DOCENTES INVESTIGADORES DEL IETA. SELECCIONA UN PROYECTO PARA VER LOS DETALLES EN EL PANEL LATERAL.',
  searchPlaceholder: 'Buscar por autor o titulo...',
  years: [2024, 2023],
  yearNotes: {
    2024: 'APROBADOS POR RES. HCF N 812/2024',
    2023: 'APROBADOS POR RES. HCF N 1049/2024',
  },
  emptyTitle: 'NO HAY PROYECTOS QUE COINCIDAN',
  emptyDescription: 'AJUSTA EL FILTRO DE BUSQUEDA O CAMBIA LA GESTION.',
  panelHintTitle: 'VISOR DE PROYECTOS',
  panelHintDescription:
    'HAZ CLIC EN CUALQUIER PROYECTO DE LA LISTA PARA VISUALIZAR EL RESUMEN, RESULTADOS Y DESCARGA DEL DOCUMENTO.',
  panelHintIcon: Info,
  detailAbstractLabel: 'RESUMEN EJECUTIVO',
  detailResultsLabel: 'RESULTADOS CLAVE',
  detailAuthorPrefix: 'AUTOR',
  detailButtonLabel: 'DESCARGAR PDF DE INVESTIGACION',
  defaultDownloadHref: '#',
  detailAuthorIcon: UserCheck,
  detailAbstractIcon: FileText,
  detailResultsIcon: CheckCircle2,
  yearsIcon: CalendarDays,
}

export const investigacionProjectMemories = [
  {
    id: '2024-1',
    year: 2024,
    title: 'Modelacion de las series poblacional estudiantil de la UMSA y de la FCPN con metodos estadisticos',
    author: 'M.Sc. Nicolas Chavez Quisbert',
    status: 'En Publicacion',
    abstract:
      'Estudio predictivo enfocado en modelar el crecimiento y comportamiento de la poblacion estudiantil universitaria mediante tecnicas de series de tiempo para optimizar asignacion de recursos academicos.',
    results: [
      'Proyeccion de crecimiento estudiantil a cinco anos.',
      'Identificacion de cuellos de botella en procesos de admision.',
    ],
    resolution: 'Res. HCF N 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-2',
    year: 2024,
    title: 'Comparacion de la educacion y la pobreza en el area urbana y rural del departamento de La Paz',
    author: 'Lic. Raul Delgado Alvarez',
    status: 'Concluido',
    abstract:
      'Analisis comparativo bidimensional que evalua el impacto del nivel educativo en los indices de pobreza estructural, diferenciando realidades urbanas y rurales del departamento.',
    results: [
      'Brecha del 40% detectada en acceso a educacion rural.',
      'Propuesta de focalizacion de politicas publicas por territorio.',
    ],
    resolution: 'Res. HCF N 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-3',
    year: 2024,
    title: 'Revision del modelo PERT CPM',
    author: 'Lic. Nilda Gloria Flores Salinas',
    status: 'Concluido',
    abstract:
      'Evaluacion tecnica y actualizacion del modelo clasico de gestion de proyectos PERT/CPM adaptado a entornos de alta incertidumbre y datos incompletos.',
    results: [
      'Algoritmo optimizado propuesto para cronogramas institucionales.',
      'Reduccion del 15% en sesgo de estimacion de tiempo.',
    ],
    resolution: 'Res. HCF N 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-4',
    year: 2024,
    title: 'Aplicacion de marcos muestrales de poblacion y vivienda a encuestas agropecuarias',
    author: 'Lic. Jaime Pinto Ajhuacho',
    status: 'En Revision',
    abstract:
      'Investigacion metodologica para adaptar y utilizar marcos poblacionales existentes en el diseno eficiente de encuestas del sector agropecuario, reduciendo costos operativos.',
    results: [
      'Metodologia de traslape validada para levantamiento rural.',
      'Eficiencia de costos mejorada en 22%.',
    ],
    resolution: 'Res. HCF N 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-5',
    year: 2024,
    title: 'Estudios de indicadores socio-economicos municipales mediante correlacion canonica',
    author: 'M.Sc. Fernando Oday Rivero Suguiura',
    status: 'Concluido',
    abstract:
      'Analisis multivariado para entender la relacion entre conjuntos de indicadores sociales y economicos a nivel municipal en Bolivia.',
    results: [
      'Mapas de calor de correlacion para toma de decision local.',
      'Identificacion de municipios criticos por brechas compuestas.',
    ],
    resolution: 'Res. HCF N 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-6',
    year: 2024,
    title: 'Analisis cualitativo encuesta de percepcion universitaria',
    author: 'M.Sc. Fernando Oday Rivero Suguiura',
    status: 'Concluido',
    abstract:
      'Procesamiento de datos cualitativos para extraer percepciones, sentimientos y niveles de satisfaccion de la comunidad universitaria respecto a su entorno academico.',
    results: [
      'Clasificacion de areas de mejora institucional.',
      'Dashboard de sentimiento desarrollado para seguimiento.',
    ],
    resolution: 'Res. HCF N 812/2024',
    downloadHref: '#',
  },
  {
    id: '2024-7',
    year: 2024,
    title: 'Estudio sobre tecnicas de prediccion de precipitacion pluvial en el municipio de La Paz',
    author: 'M.Sc. Dindo Valdez Blanco',
    status: 'En Publicacion',
    abstract:
      'Aplicacion de modelos estadisticos avanzados para predecir anomalias pluviales en La Paz, apoyando la gestion de riesgos y desastres naturales.',
    results: [
      'Modelo predictivo con 88% de precision.',
      'Identificacion de patrones de riesgo asociados a El Nino.',
    ],
    resolution: 'Res. HCF N 812/2024',
    downloadHref: '#',
  },
  {
    id: '2023-1',
    year: 2023,
    title: 'Aplicacion de las series de tiempo univariadas para la modelacion de datos del COVID del mundo casos nuevos',
    author: 'M.Sc. Nicolas Chavez Quisbert',
    status: 'Publicado',
    abstract:
      'Modelamiento de la curva de contagios mundiales de COVID-19 utilizando modelos ARIMA y SARIMA para pronosticar futuras olas de infeccion.',
    results: [
      'Modelo ARIMA validado con series internacionales.',
      'Pronosticos publicados en repositorios de salud.',
    ],
    resolution: 'Res. HCF N 1049/2024',
    downloadHref: '#',
  },
  {
    id: '2023-2',
    year: 2023,
    title: 'La ensenanza de la matematica y el rendimiento estudiantil en la carrera de Estadistica',
    author: 'Lic. Raul Delgado Alvarez',
    status: 'Publicado',
    abstract:
      'Investigacion educativa que correlaciona metodologias de ensenanza de calculo y algebra con tasas de retencion y exito en primeros semestres de la carrera.',
    results: [
      'Propuesta de rediseno curricular basico.',
      'Talleres de nivelacion implementados y monitoreados.',
    ],
    resolution: 'Res. HCF N 1049/2024',
    downloadHref: '#',
  },
  {
    id: '2023-3',
    year: 2023,
    title: 'Actividad pecuaria del departamento de La Paz - Bolivia',
    author: 'Lic. Jaime Pinto Ajhuacho',
    status: 'Concluido',
    abstract:
      'Levantamiento y analisis estadistico del sector pecuario paceño, estructurando un mapa de produccion, viabilidad economica y riesgos del sector.',
    results: [
      'Censo pecuario local actualizado por zonas.',
      'Identificacion de zonas de alto rendimiento productivo.',
    ],
    resolution: 'Res. HCF N 1049/2024',
    downloadHref: '#',
  },
  {
    id: '2023-4',
    year: 2023,
    title: 'Analisis de los determinantes asociados a la fecundidad de las mujeres en Bolivia a traves de un modelo lineal generalizado',
    author: 'M.Sc. Dindo Valdez Blanco',
    status: 'Publicado',
    abstract:
      'Uso de modelos lineales generalizados para analizar factores socioeconomicos, geograficos y educativos que determinan tasas de fecundidad en Bolivia.',
    results: [
      'Nivel educativo como predictor principal.',
      'Publicacion de resultados en revista Varianza.',
    ],
    resolution: 'Res. HCF N 1049/2024',
    downloadHref: '#',
  },
]

export const projectStatusTone = {
  Concluido: 'success',
  Publicado: 'info',
  'En Publicacion': 'warning',
  'En Revision': 'warning',
}

export const projectCardTone = {
  red: {
    icon: 'bg-red-500/20 text-red-400 border-red-500/30',
    category: 'text-red-300',
    titleHover: 'group-hover:text-red-300',
    border: 'border-red-500/50',
  },
  blue: {
    icon: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    category: 'text-blue-300',
    titleHover: 'group-hover:text-blue-300',
    border: 'border-blue-500/50',
  },
  teal: {
    icon: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    category: 'text-teal-300',
    titleHover: 'group-hover:text-teal-300',
    border: 'border-teal-500/50',
  },
}

export const investigacionProjectListUi = {
  noteIcon: Info,
  listPrefix: 'INVESTIGACION',
  authorIcon: Users,
  panelResolutionPrefix: 'RESOLUCION',
}

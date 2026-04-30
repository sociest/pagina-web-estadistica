import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Database,
  FileBadge,
  FileText,
  Globe,
  GraduationCap,
  Info,
  Library,
  MailPlus,
  MapPin,
  Microscope,
  Scale,
  ScrollText,
  ShieldAlert,
  UserCircle,
} from 'lucide-react'

export const autoresVarianzaHero = {
  tag: 'ISSN 2789-3529 (EN LINEA)',
  title: ['COMUNIDAD DE', 'INVESTIGADORES'],
  subtitle:
    'INFORMACION TECNICA Y METODOLOGICA PARA AUTORES INTERESADOS EN PUBLICAR EN LA REVISTA CIENTIFICA VARIANZA, JUNTO CON EL DIRECTORIO OFICIAL DE APORTES CIENTIFICOS.',
}

export const autoresVarianzaGuideHeader = {
  tag: 'IDENTIDAD EDITORIAL',
  title: 'LINEAMIENTOS DE PUBLICACION',
  subtitle:
    'NUESTRA MISION ES DIFUNDIR ARTICULOS ORIGINALES BASADOS EN EL USO RIGUROSO DE METODOS Y TECNICAS ESTADISTICAS PARA IMPULSAR EL DESARROLLO SOCIAL.',
}

export const autoresVarianzaGuideCards = [
  {
    title: 'MISION',
    description:
      'DIFUNDIR ARTICULOS ORIGINALES DE INVESTIGACION CIENTIFICA EN DISTINTOS AMBITOS, BASADOS EN RIGOR ESTADISTICO.',
    icon: CheckCircle2,
    tone: 'light',
  },
  {
    title: 'VISION',
    description:
      'LLEGAR A SER LA REVISTA CIENTIFICA NACIONAL DE MAYOR CALIDAD E IMPACTO EN ESTADISTICA APLICADA Y TEORICA.',
    icon: Globe,
    tone: 'dark',
  },
  {
    title: 'ALCANCE',
    description:
      'SIN RESTRICCIONES DE AREA, SIEMPRE QUE EL USO DE METODOS ESTADISTICOS SEA RIGUROSO Y VERIFICABLE.',
    icon: Award,
    tone: 'light',
  },
]

export const autoresVarianzaManuscriptTypes = [
  { label: 'ARTICULOS ORIGINALES', desc: 'TEORICOS O PRACTICOS', icon: FileText },
  { label: 'DE REVISION', desc: 'ESTADO DEL ARTE', icon: ScrollText },
  { label: 'ESTUDIOS DE CASO', desc: 'FENOMENOS ESPECIFICOS', icon: Microscope },
  { label: 'NOTAS CIENTIFICAS', desc: 'AVANCES BREVES', icon: FileBadge },
  { label: 'COMUNICACIONES', desc: 'INTERES ESTIMULAR', icon: MailPlus },
  { label: 'RESENAS', desc: 'SOBRE LIBROS RECIENTES', icon: BookOpen },
  { label: 'DE ENSENANZA', desc: 'CLARIFICACION TEORICA', icon: GraduationCap },
  { label: 'DATA REPORTS', desc: 'TABULACION TECNICA', icon: Database },
]

export const autoresVarianzaReviewProcess = [
  {
    step: '01',
    title: 'REVISION POR EL EDITOR',
    desc: 'VERIFICACION DE PERTINENCIA TEMATICA, NORMAS DE FORMA Y REQUISITOS BASICOS.',
  },
  {
    step: '02',
    title: 'PARES A DOBLE CIEGO',
    desc: 'EVALUACION POR DOS REVISORES EXTERNOS ANONIMOS. SE ANALIZA RIGOR DEL METODO Y COHERENCIA CUANTITATIVA.',
    highlighted: true,
  },
  {
    step: '03',
    title: 'MAQUETACION TECNICA',
    desc: 'DIAGRAMACION FINAL, CORRECCION DE ESTILO Y PREPARACION PARA PUBLICACION INDEXADA.',
  },
]

export const autoresVarianzaCta = {
  title: 'RECEPCION DE MANUSCRITOS',
  subtitle:
    'PUEDE ENVIAR SU ARTICULO EN CUALQUIER MOMENTO DEL ANO JUNTO CON LA CARTA DE ORIGINALIDAD FIRMADA POR LOS AUTORES.',
  email: 'ieta@umsa.bo',
  button: 'DESCARGAR PLANTILLA',
}

export const autoresVarianzaDirectoryHeader = {
  tag: 'RED DE INVESTIGADORES',
  title: 'DIRECTORIO OFICIAL',
  subtitle:
    'PERFILES ACADEMICOS Y APORTES PUBLICADOS EN LAS EDICIONES DE LA REVISTA VARIANZA.',
  searchPlaceholder: 'BUSCAR INVESTIGADOR...',
}

export const autoresVarianzaAuthors = [
  {
    id: 'A1',
    name: 'ALIAGA CACERES, IVAN YONY',
    affiliation: 'IETA, UMSA',
    orcid: '0000-0002-1234-5678',
    scholar: 'https://scholar.google.com',
    bio: 'INVESTIGADOR TITULAR DEL IETA. ESPECIALISTA EN SERIES DE TIEMPO Y MODELOS ECONOMETRICOS PARA INDICADORES ECONOMICOS BOLIVIANOS.',
    articles: [
      { title: 'ANALISIS DE SERIES DE TIEMPO DEL COMERCIO EXTERIOR', edition: 'VARIANZA N 23', year: '2024' },
      { title: 'MODELACION DE VARIABLES MACROECONOMICAS', edition: 'VARIANZA N 19', year: '2022' },
      { title: 'ESTIMACION DE LA POBREZA MULTIDIMENSIONAL', edition: 'VARIANZA N 15', year: '2019' },
    ],
  },
  {
    id: 'B1',
    name: 'BOHORQUEZ CASTANEDA, MARTHA P.',
    affiliation: 'UNIVERSIDAD NACIONAL DE COLOMBIA',
    orcid: null,
    scholar: 'https://scholar.google.com',
    bio: 'DOCTORA EN ESTADISTICA, MIEMBRO DEL COMITE INTERNACIONAL DE VARIANZA Y COLABORADORA EN METODOS ESTADISTICOS ESPACIALES.',
    articles: [{ title: 'MODELOS ESPACIALES EN LA PREDICCION DE CULTIVOS AGRICOLAS', edition: 'VARIANZA N 21', year: '2023' }],
  },
  {
    id: 'C1',
    name: 'COA CLEMENTE, RAMIRO',
    affiliation: 'DIRECTOR IETA, UMSA',
    orcid: '0000-0003-9876-5432',
    scholar: null,
    bio: 'DIRECTOR DEL IETA. EXPERTO EN ESTADISTICA SOCIAL, ENCUESTAS DE HOGARES Y DEMOGRAFIA.',
    articles: [
      { title: 'DESIGUALDADES EN LOS INGRESOS DE ADULTOS MAYORES BOLIVIANOS', edition: 'VARIANZA N 24', year: '2024' },
      { title: 'DINAMICA DEMOGRAFICA POST-COVID EN AREAS PERIURBANAS', edition: 'VARIANZA N 22', year: '2023' },
    ],
  },
  {
    id: 'C2',
    name: 'CONDORI HUANCA, RONAL EDWIN',
    affiliation: 'CARRERA DE ESTADISTICA, UMSA',
    orcid: null,
    scholar: null,
    bio: 'ANALISTA ESPECIALISTA EN RIESGO FINANCIERO, MINERIA DE DATOS APLICADA E INTELIGENCIA DE NEGOCIOS.',
    articles: [{ title: 'ANALISIS FACTORIAL DINAMICO APLICADO A LA MEDICION DE RIESGO DE LIQUIDEZ', edition: 'VARIANZA N 24', year: '2024' }],
  },
  {
    id: 'C3',
    name: 'CHAVEZ QUISBERT, NICOLAS',
    affiliation: 'INVESTIGADOR ASOCIADO',
    orcid: '0000-0001-2233-4455',
    scholar: 'https://scholar.google.com',
    bio: 'ESPECIALISTA EN MUESTREO ESTADISTICO Y DISENO DE EXPERIMENTOS AGROPECUARIOS.',
    articles: [{ title: 'MUESTREO ESTRATIFICADO EN ZONAS DE CULTIVO', edition: 'VARIANZA N 20', year: '2022' }],
  },
  {
    id: 'G1',
    name: 'GUZMAN DELGADO, CARLOS ENRIQUE',
    affiliation: 'ESTUDIANTE INVESTIGADOR, UMSA',
    orcid: null,
    scholar: null,
    bio: 'ESTUDIANTE DESTACADO DE LA CARRERA, GANADOR DEL CONCURSO DE ARTICULOS CIENTIFICOS DEL IETA EN LA GESTION 2024.',
    articles: [{ title: 'DETERMINANTES DEL RENDIMIENTO DE LA QANAWA', edition: 'VARIANZA N 24', year: '2024' }],
  },
  {
    id: 'L1',
    name: 'LOZA CRUZ, PATRICIA',
    affiliation: 'INVESTIGADORA INDEPENDIENTE',
    orcid: '0000-0001-5555-4444',
    scholar: 'https://scholar.google.com',
    bio: 'ECONOMISTA Y ANALISTA DE DATOS CON ENFOQUE EN ECONOMIA DEL ENVEJECIMIENTO Y ESTUDIOS DE VULNERABILIDAD.',
    articles: [{ title: 'DESIGUALDADES EN LOS INGRESOS DE ADULTOS MAYORES BOLIVIANOS', edition: 'VARIANZA N 24', year: '2024' }],
  },
  {
    id: 'M1',
    name: 'MAMANI VARGAS, JORGE',
    affiliation: 'INE, BOLIVIA',
    orcid: null,
    scholar: null,
    bio: 'ANALISTA DEMOGRAFICO ENFOCADO EN CENSOS POBLACIONALES Y ESTIMACIONES DE PROYECCIONES INTERCENSALES.',
    articles: [
      { title: 'ANALISIS DE COBERTURA CENSAL EN AREAS RURALES', edition: 'VARIANZA N 23', year: '2024' },
      { title: 'TASAS DE FECUNDIDAD ESTIMADAS', edition: 'VARIANZA N 18', year: '2021' },
    ],
  },
  {
    id: 'R1',
    name: 'ROMAN PADILLA, LIZBETH',
    affiliation: 'UNIVERSIDAD ANAHUAC, MEXICO',
    orcid: '0000-0002-1111-2222',
    scholar: 'https://scholar.google.com',
    bio: 'MIEMBRO DEL COMITE INTERNACIONAL, ESPECIALISTA EN BIOESTADISTICA Y DISENO DE EXPERIMENTOS PARA ENSAYOS CLINICOS.',
    articles: [
      { title: 'ENFOQUE BAYESIANO PARA ENSAYOS CLINICOS DE FASE II', edition: 'VARIANZA N 20', year: '2022' },
      { title: 'SUPERVIVENCIA Y RIESGOS COMPETITIVOS EN SALUD', edition: 'VARIANZA N 18', year: '2021' },
    ],
  },
]

export const autoresAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const autoresVarianzaIcons = {
  mission: ShieldAlert,
  vision: Globe,
  scope: Library,
  process: Scale,
  profile: UserCircle,
  location: MapPin,
  article: BookOpen,
  year: CalendarDays,
  info: Info,
}

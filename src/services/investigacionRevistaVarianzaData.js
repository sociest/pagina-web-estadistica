import {
  Award,
  BookOpen,
  CalendarDays,
  FileSearch,
  FileText,
  Globe,
  Info,
  MapPin,
  Microscope,
  Quote,
  ShieldAlert,
  Users,
} from 'lucide-react'

export const revistaVarianzaHero = {
  tag: 'PUBLICACION OFICIAL IETA - UMSA',
  title: ['REVISTA', 'VARIANZA'],
  subtitle:
    'DIFUNDIENDO CONOCIMIENTO EN LOS AMBITOS SOCIAL, ECONOMICO Y MEDIOAMBIENTAL CON RIGOR METODOLOGICO Y TECNICAS ESTADISTICAS AVANZADAS.',
  issn: 'ISSN: 2789-3510 / 2789-3529',
  ojsLabel: 'PORTAL OJS OFICIAL',
  ojsHref: 'https://ojs.umsa.bo/ojs/',
}

export const revistaVarianzaTabs = [
  { id: 'ediciones', label: 'CATALOGO DE EDICIONES', icon: BookOpen },
  { id: 'info', label: 'IDENTIDAD EDITORIAL', icon: Info },
  { id: 'comite', label: 'COMITE CIENTIFICO', icon: Users },
]

export const revistaVarianzaMeta = {
  featuredTag: 'ULTIMA PUBLICACION',
  featuredTitle: 'EDICION DESTACADA',
  catalogTag: 'REPOSITORIO',
  catalogTitle: 'CATALOGO HISTORICO',
  detailsTag: 'EDICION OFICIAL',
  detailsSubtitle: 'INSTITUTO DE ESTADISTICA TEORICA Y APLICADA (IETA)',
  searchPlaceholder: 'BUSCAR ANO, NUMERO O PALABRA CLAVE...',
  noResults: 'NO SE ENCONTRARON EDICIONES QUE COINCIDAN.',
  tabPanelEmpty: 'PRESENTACION EN PROCESO DE DIGITALIZACION',
  pdfAction: 'DESCARGAR PDF',
}

export const revistaVarianzaIdentity = {
  missionTitle: 'NUESTRA MISION',
  mission:
    'DIFUNDIR PRINCIPALMENTE ARTICULOS ORIGINALES DE INVESTIGACION CIENTIFICA EN LOS AMBITOS SOCIAL, ECONOMICO Y MEDIOAMBIENTAL, BASADOS EN EL USO DE METODOS Y TECNICAS ESTADISTICAS APROPIADAS.',
  visionTitle: 'VISION',
  vision:
    'LLEGAR A SER LA REVISTA CIENTIFICA NACIONAL DE MAYOR CALIDAD E IMPACTO EN EL CAMPO DE LA ESTADISTICA APLICADA Y TEORICA, Y SER REFERENTE PARA EL CONTEXTO INTERNACIONAL.',
  scopeTitle: 'ALCANCE',
  scope:
    'SE PUBLICAN ARTICULOS SIN RESTRICCION DE AREA DE APLICACION. LOS ARTICULOS DEBEN SER RIGUROSOS EN CUANTO A LOS METODOS ESTADISTICOS USADOS.',
  missionIcon: ShieldAlert,
}

export const revistaVarianzaEditor = {
  role: 'EDITOR PRINCIPAL',
  name: 'RAMIRO COA CLEMENTE, DR(C).',
  subtitle: 'DIRECTOR IETA, CARRERA DE ESTADISTICA, UMSA',
  email: 'estadistica@umsa.bo',
}

export const revistaVarianzaInternationalCommittee = [
  { name: 'LIZBETH ROMAN PADILLA, PH.D.', uni: 'UNIVERSIDAD ANAHUAC (NORTE)', country: 'MEXICO' },
  { name: 'YOLANDA M. GOMEZ OLMOS, DRA.', uni: 'UNIVERSIDAD DE BIO BIO', country: 'CHILE' },
  { name: 'OMAR CHOCOTEA POCA, DR.', uni: 'UNIVERSIDAD SANTIAGO DE CHILE', country: 'CHILE' },
  { name: 'LUZ MERY GONZALEZ GARCIA, PH.D.', uni: 'UNIV. NACIONAL DE COLOMBIA', country: 'COLOMBIA' },
  { name: 'MARTHA P. BOHORQUEZ, PH.D.', uni: 'UNIV. NACIONAL DE COLOMBIA', country: 'COLOMBIA' },
  { name: 'ADRIANA D AMELIO, MG.', uni: 'UNIVERSIDAD NACIONAL DE CUYO', country: 'ARGENTINA' },
]

export const revistaVarianzaNationalCommittee = [
  { name: 'MARIA EUGENIA APARICIO TORRICO, M. SC.', uni: 'UNIV. AUTONOMA JUAN MISAEL SARACHO', country: 'TARIJA, BOLIVIA' },
  { name: 'ARMINDA FLORA CASSO LISARAZU, M. SC.', uni: 'UNIV. AUTONOMA JUAN MISAEL SARACHO', country: 'TARIJA, BOLIVIA' },
]

export const revistaVarianzaCommitteeMeta = {
  titleTag: 'AUTORIDAD CIENTIFICA',
  title: 'COMITE EDITORIAL',
  internationalTitle: 'COMITE INTERNACIONAL',
  nationalTitle: 'COMITE NACIONAL',
  internationalIcon: Globe,
  nationalIcon: MapPin,
}

export const revistaVarianzaEditions = [
  {
    id: 24,
    title: 'VARIANZA N 24',
    date: 'OCTUBRE 2024',
    year: '2024',
    originales: 2,
    notas: 1,
    paginas: 61,
    size: '2.8 MB',
    issnPrint: '2789-3510',
    issnOnline: '2789-3529',
    featured: true,
    presentacion:
      'UNA VEZ MAS, EL INSTITUTO DE ESTADISTICA TEORICA Y APLICADA (IETA) COMPARTE LA EDICION N 24 DE LA REVISTA CIENTIFICA VARIANZA. EN ESTA EDICION SE PRESENTAN DOS ARTICULOS ORIGINALES Y UNA NOTA CIENTIFICA.',
    articulos: [
      { titulo: 'DESIGUALDADES EN LOS INGRESOS DE ADULTOS MAYORES BOLIVIANOS', autores: 'RAMIRO COA CLEMENTE Y PATRICIA LOZA CRUZ', pags: '22 PAG.' },
      { titulo: 'ANALISIS FACTORIAL DINAMICO APLICADO A LA MEDICION DE RIESGO DE LIQUIDEZ', autores: 'RONAL EDWIN CONDORI HUANCA', pags: '9 PAG.' },
      { titulo: 'DETERMINANTES DEL RENDIMIENTO DE LA QANAWA', autores: 'CARLOS ENRIQUE GUZMAN DELGADO', pags: '9 PAG.' },
    ],
  },
  { id: 23, title: 'VARIANZA N 23', date: 'ABRIL 2024', year: '2024', originales: 3, notas: 0, paginas: 75, size: '2.7 MB' },
  { id: 22, title: 'VARIANZA N 22', date: 'OCTUBRE 2023', year: '2023', originales: 3, notas: 0, paginas: 67, size: '1.9 MB' },
  { id: 21, title: 'VARIANZA N 21', date: 'ABRIL 2023', year: '2023', originales: 3, notas: 1, paginas: 63, size: '1.2 MB' },
  { id: 20, title: 'VARIANZA N 20', date: 'OCTUBRE 2022', year: '2022', originales: 7, notas: 0, paginas: 85, size: '1.6 MB' },
  { id: 19, title: 'VARIANZA N 19', date: 'ABRIL 2022', year: '2022', originales: 6, notas: 0, paginas: 86, size: '3 MB' },
  { id: 18, title: 'VARIANZA N 18', date: 'NOVIEMBRE 2021', year: '2021', originales: 7, notas: 0, paginas: 92, size: '4 MB' },
  { id: 17, title: 'VARIANZA N 17', date: 'NOVIEMBRE 2020', year: '2020', originales: 7, notas: 0, paginas: 48, size: '4 MB' },
  { id: 16, title: 'VARIANZA N 16', date: 'ABRIL 2020', year: '2020', originales: 5, notas: 0, paginas: 60, size: '2.5 MB' },
  { id: 15, title: 'VARIANZA N 15', date: 'OCTUBRE 2019', year: '2019', originales: 4, notas: 2, paginas: 70, size: '3.1 MB' },
]

export const revistaVarianzaUiIcons = {
  detailsQuoteIcon: Quote,
  detailsFileIcon: FileSearch,
  detailsSheetIcon: FileText,
  detailsStatsIcon: Microscope,
  detailsMetricIcon: CalendarDays,
  featuredIcon: Award,
}

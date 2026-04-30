import {
  Award,
  ClipboardList,
  ExternalLink,
  FileSearch,
  Globe,
  GraduationCap,
  History,
  ListOrdered,
  Search,
  Sigma,
  Binary,
  Stamp,
} from 'lucide-react'

export const studentsHero = {
  eyebrow: 'Gestion administrativa transparente',
  title: ['Guia y Seguimiento', 'de Tramites'],
  description:
    'Centralizamos requisitos y flujos procedimentales para que el estudiante gestione solicitudes academicas sin contratiempos.',
  placeholder: 'Ej. egreso, excelencia, legalizacion...',
  icon: ClipboardList,
  leftShape: Sigma,
  rightShape: Binary,
  searchIcon: Search,
}

export const studentsSystems = [
  {
    id: 'chasqui',
    tag: 'Tramites Facultativos (FCPN)',
    title: 'Sistema CHASQUI',
    caption: 'Seguimiento con nro. RUT',
    href: 'https://chasqui.fcpn.edu.bo/',
    icon: FileSearch,
    tone: 'blue',
  },
  {
    id: 'ayni',
    tag: 'Ventanilla Unica (UMSA)',
    title: 'Sistema AYNI',
    caption: 'Tramites universitarios',
    href: 'https://ayni.umsa.bo/',
    icon: Globe,
    tone: 'amber',
  },
]

export const studentsProcedures = [
  {
    id: 'reinscripcion',
    title: 'Reinscripcion / Readmision',
    tag: 'Permanencia Estudiantil',
    icon: History,
    desc: 'Proceso para reincorporar a un universitario inactivo con registro academico previo.',
    requirements: [
      '2 fotocopias del titulo de bachiller.',
      '2 fotocopias de cedula de identidad vigente.',
      '2 certificados de notas con minimo 2 asignaturas aprobadas o record academico firmado.',
      'Matricula original de la ultima gestion (o copia legalizada).',
      'Si concluyo plan de estudios: adjuntar certificado de conclusion de estudios.',
    ],
    steps: [
      {
        t: 'Division de Gestiones',
        d: 'Verificacion de documentos y emision de orden de compra del formulario.',
      },
      {
        t: 'Kardex de Carrera',
        d: 'Validacion en file academico y llenado del formulario con firmas requeridas.',
      },
      {
        t: 'Division de Gestiones (Retorno)',
        d: 'Devolucion del tramite firmado para emitir orden de compra de matricula actual.',
      },
    ],
  },
  {
    id: 'conclusion',
    title: 'Certificado de Conclusion de Estudios',
    tag: 'Tramites de Egreso',
    icon: GraduationCap,
    desc: 'Documento oficial que acredita el vencimiento exitoso de asignaturas del plan de estudios.',
    requirements: [
      'Carta dirigida al Director solicitando el certificado.',
      'Fotocopia de matricula actual y cedula de identidad vigente.',
      'Record academico emitido por kardex.',
      '3 fotografias 3x3 fondo plomo claro.',
      '2 certificados unicos de calificaciones.',
      'Resoluciones de convalidacion cuando aplique.',
      'Valoradas por Bs. 65.',
    ],
    steps: [
      {
        t: 'Recepcion (Direccion)',
        d: 'Ingreso del tramite con nota y proveido hacia kardex.',
      },
      {
        t: 'Auditoria en Kardex',
        d: 'Revision de actas, sistema academico y cumplimiento del plan.',
      },
      {
        t: 'Visto Bueno',
        d: 'Conformidad del Director y elevacion de informe sin observaciones.',
      },
      {
        t: 'Kardex Facultativo',
        d: 'Remision a facultad para impresion y emision del certificado final.',
      },
    ],
  },
  {
    id: 'excelencia',
    title: 'Graduacion por Excelencia',
    tag: 'Modalidad Titulacion',
    icon: Award,
    desc: 'Modalidad de titulacion directa para estudiantes con alto rendimiento academico sostenido.',
    requirements: [
      'Nota dirigida al Decano solicitando graduacion por excelencia.',
      'Fotocopia legalizada del titulo de bachiller y certificado de conclusion.',
      'Record e historial academico y juego de certificados originales.',
      'Informe de kardex con V.B. del Director con promedio ponderado.',
      'Plan de estudios firmado y resoluciones de convalidacion si aplica.',
      'Matriculas universitarias (primera y ultima).',
      'Fotocopia de carnet de identidad.',
      'Informe del tribunal revisor y resolucion facultativa de aprobacion.',
    ],
    steps: [
      {
        t: 'Tribunal Revisor',
        d: 'Designacion de tres docentes para auditoria de antecedentes del postulante.',
      },
      {
        t: 'Dictamen Oficial',
        d: 'Informe del tribunal con verificacion de promedio y procedencia.',
      },
      {
        t: 'Aprobacion Plenaria',
        d: 'Resolucion de consejo de carrera y resolucion facultativa final.',
      },
      {
        t: 'Gestiones y Admisiones',
        d: 'Presentacion del dossier consolidado en division de gestiones.',
      },
    ],
  },
  {
    id: 'legalizaciones',
    title: 'Legalizacion de Documentos',
    tag: 'Certificaciones',
    icon: Stamp,
    desc: 'Certificacion para reconocimiento oficial de documentos dentro del sistema legal.',
    requirements: [
      'Titulo o diploma original a legalizar.',
      'Fotocopias claras de anverso y reverso en tamano oficio.',
      'Carnet de identidad fisico para recojo.',
      'En extravio de boleta: recibo de pago por reposicion.',
    ],
    steps: [
      {
        t: 'Sello de Autorizacion',
        d: 'Recabar sello en ventanilla de legalizaciones con originales y copias.',
      },
      {
        t: 'Tesoro Universitario',
        d: 'Pago de valores correspondientes en cajas habilitadas.',
      },
      {
        t: 'Entrega y Contrasena',
        d: 'Entrega de recibo y fotocopias para obtener boleta de tramite.',
      },
      {
        t: 'Recojo Documental',
        d: 'Recojo 24 horas despues, de forma personal o pariente de primer grado.',
      },
    ],
  },
]

export const studentsUi = {
  externalLinkIcon: ExternalLink,
  modeFlowIcon: ListOrdered,
  modeRequirementsIcon: ClipboardList,
}

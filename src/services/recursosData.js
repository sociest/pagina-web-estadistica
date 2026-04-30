export const recursosData = {
  biblioteca: {
    title: 'Biblioteca Especializada',
    description: 'Punto de acceso al acervo físico y digital de la Carrera de Estadística.',
    links: [
      {
        label: 'Catálogo en línea (OPAC) — Koha UMSA',
        href: 'https://koha.umsa.bo/catalog?collection=estadistica',
        note: 'Enlace al catálogo Koha. Reemplazar por la URL oficial si difiere.',
      },
    ],
    ebooksByArea: [
      { area: 'Probabilidad', href: 'https://www.example.com/ebooks/probabilidad' },
      { area: 'Inferencia', href: 'https://www.example.com/ebooks/inferencia' },
      { area: 'Muestreo', href: 'https://www.example.com/ebooks/muestreo' },
    ],
    loanGuideHref: '/documentos/guias/guia-prestamos-biblioteca.pdf',
  },

  bancoDeDatos: {
    title: 'Banco de Datos (Censos, Encuestas y BD Libre)',
    description: 'Microdatos y conjuntos procesados para tesis y proyectos. Organizados por año y temática.',
    quickAccess: [
      { label: 'Censos de Población y Vivienda (IETA/INE)', href: '/recursos/datos/censos' },
      { label: 'Encuestas de Hogares (IETA)', href: '/recursos/datos/encuestas' },
    ],
    externalCollections: [
      { label: 'Kaggle', href: 'https://www.kaggle.com' },
      { label: 'UCI Machine Learning Repository', href: 'https://archive.ics.uci.edu/ml/index.php' },
      { label: 'World Bank Data', href: 'https://data.worldbank.org' },
    ],
    uxSuggestion: 'Organizar por Año y Temática (Social, Económica, Salud) para facilitar la búsqueda.',
  },

  revistas: {
    title: 'Revistas y Publicaciones',
    description: 'Centraliza la producción intelectual y el acceso a redes científicas.',
    entries: [
      { label: 'Revista Varianza — Sección editorial', href: '/investigacion/revista-varianza' },
      { label: 'Hemeroteca externa (JASA, Revista Colombiana de Estadística)', href: '/recursos/revistas/hemeroteca' },
      { label: 'Boletines Informativos', href: '/recursos/revistas/boletines' },
    ],
  },

  repositorio: {
    title: 'Repositorio de Tesis y Proyectos (Cyber-Tesis)',
    description: 'Historial de investigación de graduados con buscador y visor de documentos.',
    features: [
      'Buscador filtrable por Autor, Tutor, Año y Área de Investigación',
      'Sección separada para Proyectos de Grado y Trabajos Dirigidos',
      'Previsualización (visor PDF) para resúmenes y documentos',
    ],
    searchHref: '/repositorio/buscar',
    browseHref: '/repositorio',
    pdfPreview: true,
  },

  documentos: {
    title: 'Documentos Digitales',
    description: 'Normativa, formularios y resoluciones centralizadas para trámites académicos.',
    sections: [
      { label: 'Reglamentos Académicos', href: '/documentos/reglamentos' },
      { label: 'Formatos de Trámites (inscripciones, certificados, cartas)', href: '/documentos/formularios' },
      { label: 'Resoluciones (HCC)', href: '/documentos/resoluciones' },
    ],
  },
};

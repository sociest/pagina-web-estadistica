export const revistasData = {
  hero: {
    eyebrow: 'RED DE PUBLICACIONES',
    title: ['HEMEROTECA Y REVISTAS', 'CIENTIFICAS'],
    description:
      'Explora las revistas indexadas de prestigio internacional, junto con los boletines informativos y publicaciones institucionales del Instituto de Estadistica.',
    imageUrl:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1600',
  },
  filters: ['Todas', 'Internacionales', 'Nacionales', 'Boletines'],
  publicaciones: [
    {
      id: 'pub-001',
      titulo: 'Journal of the American Statistical Association (JASA)',
      editor: 'American Statistical Association (ASA)',
      categoria: 'Revista Cientifica',
      alcance: 'Internacional',
      descripcion:
        'La principal revista de ciencias estadisticas a nivel mundial. Publica articulos altamente tecnicos sobre metodos estadisticos y su aplicacion.',
      imagenPortada:
        'https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&q=80&w=400',
      urlDestino: 'https://amstat.tandfonline.com/toc/uasa20/current',
      esExterno: true,
    },
    {
      id: 'pub-002',
      titulo: 'Revista Varianza - Edicion 24',
      editor: 'IETA - Carrera de Estadistica UMSA',
      categoria: 'Revista Cientifica',
      alcance: 'Nacional',
      descripcion:
        'Revista oficial del Instituto de Estadistica Teorica y Aplicada. Publica investigaciones empiricas y teoricas de la comunidad academica boliviana.',
      imagenPortada:
        'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400',
      urlDestino: 'https://ojs.umsa.bo/ojs/index.php/varianza',
      esExterno: false,
    },
    {
      id: 'pub-003',
      titulo: 'Revista Colombiana de Estadistica',
      editor: 'Universidad Nacional de Colombia',
      categoria: 'Revista Cientifica',
      alcance: 'Internacional',
      descripcion:
        'Publicacion bianual que difunde trabajos en estadistica teorica, aplicada y probabilidad en el ambito latinoamericano.',
      imagenPortada:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400',
      urlDestino: 'https://revistas.unal.edu.co/index.php/estad',
      esExterno: true,
    },
    {
      id: 'pub-004',
      titulo: 'Boletin Estadistico UMSA - Gestion 2025',
      editor: 'Carrera de Estadistica',
      categoria: 'Boletin Informativo',
      alcance: 'Institucional',
      descripcion:
        'Resumen de actividades academicas, indicadores estudiantiles, tasas de egreso y matriculacion de la gestion vigente.',
      imagenPortada:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400',
      urlDestino: 'https://estadistica.umsa.bo/revistas-publicaciones',
      esExterno: false,
    },
    {
      id: 'pub-005',
      titulo: 'Investigacion Operacional',
      editor: 'Universidad de La Habana',
      categoria: 'Revista Cientifica',
      alcance: 'Internacional',
      descripcion:
        'Especializada en optimizacion, matematica aplicada, probabilidad y modelos de toma de decisiones.',
      imagenPortada:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
      urlDestino: 'https://rev-inv-ope.univ-paris1.fr/',
      esExterno: true,
    },
    {
      id: 'pub-006',
      titulo: 'Notas Cientificas: Modelos ARIMA',
      editor: 'IETA - UMSA',
      categoria: 'Boletin Informativo',
      alcance: 'Institucional',
      descripcion:
        'Documento tecnico breve sobre la correcta especificacion de modelos autorregresivos integrados de medias moviles.',
      imagenPortada:
        'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400',
      urlDestino: 'https://estadistica.umsa.bo/revistas-publicaciones',
      esExterno: false,
    },
  ],
};

export type FaqItem = {
  pregunta: string;
  respuesta: string;
};

export const homeFaq: FaqItem[] = [
  {
    pregunta: '¿Qué es Zemyx?',
    respuesta:
      'Zemyx es una marca que crea productos digitales para distintos momentos de la vida y los negocios. Cada producto tiene su propio espacio y enfoque.',
  },
  {
    pregunta: '¿Zemyx es una sola aplicación?',
    respuesta:
      'No. Zemyx agrupa varios productos independientes —como Envíos y Emprendedor— cada uno con su propia plataforma y URL.',
  },
  {
    pregunta: '¿Los productos disponibles tienen prueba gratis?',
    respuesta:
      'Sí. Los productos publicados ofrecen periodo de prueba al crear cuenta. Revisa cada lobby para conocer los detalles del plan inicial.',
  },
  {
    pregunta: '¿Necesito instalar algo?',
    respuesta:
      'No. Los productos de Zemyx funcionan desde el navegador, en computador o celular.',
  },
  {
    pregunta: '¿Puedo usar varios productos de Zemyx?',
    respuesta:
      'Sí. Cada producto es independiente. Puedes usar los que necesites según tu contexto personal o de negocio.',
  },
  {
    pregunta: '¿Cómo contacto a Zemyx?',
    respuesta:
      'Escríbenos a hola@zemyx.com o usa el botón de contacto en esta web. Estamos abiertos a conversar sobre productos, ideas y colaboraciones.',
  },
];

export const productsFaq: FaqItem[] = [
  {
    pregunta: '¿Cuáles productos ya están disponibles?',
    respuesta:
      'Envíos y Emprendedor están disponibles. Finanzas Personales y Menú se encuentran en desarrollo y se anunciarán cuando estén listos.',
  },
  {
    pregunta: '¿Dónde accedo a cada producto?',
    respuesta:
      'Cada producto vive en su propio subdominio: envios.zemyx.com, emprendedor.zemyx.com, y así sucesivamente. Desde aquí puedes ir directo al lobby de cada uno.',
  },
  {
    pregunta: '¿Qué pasa si un producto dice "Próximamente"?',
    respuesta:
      'Significa que aún no está publicado. Puedes ver una vista previa en esta web y te avisaremos cuando esté listo para usar.',
  },
  {
    pregunta: '¿Los productos comparten la misma cuenta?',
    respuesta:
      'No necesariamente. Cada producto gestiona sus propias cuentas y planes. Zemyx es la marca que los agrupa, no un login único forzado.',
  },
  {
    pregunta: '¿Puedo proponer un nuevo producto?',
    respuesta:
      'Sí. Si tienes una idea que encaje con la visión de Zemyx, escríbenos. La marca continuará creando nuevas soluciones con el tiempo.',
  },
];

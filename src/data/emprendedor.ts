export const emprendedorMeta = {
  title: 'Emprendedor — Gestiona tu negocio en un solo lugar | Zemyx',
  description:
    'Emprendedor es el producto de Zemyx para organizar productos, inventario, ventas y clientes desde un solo lugar.',
} as const;

export const emprendedorTrial = {
  label: 'Reclama tu prueba gratis',
  navLabel: 'Prueba gratis',
  url: 'https://emprendedor.zemyx.com',
} as const;

export const emprendedorFeatures = [
  {
    title: 'Productos',
    text: 'Organiza tu catálogo y mantén toda la información de tus productos en un solo lugar.',
    icon: 'package' as const,
  },
  {
    title: 'Inventario',
    text: 'Ten una visión clara de lo que tienes disponible y mantén el control de tus existencias.',
    icon: 'boxes' as const,
  },
  {
    title: 'Ventas',
    text: 'Registra y consulta tus ventas para entender mejor el movimiento de tu negocio.',
    icon: 'sales' as const,
  },
  {
    title: 'Clientes',
    text: 'Mantén organizada la información de tus clientes.',
    icon: 'users' as const,
  },
  {
    title: 'Control',
    text: 'Consulta la información importante de tu negocio de forma clara y sencilla.',
    icon: 'control' as const,
  },
] as const;

export const emprendedorSteps = [
  {
    step: '01',
    title: 'Organiza tus productos.',
    text: 'Crea tu catálogo y deja cada producto listo para vender.',
  },
  {
    step: '02',
    title: 'Controla tus ventas.',
    text: 'Registra el movimiento del día y consulta el historial cuando lo necesites.',
  },
  {
    step: '03',
    title: 'Gestiona tu inventario.',
    text: 'Mantén a la vista lo que tienes disponible y lo que necesita reposición.',
  },
  {
    step: '04',
    title: 'Conoce mejor tu negocio.',
    text: 'Consulta lo esencial para tomar decisiones con más claridad.',
  },
] as const;

export const emprendedorAudiences = [
  {
    title: 'Emprendimientos',
    text: 'Para negocios que están empezando y quieren crecer con orden.',
  },
  {
    title: 'Tiendas',
    text: 'Para quienes venden productos y necesitan orden en el día a día.',
  },
  {
    title: 'Pequeños comercios',
    text: 'Un espacio simple para inventario, ventas y clientes.',
  },
  {
    title: 'Negocios independientes',
    text: 'Pensado para quienes llevan su operación de forma directa.',
  },
] as const;

export const emprendedorPreview = {
  label: 'Vista previa',
  nav: ['Resumen', 'Ventas', 'Productos', 'Inventario', 'Clientes'],
  metrics: [
    { label: 'Ventas del día', value: '$ 1.250.000', tone: 'primary' as const },
    { label: 'Productos', value: '124', tone: 'ink' as const },
    { label: 'Inventario', value: '85%', tone: 'accent' as const },
    { label: 'Clientes', value: '48', tone: 'soft' as const },
  ],
  rows: [
    { name: 'Café molido 250 g', price: '$ 18.000', stock: '42', status: 'Activo' },
    { name: 'Bolso de lona', price: '$ 65.000', stock: '11', status: 'Activo' },
    { name: 'Velas de soya', price: '$ 22.000', stock: '3', status: 'Bajo' },
    { name: 'Agenda 2026', price: '$ 35.000', stock: '27', status: 'Activo' },
  ],
} as const;

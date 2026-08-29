export type ProductIconId = 'message' | 'wallet' | 'menu' | 'store';
export type ProductTone = 'primary' | 'accent' | 'ink' | 'soft';

export type Product = {
  slug: string;
  name: string;
  description: string;
  host: string;
  url: string;
  icon: ProductIconId;
  tone: ProductTone;
};

export const products: Product[] = [
  {
    slug: 'mensajeria',
    name: 'Mensajería',
    description: 'Comunicación digital simple y directa.',
    host: 'mensajeria.zemyx.com',
    url: 'https://mensajeria.zemyx.com',
    icon: 'message',
    tone: 'primary',
  },
  {
    slug: 'gastos',
    name: 'Gastos',
    description: 'Organiza y entiende tus gastos personales.',
    host: 'gastos.zemyx.com',
    url: 'https://gastos.zemyx.com',
    icon: 'wallet',
    tone: 'accent',
  },
  {
    slug: 'menu',
    name: 'Menú',
    description: 'Menús digitales para restaurantes.',
    host: 'menu.zemyx.com',
    url: 'https://menu.zemyx.com',
    icon: 'menu',
    tone: 'ink',
  },
  {
    slug: 'emprendedor',
    name: 'Emprendedor',
    description: 'Inventario y ventas para emprendedores.',
    host: 'emprendedor.zemyx.com',
    url: 'https://emprendedor.zemyx.com',
    icon: 'store',
    tone: 'soft',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

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
  available: boolean;
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
    available: false,
  },
  {
    slug: 'finanzas',
    name: 'Finanzas Personales',
    description: 'Organiza y entiende tus finanzas personales.',
    host: 'finanzas.zemyx.com',
    url: 'https://finanzas.zemyx.com',
    icon: 'wallet',
    tone: 'accent',
    available: false,
  },
  {
    slug: 'menu',
    name: 'Menú',
    description: 'Menús digitales para restaurantes.',
    host: 'menu.zemyx.com',
    url: 'https://menu.zemyx.com',
    icon: 'menu',
    tone: 'ink',
    available: false,
  },
  {
    slug: 'emprendedor',
    name: 'Emprendedor',
    description: 'Inventario y ventas para emprendedores.',
    host: 'emprendedor.zemyx.com',
    url: 'https://emprendedor.zemyx.com',
    icon: 'store',
    tone: 'soft',
    available: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

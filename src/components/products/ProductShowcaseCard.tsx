import { motion, useReducedMotion } from 'framer-motion';
import type { Product } from '../../data/products';
import { ProductIcon } from '../ui/ProductIcon';
import { EmprendedorPreview } from './EmprendedorPreview';
import { EnviosPreview } from './EnviosPreview';
import styles from './ProductShowcaseCard.module.css';

type ProductShowcaseCardProps = {
  product: Product;
  delay?: number;
};

function ProductPreview({ slug }: { slug: string }) {
  if (slug === 'emprendedor') {
    return <EmprendedorPreview />;
  }

  if (slug === 'envios') {
    return <EnviosPreview />;
  }

  return null;
}

export function ProductShowcaseCard({ product, delay = 0 }: ProductShowcaseCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={styles.wrap}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={product.url}
        className={`${styles.card} ${styles[product.tone]}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.previewFrame}>
          <ProductPreview slug={product.slug} />
        </div>
        <div className={styles.meta}>
          <div className={styles.top}>
            <span className={styles.iconWrap}>
              <ProductIcon id={product.icon} className={styles.icon} />
            </span>
            <span className={styles.live}>Disponible</span>
          </div>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <span className={styles.cta}>
            Conocer producto
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </a>
    </motion.article>
  );
}

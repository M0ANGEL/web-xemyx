import { motion, useReducedMotion } from 'framer-motion';
import { useComingSoon } from '../../context/ComingSoonContext';
import type { Product } from '../../data/products';
import { ProductIcon } from './ProductIcon';
import { ProductMotif } from './ProductMotif';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  product: Product;
  delay?: number;
};

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const { openComingSoon } = useComingSoon();
  const cardClass = `${styles.card} ${styles[product.tone]}`;
  const ctaLabel = product.available ? 'Conocer más' : 'Próximamente';
  const statusLabel = product.available ? 'Disponible' : 'Próximamente';

  const content = (
    <>
      <span className={styles.top}>
        <span className={styles.iconWrap}>
          <ProductIcon id={product.icon} className={styles.icon} />
        </span>
        <span className={`${styles.status} ${product.available ? styles.live : styles.soon}`}>
          {statusLabel}
        </span>
      </span>
      <ProductMotif product={product} />
      <div className={styles.body}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.host}>{product.host}</p>
      </div>
      <span className={styles.cta}>
        {ctaLabel}
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </span>
    </>
  );

  return (
    <motion.div
      className={styles.wrap}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {product.available ? (
        <a href={product.url} className={cardClass} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <button type="button" className={cardClass} onClick={() => openComingSoon(product.name)}>
          {content}
        </button>
      )}
    </motion.div>
  );
}

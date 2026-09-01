import { motion, useReducedMotion } from 'framer-motion';
import { useComingSoon } from '../../context/ComingSoonContext';
import type { Product } from '../../data/products';
import { ProductIcon } from '../ui/ProductIcon';
import { ProductMotif } from '../ui/ProductMotif';
import styles from './ComingSoonShowcaseCard.module.css';

type ComingSoonShowcaseCardProps = {
  product: Product;
  delay?: number;
};

export function ComingSoonShowcaseCard({ product, delay = 0 }: ComingSoonShowcaseCardProps) {
  const reduceMotion = useReducedMotion();
  const { openComingSoon } = useComingSoon();

  return (
    <motion.article
      className={styles.wrap}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <button type="button" className={`${styles.card} ${styles[product.tone]}`} onClick={() => openComingSoon(product.name)}>
        <div className={styles.previewFrame}>
          <ProductMotif product={product} />
        </div>
        <div className={styles.meta}>
          <div className={styles.top}>
            <span className={styles.iconWrap}>
              <ProductIcon id={product.icon} className={styles.icon} />
            </span>
            <span className={styles.soon}>Próximamente</span>
          </div>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <span className={styles.host}>{product.host}</span>
        </div>
      </button>
    </motion.article>
  );
}

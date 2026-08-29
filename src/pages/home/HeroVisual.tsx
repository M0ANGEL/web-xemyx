import { motion, useReducedMotion } from 'framer-motion';
import { ProductIcon } from '../../components/ui';
import { products } from '../../data/products';
import styles from './HeroVisual.module.css';

const float = (duration: number, distance: number) => ({
  y: [0, -distance, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
});

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.ring} />
      <div className={styles.line} />
      <motion.span
        className={`${styles.orb} ${styles.orbPrimary}`}
        animate={reduceMotion ? undefined : float(8, 10)}
      />
      <motion.span
        className={`${styles.orb} ${styles.orbAccent}`}
        animate={reduceMotion ? undefined : float(10, 8)}
      />
      <motion.span
        className={`${styles.orb} ${styles.orbInk}`}
        animate={reduceMotion ? undefined : float(9, 6)}
      />

      <div className={styles.core}>
        <span>Zemyx</span>
      </div>

      {products.map((product, index) => (
        <motion.article
          key={product.slug}
          className={`${styles.chip} ${styles[`chip${index + 1}`]}`}
          animate={reduceMotion ? undefined : float(7 + index, 6 + index)}
        >
          <span className={`${styles.chipIcon} ${styles[product.tone]}`}>
            <ProductIcon id={product.icon} />
          </span>
          <span>{product.name}</span>
        </motion.article>
      ))}
    </div>
  );
}

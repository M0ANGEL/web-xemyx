import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import type { Product } from '../../data/products';
import { ProductIcon } from './ProductIcon';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  product: Product;
  delay?: number;
};

const MotionLink = motion.create(Link);

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      to={`/productos/${product.slug}`}
      className={`${styles.card} ${styles[product.tone]}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.22, delay: 0 } }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={styles.iconWrap}>
        <ProductIcon id={product.icon} className={styles.icon} />
      </span>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.host}>{product.host}</p>
      </div>
      <span className={styles.cta}>
        Conocer
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </span>
    </MotionLink>
  );
}

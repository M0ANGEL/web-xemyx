import type { Product } from '../../data/products';
import styles from './ProductMotif.module.css';

type ProductMotifProps = {
  product: Product;
};

export function ProductMotif({ product }: ProductMotifProps) {
  if (product.slug === 'envios') {
    return (
      <div className={`${styles.motif} ${styles.mensajeria} ${styles.animated}`} aria-hidden="true">
        <span className={`${styles.bubble} ${styles.in} ${styles.bubbleIn}`}>En ruta</span>
        <span className={`${styles.bubble} ${styles.out} ${styles.bubbleOut}`}>Entregado</span>
        <span className={styles.route}>
          <i className={styles.routeDot} />
          <i className={styles.routeDot} />
          <i className={styles.routeDot} />
        </span>
      </div>
    );
  }

  if (product.slug === 'finanzas') {
    return (
      <div className={`${styles.motif} ${styles.finanzas} ${styles.animated}`} aria-hidden="true">
        <span className={styles.bars}>
          <i className={styles.bar} style={{ height: '42%' }} />
          <i className={styles.bar} style={{ height: '76%' }} />
          <i className={styles.bar} style={{ height: '54%' }} />
          <i className={`${styles.bar} ${styles.accentBar}`} style={{ height: '88%' }} />
        </span>
        <span className={styles.chip}>- Café</span>
      </div>
    );
  }

  if (product.slug === 'menu') {
    return (
      <div className={`${styles.motif} ${styles.menu} ${styles.animated}`} aria-hidden="true">
        <span className={styles.dish} />
        <span className={styles.lines}>
          <i className={styles.line} />
          <i className={styles.line} />
          <i className={styles.line} />
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.motif} ${styles.emprendedor} ${styles.animated}`} aria-hidden="true">
      <span className={styles.tile}>
        <strong>12</strong>
        <small>ventas</small>
      </span>
      <span className={`${styles.tile} ${styles.tileAlt}`}>
        <strong>36</strong>
        <small>stock</small>
      </span>
    </div>
  );
}

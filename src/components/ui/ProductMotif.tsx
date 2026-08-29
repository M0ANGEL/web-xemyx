import type { Product } from '../../data/products';
import styles from './ProductMotif.module.css';

type ProductMotifProps = {
  product: Product;
};

export function ProductMotif({ product }: ProductMotifProps) {
  if (product.slug === 'mensajeria') {
    return (
      <div className={`${styles.motif} ${styles.mensajeria}`} aria-hidden="true">
        <span className={`${styles.bubble} ${styles.in}`}>En camino</span>
        <span className={`${styles.bubble} ${styles.out}`}>Entregado</span>
        <span className={styles.route}>
          <i />
          <i />
          <i />
        </span>
      </div>
    );
  }

  if (product.slug === 'finanzas') {
    return (
      <div className={`${styles.motif} ${styles.finanzas}`} aria-hidden="true">
        <span className={styles.bars}>
          <i style={{ height: '42%' }} />
          <i style={{ height: '76%' }} />
          <i style={{ height: '54%' }} />
          <i className={styles.accentBar} style={{ height: '88%' }} />
        </span>
        <span className={styles.chip}>- Café</span>
      </div>
    );
  }

  if (product.slug === 'menu') {
    return (
      <div className={`${styles.motif} ${styles.menu}`} aria-hidden="true">
        <span className={styles.dish} />
        <span className={styles.lines}>
          <i />
          <i />
          <i />
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.motif} ${styles.emprendedor}`} aria-hidden="true">
      <span className={styles.tile}>
        <strong>12</strong>
        <small>ventas</small>
      </span>
      <span className={styles.tile}>
        <strong>36</strong>
        <small>stock</small>
      </span>
    </div>
  );
}

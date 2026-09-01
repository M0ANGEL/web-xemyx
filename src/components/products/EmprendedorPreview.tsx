import styles from './EmprendedorPreview.module.css';

export function EmprendedorPreview() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>emprendedor.zemyx.com</span>
      </div>
      <div className={styles.shell}>
        <div className={styles.nav}>
          <span className={styles.navBrand}>Zemyx</span>
          <span className={styles.navProduct}>Emprendedor</span>
        </div>
        <div className={styles.hero}>
          <span className={styles.heroLine} />
          <span className={styles.heroLineShort} />
        </div>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Ventas hoy</span>
            <span className={styles.metricValue}>$842k</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Inventario</span>
            <span className={styles.metricValue}>128</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Clientes</span>
            <span className={styles.metricValue}>46</span>
          </div>
        </div>
        <div className={styles.chart}>
          <span className={styles.bar} style={{ height: '42%' }} />
          <span className={styles.bar} style={{ height: '68%' }} />
          <span className={styles.bar} style={{ height: '55%' }} />
          <span className={styles.bar} style={{ height: '82%' }} />
          <span className={styles.bar} style={{ height: '61%' }} />
        </div>
      </div>
    </div>
  );
}

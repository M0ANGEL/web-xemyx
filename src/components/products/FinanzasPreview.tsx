import styles from './FinanzasPreview.module.css';

export function FinanzasPreview() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>finanzas.zemyx.com</span>
      </div>
      <div className={styles.shell}>
        <div className={styles.nav}>
          <span className={styles.navBrand}>Zemyx</span>
          <span className={styles.navProduct}>Finanzas</span>
        </div>
        <div className={styles.hero}>
          <span className={styles.heroLine} />
          <span className={styles.heroLineShort} />
        </div>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Disponible</span>
            <span className={`${styles.metricValue} ${styles.metricValuePrimary}`}>$2.4M</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Gastos mes</span>
            <span className={styles.metricValue}>$890k</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Ahorro</span>
            <span className={`${styles.metricValue} ${styles.metricValueGood}`}>32%</span>
          </div>
        </div>
        <div className={styles.bars}>
          <div className={styles.barRow}>
            <span className={styles.barLabel}>Necesidades</span>
            <span className={styles.track}>
              <i className={styles.fillNeeds} style={{ width: '52%' }} />
            </span>
          </div>
          <div className={styles.barRow}>
            <span className={styles.barLabel}>Deseos</span>
            <span className={styles.track}>
              <i className={styles.fillWants} style={{ width: '28%' }} />
            </span>
          </div>
          <div className={styles.barRow}>
            <span className={styles.barLabel}>Ahorro</span>
            <span className={styles.track}>
              <i className={styles.fillSave} style={{ width: '20%' }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from './EnviosPreview.module.css';

export function EnviosPreview() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>envios.zemyx.com</span>
      </div>
      <div className={styles.shell}>
        <div className={styles.nav}>
          <span className={styles.navBrand}>Zemyx</span>
          <span className={styles.navProduct}>Envíos</span>
        </div>
        <div className={styles.route}>
          <div className={styles.point}>
            <span className={styles.pin} />
            <span className={styles.pointLabel}>Origen</span>
          </div>
          <div className={styles.road}>
            <span className={styles.lane} />
            <span className={styles.package}>
              <i />
            </span>
          </div>
          <div className={styles.point}>
            <span className={`${styles.pin} ${styles.pinDone}`} />
            <span className={styles.pointLabel}>Destino</span>
          </div>
        </div>
        <div className={styles.badges}>
          <span className={styles.badgeRoute}>En ruta</span>
          <span className={styles.badgeDone}>Entregado</span>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <span>ENV-204</span>
            <span className={styles.statusRoute}>En ruta</span>
          </div>
          <div className={styles.row}>
            <span>ENV-198</span>
            <span className={styles.statusDone}>Entregado</span>
          </div>
        </div>
      </div>
    </div>
  );
}

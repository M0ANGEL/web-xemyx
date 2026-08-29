import { motion, useReducedMotion } from 'framer-motion';
import { emprendedorPreview } from '../../data/emprendedor';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './DashboardPreview.module.css';

type DashboardPreviewProps = {
  variant?: 'compact' | 'full';
};

export function DashboardPreview({ variant = 'compact' }: DashboardPreviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${styles.frame} ${styles[variant]}`}
      aria-hidden={variant === 'compact'}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={fadeUpTransition(0.08)}
    >
      <div className={styles.chrome}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.appName}>Emprendedor</span>
        <span className={styles.badge}>{emprendedorPreview.label}</span>
      </div>

      <div className={styles.body}>
        {variant === 'full' ? (
          <aside className={styles.sidebar} aria-hidden="true">
            {emprendedorPreview.nav.map((item, index) => (
              <span key={item} className={index === 0 ? styles.activeNav : undefined}>
                {item}
              </span>
            ))}
          </aside>
        ) : null}

        <div className={styles.main}>
          <div className={styles.metrics}>
            {emprendedorPreview.metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                className={`${styles.metric} ${styles[metric.tone]}`}
                variants={fadeUp}
                initial={reduceMotion ? false : 'hidden'}
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                transition={fadeUpTransition(0.1 + index * 0.06)}
              >
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
              </motion.article>
            ))}
          </div>

          {variant === 'full' ? (
            <div className={styles.tableWrap}>
              <div className={styles.tableHead}>
                <span>Producto</span>
                <span>Precio</span>
                <span>Stock</span>
                <span>Estado</span>
              </div>
              {emprendedorPreview.rows.map((row) => (
                <div key={row.name} className={styles.row}>
                  <strong>{row.name}</strong>
                  <span>{row.price}</span>
                  <span>{row.stock}</span>
                  <span className={row.status === 'Bajo' ? styles.low : styles.active}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.bars} aria-hidden="true">
              <i style={{ height: '46%' }} />
              <i style={{ height: '72%' }} />
              <i style={{ height: '38%' }} />
              <i style={{ height: '88%' }} />
              <i style={{ height: '60%' }} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

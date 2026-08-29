import { motion, useReducedMotion } from 'framer-motion';
import { Button, Container } from '../../components/ui';
import { DashboardPreview } from '../../components/product/DashboardPreview';
import { emprendedorTrial } from '../../data/emprendedor';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './EmprendedorHero.module.css';

export function EmprendedorHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.hero} aria-labelledby="emprendedor-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <motion.p
              className={styles.eyebrow}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0)}
            >
              Producto Zemyx
            </motion.p>
            <motion.h1
              id="emprendedor-title"
              className={styles.title}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0.08)}
            >
              Tu negocio, en un solo lugar.
            </motion.h1>
            <motion.p
              className={styles.subtitle}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0.16)}
            >
              Emprendedor ayuda a organizar productos, inventario, ventas y clientes
              sin complicar la operación.
            </motion.p>
            <motion.div
              className={styles.actions}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0.24)}
            >
              <Button
                size="lg"
                withArrow
                href={emprendedorTrial.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {emprendedorTrial.label}
              </Button>
              <Button href="#como-funciona" variant="outline" size="lg">
                Cómo funciona
              </Button>
            </motion.div>
          </div>

          <div className={styles.visual}>
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}

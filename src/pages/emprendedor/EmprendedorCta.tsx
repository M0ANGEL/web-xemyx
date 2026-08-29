import { motion, useReducedMotion } from 'framer-motion';
import { Button, Container } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { emprendedorTrial } from '../../data/emprendedor';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './EmprendedorCta.module.css';

export function EmprendedorCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.cta}>
      <Container>
        <Reveal>
          <h2 className={styles.title}>Empieza a tomar el control de tu negocio.</h2>
          <p className={styles.text}>
            Prueba Emprendedor y organiza productos, inventario, ventas y clientes
            desde un solo lugar.
          </p>
        </Reveal>
        <motion.div
          className={styles.action}
          variants={fadeUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={fadeUpTransition(0.1)}
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
        </motion.div>
      </Container>
    </section>
  );
}

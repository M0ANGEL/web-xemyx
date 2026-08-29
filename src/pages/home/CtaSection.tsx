import { motion, useReducedMotion } from 'framer-motion';
import { Button, Container } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { site } from '../../data/site';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './CtaSection.module.css';

export function CtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.cta} id="hablar">
      <Container>
        <Reveal>
          <p className={styles.eyebrow}>Siguiente producto</p>
          <h2 className={styles.title}>¿Tienes una idea?</h2>
          <p className={styles.text}>
            Zemyx continuará creando nuevos productos. Si quieres conversar, escríbenos.
          </p>
        </Reveal>
        <motion.div
          className={styles.action}
          variants={fadeUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          transition={fadeUpTransition(0.12)}
        >
          <Button href={site.mailto} size="lg" withArrow>
            Hablar con Zemyx
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

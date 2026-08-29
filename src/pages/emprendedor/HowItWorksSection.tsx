import { motion, useReducedMotion } from 'framer-motion';
import { Container, Heading, Section } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { emprendedorSteps } from '../../data/emprendedor';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './HowItWorksSection.module.css';

export function HowItWorksSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section tone="surface" id="como-funciona">
      <Container>
        <Reveal>
          <Heading
            as={2}
            eyebrow="Cómo funciona"
            subtitle="Un flujo simple para organizar y entender el día a día del negocio."
          >
            ¿Cómo funciona?
          </Heading>
        </Reveal>
        <ol className={styles.steps}>
          {emprendedorSteps.map((item, index) => (
            <motion.li
              key={item.step}
              className={styles.step}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={fadeUpTransition(0.08 * index)}
            >
              <span className={styles.number}>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

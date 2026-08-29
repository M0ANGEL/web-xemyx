import { motion, useReducedMotion } from 'framer-motion';
import { Container, Heading, Section } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { FeatureIcon } from '../../components/product/FeatureIcon';
import { emprendedorFeatures } from '../../data/emprendedor';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './FeaturesSection.module.css';

export function FeaturesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section tone="surface" id="caracteristicas">
      <Container>
        <Reveal>
          <Heading as={2} measure="wide">
            Todo lo que necesitas para llevar tu negocio.
          </Heading>
        </Reveal>
        <div className={styles.grid}>
          {emprendedorFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
              className={styles.card}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeUpTransition(0.06 * index)}
            >
              <span className={styles.icon}>
                <FeatureIcon id={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className={styles.visual} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

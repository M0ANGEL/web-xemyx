import { motion, useReducedMotion } from 'framer-motion';
import { Container, Heading, Section } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { emprendedorAudiences } from '../../data/emprendedor';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './AudienceSection.module.css';

export function AudienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="para-quien">
      <Container>
        <Reveal>
          <Heading as={2} measure="wide">
            Creado para quienes hacen crecer su negocio.
          </Heading>
        </Reveal>
        <div className={styles.grid}>
          {emprendedorAudiences.map((item, index) => (
            <motion.article
              key={item.title}
              className={styles.card}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeUpTransition(0.07 * index)}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

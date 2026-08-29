import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Container, Heading, ProductIcon, Section } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { products } from '../../data/products';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import styles from './EcosystemSection.module.css';

export function EcosystemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="ecosistema">
      <Container>
        <Reveal>
          <Heading
            as={2}
            eyebrow="Ecosistema"
            subtitle="Zemyx no es un único producto. Es una marca que agrupa soluciones distintas, cada una con su propio espacio."
            measure="wide"
          >
            Una marca. Diferentes productos.
          </Heading>
        </Reveal>

        <div className={styles.map}>
          <motion.div
            className={styles.hub}
            variants={fadeUp}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={fadeUpTransition(0.05)}
          >
            <span className={styles.hubMark}>Zemyx</span>
            <span className={styles.hubHint}>marca</span>
          </motion.div>

          <div className={styles.spine} aria-hidden="true" />

          <ul className={styles.nodes}>
            {products.map((product, index) => (
              <motion.li
                key={product.slug}
                variants={fadeUp}
                initial={reduceMotion ? false : 'hidden'}
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                transition={fadeUpTransition(0.1 + index * 0.08)}
              >
                <Link
                  to={`/productos/${product.slug}`}
                  className={`${styles.node} ${styles[product.tone]}`}
                >
                  <span className={styles.nodeIcon}>
                    <ProductIcon id={product.icon} />
                  </span>
                  <span className={styles.nodeCopy}>
                    <strong>{product.name}</strong>
                    <small>{product.host}</small>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

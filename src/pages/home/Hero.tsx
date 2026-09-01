import { motion, useReducedMotion } from 'framer-motion';
import { Button, Container } from '../../components/ui';
import { products } from '../../data/products';
import { fadeUp, fadeUpTransition } from '../../motion/presets';
import { HeroVisual } from './HeroVisual';
import styles from './Hero.module.css';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
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
              Ecosistema Zemyx
            </motion.p>
            <motion.h1
              id="hero-title"
              className={styles.title}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0.08)}
            >
              Software que se adapta a tu mundo.
            </motion.h1>
            <motion.p
              className={styles.subtitle}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0.16)}
            >
              Zemyx crea productos digitales que simplifican distintos aspectos de la
              vida y los negocios. Una marca. Varias soluciones.
            </motion.p>
            <motion.div
              className={styles.actions}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0.24)}
            >
              <Button href="#productos" size="lg" withArrow>
                Explorar productos
              </Button>
              <Button href="#nosotros" variant="outline" size="lg">
                Conocer Zemyx
              </Button>
            </motion.div>
            <motion.ul
              className={styles.chips}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              transition={fadeUpTransition(0.32)}
            >
              {products.map((product) => (
                <li key={product.slug}>{product.name}</li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className={styles.visual}
            variants={fadeUp}
            initial={reduceMotion ? false : 'hidden'}
            animate="show"
            transition={fadeUpTransition(0.2)}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

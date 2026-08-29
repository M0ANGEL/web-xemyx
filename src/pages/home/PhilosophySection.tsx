import { Container, Section } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import styles from './PhilosophySection.module.css';

export function PhilosophySection() {
  return (
    <Section tone="surface" id="filosofia">
      <Container>
        <Reveal>
          <p className={styles.eyebrow}>Filosofía</p>
          <blockquote className={styles.quote}>
            Crear herramientas digitales simples, útiles y modernas.
          </blockquote>
          <p className={styles.note}>
            Esa es la forma en que Zemyx construye productos: menos ruido, más claridad.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

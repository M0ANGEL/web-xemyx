import { Container, Heading, Section } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { DashboardPreview } from '../../components/product/DashboardPreview';
import styles from './ProductVisualSection.module.css';

export function ProductVisualSection() {
  return (
    <Section id="vista">
      <Container>
        <Reveal>
          <Heading
            as={2}
            eyebrow="Vista previa"
            subtitle="Una representación visual del producto. No es una captura de una aplicación publicada."
            measure="wide"
          >
            Así puede verse Emprendedor.
          </Heading>
        </Reveal>
        <div className={styles.stage}>
          <DashboardPreview variant="full" />
        </div>
      </Container>
    </Section>
  );
}

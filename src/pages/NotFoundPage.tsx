import { Button, Container, Heading, Section } from '../components/ui';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './pages.module.css';

export function NotFoundPage() {
  usePageTitle('Página no encontrada');

  return (
    <div className={styles.fade}>
      <Section>
        <Container>
          <div className={styles.stack}>
            <Heading eyebrow="404" subtitle="Esta ruta no existe.">
              Página no encontrada
            </Heading>
            <div className={styles.actions}>
              <Button to="/">Volver al inicio</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

import { Button, Container, Heading, Section } from '../components/ui';
import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './pages.module.css';

export function ContactPage() {
  usePageTitle('Contacto');

  return (
    <div className={styles.fade}>
      <Section>
        <Container>
          <div className={styles.stack}>
            <Heading eyebrow="Contacto" subtitle={site.email}>
              Hablemos
            </Heading>
            <div className={styles.actions}>
              <Button href={site.mailto}>Escribir a {site.email}</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

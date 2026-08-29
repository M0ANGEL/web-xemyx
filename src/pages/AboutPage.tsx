import { Container, Heading, Section } from '../components/ui';
import { products } from '../data/products';
import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './pages.module.css';

export function AboutPage() {
  usePageTitle('Nosotros');

  return (
    <div className={styles.fade}>
      <Section>
        <Container>
          <div className={styles.stack}>
            <Heading eyebrow={site.name}>Nosotros</Heading>
            <ul className={styles.meta}>
              {products.map((product) => (
                <li key={product.slug}>{product.name}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </div>
  );
}

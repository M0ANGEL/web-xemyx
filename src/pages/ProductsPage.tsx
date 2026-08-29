import { Container, Heading, ProductCard, Section } from '../components/ui';
import { products } from '../data/products';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './pages.module.css';

export function ProductsPage() {
  usePageTitle('Productos');

  return (
    <div className={styles.fade}>
      <Section>
        <Container>
          <div className={styles.stack}>
            <Heading eyebrow="Productos" subtitle="Cada producto tiene su propio espacio.">
              Productos
            </Heading>
            <div className={styles.grid}>
              {products.map((product, index) => (
                <ProductCard key={product.slug} product={product} delay={0.06 * index} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

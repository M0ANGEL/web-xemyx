import { Container, Heading, ProductCard, Section } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import { products } from '../../data/products';
import styles from './ProductsSection.module.css';

export function ProductsSection() {
  return (
    <Section tone="surface" id="productos">
      <Container>
        <Reveal>
          <Heading
            as={2}
            eyebrow="Productos"
            subtitle="Cuatro herramientas. Un mismo criterio: claridad, utilidad y diseño."
            measure="wide"
          >
            Un ecosistema. Diferentes soluciones.
          </Heading>
        </Reveal>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} delay={0.08 * index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

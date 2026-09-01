import { Container, Heading, Section } from '../../components/ui';
import { ComingSoonShowcaseCard } from '../../components/products/ComingSoonShowcaseCard';
import { ProductShowcaseCard } from '../../components/products/ProductShowcaseCard';
import { Reveal } from '../../components/motion/Reveal';
import { products } from '../../data/products';
import styles from './ProductsSection.module.css';

const availableProducts = products.filter((product) => product.available);
const upcomingProducts = products.filter((product) => !product.available);

export function ProductsSection() {
  return (
    <Section tone="surface" id="productos">
      <Container>
        <Reveal>
          <Heading
            as={2}
            eyebrow="Nuestros productos"
            subtitle="Un ecosistema de herramientas creadas para simplificar tu negocio."
            measure="wide"
          >
            Productos reales. Una misma marca.
          </Heading>
        </Reveal>

        <div className={styles.block}>
          <Reveal delay={0.06}>
            <h3 className={styles.subheading}>Disponibles</h3>
            <p className={styles.subcopy}>Productos que ya puedes usar hoy.</p>
          </Reveal>
          <div className={styles.availableGrid}>
            {availableProducts.map((product, index) => (
              <ProductShowcaseCard key={product.slug} product={product} delay={0.08 * index} />
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <Reveal delay={0.06}>
            <h3 className={styles.subheading}>Próximos</h3>
            <p className={styles.subcopy}>Nuevas soluciones en desarrollo dentro del ecosistema Zemyx.</p>
          </Reveal>
          <div className={styles.upcomingGrid}>
            {upcomingProducts.map((product, index) => (
              <ComingSoonShowcaseCard key={product.slug} product={product} delay={0.06 * index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

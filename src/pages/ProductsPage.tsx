import { Container, FaqAccordion, Heading, ProductCard, Section } from '../components/ui';
import { Reveal } from '../components/motion/Reveal';
import { productsFaq } from '../data/faq';
import { products } from '../data/products';
import { usePageTitle } from '../hooks/usePageTitle';
import gridStyles from './home/ProductsSection.module.css';
import styles from './pages.module.css';

const disponibles = products.filter((product) => product.available).length;

export function ProductsPage() {
  usePageTitle('Productos');

  return (
    <>
      <div className={styles.fade}>
        <Section tone="surface">
          <Container>
            <div className={styles.stack}>
              <Reveal>
                <Heading
                  eyebrow="Productos"
                  subtitle="Cada producto tiene su propio espacio, su propio enfoque y su propia URL."
                  measure="wide"
                >
                  Un ecosistema. Diferentes soluciones.
                </Heading>
              </Reveal>
              <Reveal delay={0.08}>
                <div className={styles.stats}>
                  <span>
                    <strong>{disponibles}</strong> disponibles
                  </span>
                  <span>
                    <strong>{products.length - disponibles}</strong> próximamente
                  </span>
                </div>
              </Reveal>
              <div className={gridStyles.grid}>
                {products.map((product, index) => (
                  <ProductCard key={product.slug} product={product} delay={0.08 * index} />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Section id="faq-productos">
        <Container>
          <Reveal>
            <Heading
              as={2}
              eyebrow="FAQ"
              subtitle="Lo esencial sobre cómo funcionan los productos de Zemyx."
              measure="wide"
            >
              Preguntas sobre los productos
            </Heading>
          </Reveal>
          <FaqAccordion items={productsFaq} />
        </Container>
      </Section>
    </>
  );
}

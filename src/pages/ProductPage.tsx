import { useParams } from 'react-router-dom';
import { Button, Container, Heading, Section } from '../components/ui';
import { useComingSoon } from '../context/ComingSoonContext';
import { getProductBySlug } from '../data/products';
import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import { NotFoundPage } from './NotFoundPage';
import styles from './pages.module.css';

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { openComingSoon } = useComingSoon();

  usePageTitle(product?.name);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.fade}>
      <Section>
        <Container>
          <div className={styles.stack}>
            <Heading eyebrow="Producto" subtitle={product.host}>
              {product.name}
            </Heading>
            <p className={styles.meta}>{product.description}</p>
            <div className={styles.actions}>
              {product.available ? (
                <Button href={product.url} target="_blank" rel="noreferrer">
                  Abrir producto
                </Button>
              ) : (
                <Button type="button" onClick={() => openComingSoon(product.name)}>
                  Próximamente
                </Button>
              )}
              <Button href={site.mailto} variant="outline">
                Contacto
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

import { useParams } from 'react-router-dom';
import { Button, Container, Heading, Section } from '../components/ui';
import { getProductBySlug } from '../data/products';
import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import { NotFoundPage } from './NotFoundPage';
import styles from './pages.module.css';

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;

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
            <p className={styles.meta}>
              <a href={product.url} target="_blank" rel="noreferrer">
                {product.url}
              </a>
            </p>
            <div className={styles.actions}>
              <Button href={product.url} target="_blank" rel="noreferrer">
                Abrir producto
              </Button>
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

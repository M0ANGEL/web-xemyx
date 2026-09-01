import { Link } from 'react-router-dom';
import { BrandLogo } from '../brand/BrandLogo';
import { Container } from '../ui/Container';
import { useComingSoon } from '../../context/ComingSoonContext';
import { products } from '../../data/products';
import { site } from '../../data/site';
import styles from './Footer.module.css';

const companyLinks = [
  { to: '/#inicio', label: 'Inicio' },
  { to: '/#productos', label: 'Productos' },
  { to: '/#nosotros', label: 'Nosotros' },
  { to: '/#contacto', label: 'Contacto' },
];

export function Footer() {
  const { openComingSoon } = useComingSoon();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <BrandLogo />
            <p className={styles.description}>{site.footerDescription}</p>
          </div>

          <div className={styles.column}>
            <p className={styles.heading}>Navegación</p>
            <ul className={styles.links}>
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.heading}>Productos</p>
            <ul className={styles.links}>
              {products.map((product) => (
                <li key={product.slug}>
                  {product.available ? (
                    <a href={product.url} target="_blank" rel="noreferrer">
                      {product.name}
                    </a>
                  ) : (
                    <button type="button" onClick={() => openComingSoon(product.name)}>
                      {product.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.heading}>Contacto</p>
            <ul className={styles.links}>
              <li>
                <a href={site.mailto}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 {site.name}. Todos los derechos reservados.</span>
        </div>
      </Container>
    </footer>
  );
}

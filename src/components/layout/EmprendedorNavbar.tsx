import { useEffect, useState } from 'react';
import { AnimatePresence as Presence, motion, useReducedMotion } from 'framer-motion';
import { BrandLogo } from '../brand/BrandLogo';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { emprendedorTrial } from '../../data/emprendedor';
import { getProductBySlug } from '../../data/products';
import styles from './Navbar.module.css';
import productStyles from './EmprendedorNavbar.module.css';

const AnimatePresence = Presence as React.ComponentType<{
  children?: React.ReactNode;
  initial?: boolean;
}>;

const links = [
  { href: '#caracteristicas', label: 'Características' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#para-quien', label: 'Para quién es' },
];

export function EmprendedorNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const product = getProductBySlug('emprendedor');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
      <Container>
        <div className={styles.bar}>
          <div className={productStyles.brand}>
            <BrandLogo />
            <span className={productStyles.divider} aria-hidden="true" />
            <span className={productStyles.product}>{product?.name}</span>
          </div>

          <nav className={styles.desktopNav} aria-label="Emprendedor">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.end}>
            <ThemeToggle />
            <div className={styles.actions}>
              <Button
                size="sm"
                href={emprendedorTrial.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {emprendedorTrial.navLabel}
              </Button>
            </div>
            <button
              className={[styles.toggle, open ? styles.toggleOpen : ''].filter(Boolean).join(' ')}
              type="button"
              aria-expanded={open}
              aria-controls="menu-emprendedor"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((current) => !current)}
            >
              <span />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id="menu-emprendedor"
              className={styles.mobilePanel}
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className={styles.mobileNav} aria-label="Móvil">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className={styles.mobileCta}
                  href={emprendedorTrial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {emprendedorTrial.navLabel}
                </Button>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}

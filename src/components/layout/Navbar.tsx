import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence as Presence, motion, useReducedMotion } from 'framer-motion';
import { BrandLogo } from '../brand/BrandLogo';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import styles from './Navbar.module.css';

const AnimatePresence = Presence as React.ComponentType<{
  children?: React.ReactNode;
  initial?: boolean;
}>;

const links = [
  { to: '/productos', label: 'Productos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

function navClass({ isActive }: { isActive: boolean }) {
  return [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ');
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          <BrandLogo />

          <nav className={styles.desktopNav} aria-label="Principal">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button to="/productos" size="sm" withArrow>
              Explorar productos
            </Button>
          </div>

          <button
            className={[styles.toggle, open ? styles.toggleOpen : ''].filter(Boolean).join(' ')}
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id="menu-movil"
              className={styles.mobilePanel}
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className={styles.mobileNav} aria-label="Móvil">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button to="/productos" className={styles.mobileCta} withArrow>
                  Explorar productos
                </Button>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}

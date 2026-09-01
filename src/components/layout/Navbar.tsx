import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence as Presence, motion, useReducedMotion } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';
import { BrandLogo } from '../brand/BrandLogo';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import styles from './Navbar.module.css';

const AnimatePresence = Presence as React.ComponentType<{
  children?: React.ReactNode;
  initial?: boolean;
}>;

const sectionLinks = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#productos', label: 'Productos', id: 'productos' },
  { href: '#nosotros', label: 'Nosotros', id: 'nosotros' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
] as const;

const sectionIds = sectionLinks.map((link) => link.id);

function sectionLinkClass(active: boolean) {
  return [styles.link, active ? styles.active : ''].filter(Boolean).join(' ');
}

function homeHref(hash: string) {
  return hash.startsWith('#') ? hash : `#${hash}`;
}

function awayHref(hash: string) {
  const id = hash.replace('#', '');
  return `/#${id}`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const isHome = pathname === '/';
  const activeSection = useActiveSection(sectionIds, isHome);

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
          <BrandLogo className={styles.brand} />

          <nav className={styles.desktopNav} aria-label="Principal">
            {sectionLinks.map((link) =>
              isHome ? (
                <a
                  key={link.href}
                  href={homeHref(link.href)}
                  className={sectionLinkClass(activeSection === link.id)}
                  aria-current={activeSection === link.id ? 'location' : undefined}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} to={awayHref(link.href)} className={styles.link}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className={styles.end}>
            <ThemeToggle />
            <div className={styles.actions}>
              {isHome ? (
                <Button href="#productos" size="sm" withArrow>
                  Explorar productos
                </Button>
              ) : (
                <Button to="/#productos" size="sm" withArrow>
                  Explorar productos
                </Button>
              )}
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
                {sectionLinks.map((link) =>
                  isHome ? (
                    <a
                      key={link.href}
                      href={homeHref(link.href)}
                      className={[styles.mobileLink, activeSection === link.id ? styles.mobileActive : '']
                        .filter(Boolean)
                        .join(' ')}
                      aria-current={activeSection === link.id ? 'location' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={awayHref(link.href)}
                      className={styles.mobileLink}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                {isHome ? (
                  <Button href="#productos" className={styles.mobileCta} withArrow onClick={() => setOpen(false)}>
                    Explorar productos
                  </Button>
                ) : (
                  <Button to="/#productos" className={styles.mobileCta} withArrow onClick={() => setOpen(false)}>
                    Explorar productos
                  </Button>
                )}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}

import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ScrollToTop } from './ScrollToTop';
import styles from './MainLayout.module.css';

export function MainLayout() {
  return (
    <div className={styles.shell}>
      <ScrollToTop />
      <a className={styles.skip} href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

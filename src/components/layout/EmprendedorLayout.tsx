import { Outlet } from 'react-router-dom';
import { EmprendedorNavbar } from './EmprendedorNavbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import styles from './MainLayout.module.css';

export function EmprendedorLayout() {
  return (
    <div className={styles.shell}>
      <ScrollToTop />
      <a className={styles.skip} href="#contenido">
        Saltar al contenido
      </a>
      <EmprendedorNavbar />
      <main id="contenido" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

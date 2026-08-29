import { Navigate, Route, Routes } from 'react-router-dom';
import { EmprendedorLayout } from '../components/layout/EmprendedorLayout';
import { MainLayout } from '../components/layout/MainLayout';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { EmprendedorPage } from '../pages/emprendedor/EmprendedorPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductPage } from '../pages/ProductPage';
import { ProductsPage } from '../pages/ProductsPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<EmprendedorLayout />}>
        <Route path="/productos/emprendedor" element={<EmprendedorPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/productos/gastos" element={<Navigate to="/productos/finanzas" replace />} />
        <Route path="/productos/:slug" element={<ProductPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

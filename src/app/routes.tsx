import { Navigate, Route, Routes } from 'react-router-dom';
import { ExternalRedirect } from '../components/routing/ExternalRedirect';
import { HashRedirect } from '../components/routing/HashRedirect';
import { MainLayout } from '../components/layout/MainLayout';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductPage } from '../pages/ProductPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/productos/emprendedor" element={<ExternalRedirect to="https://emprendedor.zemyx.com" />} />
      <Route path="/productos/envios" element={<ExternalRedirect to="https://envios.zemyx.com" />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<HashRedirect to="productos" />} />
        <Route path="/productos/gastos" element={<Navigate to="/productos/finanzas" replace />} />
        <Route path="/productos/:slug" element={<ProductPage />} />
        <Route path="/nosotros" element={<HashRedirect to="nosotros" />} />
        <Route path="/contacto" element={<HashRedirect to="contacto" />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

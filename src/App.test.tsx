import './jest-polyfills.js';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { site } from './data/site';

test('renders products showcase sections on home', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(screen.getByRole('heading', { name: /productos reales/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^disponibles$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^próximos$/i })).toBeInTheDocument();
});

test('renders the Zemyx home experience', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /software que se adapta a tu mundo/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText('Emprendedor').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Envíos').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Finanzas Personales').length).toBeGreaterThan(0);
  expect(screen.queryByText(/^Gastos$/)).not.toBeInTheDocument();
  expect(screen.queryByText(/^Mensajería$/)).not.toBeInTheDocument();
  expect(screen.queryByText(/moar/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /hablar con zemyx/i })).toHaveAttribute(
    'href',
    'mailto:hola@zemyx.com'
  );
  expect(screen.getByText(/creamos sistemas para cada problema/i )).toBeInTheDocument();
  expect(screen.getByText(/¿tienes una idea\?/i)).toBeInTheDocument();
});

test('menu still opens the coming soon dialog', async () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: /menús digitales para restaurantes/i }));

  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('heading', { name: /muy pronto/i })).toBeInTheDocument();
  expect(within(dialog).getByText('Menú')).toBeInTheDocument();
});

test('available product cards open the app lobby directly', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  const productLinks = screen.getAllByRole('link', { name: /conocer producto/i });
  const hrefs = productLinks.map((link) => link.getAttribute('href'));

  expect(hrefs).toEqual(
    expect.arrayContaining([
      'https://envios.zemyx.com',
      'https://finanzas.zemyx.com',
      'https://emprendedor.zemyx.com',
    ])
  );

  productLinks.forEach((link) => {
    expect(link).toHaveAttribute('target', '_blank');
  });
});

test('whatsapp button uses the official contact link', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute(
    'href',
    site.whatsappUrl
  );
});

test('mail button opens the Zemyx inbox', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(screen.getByRole('link', { name: /escribir a zemyx por correo/i })).toHaveAttribute(
    'href',
    site.mailto
  );
});

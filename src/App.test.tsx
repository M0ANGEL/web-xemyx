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
  expect(screen.getByText(/creamos sistemas para cada problema/i)).toBeInTheDocument();
  expect(screen.getByText(/¿tienes una idea\?/i)).toBeInTheDocument();
});

test('unavailable products open the coming soon dialog', async () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  await userEvent.click(screen.getAllByRole('button', { name: /finanzas personales/i })[0]);

  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('heading', { name: /muy pronto/i })).toBeInTheDocument();
  expect(within(dialog).getByText('Finanzas Personales')).toBeInTheDocument();
});

test('finanzas personales and menu also open coming soon', async () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  await userEvent.click(screen.getAllByRole('button', { name: /finanzas personales/i })[0]);
  expect(within(screen.getByRole('dialog')).getByText('Finanzas Personales')).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /entendido/i }));
  await userEvent.click(screen.getAllByRole('button', { name: /menú/i })[0]);
  expect(screen.getByRole('heading', { name: /muy pronto/i })).toBeInTheDocument();
});

test('available product cards open the app lobby directly', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  const enviosLink = screen.getAllByRole('link', { name: /conocer producto/i })[0];
  expect(enviosLink).toHaveAttribute('href', 'https://envios.zemyx.com');
  expect(enviosLink).toHaveAttribute('target', '_blank');

  const emprendedorLink = screen.getAllByRole('link', { name: /conocer producto/i })[1];
  expect(emprendedorLink).toHaveAttribute('href', 'https://emprendedor.zemyx.com');
  expect(emprendedorLink).toHaveAttribute('target', '_blank');
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

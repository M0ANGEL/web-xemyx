import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { site } from './data/site';

test('renders the Zemyx home experience', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /software que se adapta a tu mundo/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText('Emprendedor').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Finanzas Personales').length).toBeGreaterThan(0);
  expect(screen.queryByText(/^Gastos$/)).not.toBeInTheDocument();
  expect(screen.queryByText(/moar/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /hablar con zemyx/i })).toHaveAttribute(
    'href',
    'mailto:hola@zemyx.com'
  );
});

test('unavailable products open the coming soon dialog', async () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  await userEvent.click(screen.getAllByRole('button', { name: /mensajería/i })[0]);

  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('heading', { name: /muy pronto/i })).toBeInTheDocument();
  expect(within(dialog).getByText('Mensajería')).toBeInTheDocument();
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

test('emprendedor card goes to the product landing', async () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  const link = screen.getAllByRole('link', { name: /emprendedor/i })[0];
  expect(link).toHaveAttribute('href', '/productos/emprendedor');

  await userEvent.click(link);
  expect(
    await screen.findByRole('heading', { name: /tu negocio, en un solo lugar/i })
  ).toBeInTheDocument();
  const trialLinks = screen.getAllByRole('link', { name: /reclama tu prueba gratis/i });
  expect(trialLinks.length).toBeGreaterThan(0);
  expect(trialLinks[0]).toHaveAttribute('href', 'https://emprendedor.zemyx.com');
  expect(trialLinks[0]).toHaveAttribute('target', '_blank');
});

test('whatsapp button uses the official contact link', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute(
    'href',
    site.whatsappUrl
  );
});

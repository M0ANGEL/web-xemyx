import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Zemyx home experience', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /software que se adapta a tu mundo/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText('Emprendedor').length).toBeGreaterThan(0);
  expect(screen.queryByText(/moar/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/inventario\.zemyx\.com/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /hablar con zemyx/i })).toHaveAttribute(
    'href',
    'mailto:hola@zemyx.com'
  );
});

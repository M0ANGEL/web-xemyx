import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'claro' : 'oscuro';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${next}`}
      title={`Cambiar a modo ${next}`}
    >
      {theme === 'dark' ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
    </button>
  );
}

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  applyTheme,
  getSystemTheme,
  persistTheme,
  readStoredTheme,
  type Theme,
} from './theme';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readInitialTheme(): Theme {
  if (typeof document === 'undefined') {
    return 'light';
  }
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'light' || current === 'dark') {
    return current;
  }
  return readStoredTheme() ?? getSystemTheme();
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}

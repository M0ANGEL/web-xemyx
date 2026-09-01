import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        window.setTimeout(scrollToTarget, 0);
      }
      return;
    }

    try {
      window.scrollTo(0, 0);
    } catch {
      // jsdom no implementa scrollTo
    }
  }, [pathname, hash]);

  return null;
}

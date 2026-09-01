import { useEffect, useState } from 'react';

/**
 * Resalta la sección cuyo ancla está más cerca del tercio superior del viewport.
 */
export function useActiveSection(sectionIds: readonly string[], enabled = true) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!enabled) {
      setActiveId('');
      return undefined;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);

    if (sections.length === 0) {
      return undefined;
    }

    const update = () => {
      const marker = window.innerHeight * 0.32;
      let current = '';

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();
        if (top <= marker) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionIds, enabled]);

  return activeId;
}

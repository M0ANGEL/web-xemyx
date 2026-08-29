import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ComingSoonModal } from '../components/feedback/ComingSoonModal';

type ComingSoonContextValue = {
  openComingSoon: (productName?: string) => void;
  closeComingSoon: () => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState<string | undefined>();

  const openComingSoon = useCallback((name?: string) => {
    setProductName(name);
    setOpen(true);
  }, []);

  const closeComingSoon = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openComingSoon, closeComingSoon }),
    [openComingSoon, closeComingSoon]
  );

  return (
    <ComingSoonContext.Provider value={value}>
      {children}
      <ComingSoonModal open={open} productName={productName} onClose={closeComingSoon} />
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const context = useContext(ComingSoonContext);
  if (!context) {
    throw new Error('useComingSoon debe usarse dentro de ComingSoonProvider');
  }
  return context;
}

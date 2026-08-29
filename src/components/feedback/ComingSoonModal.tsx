import { useEffect, useRef } from 'react';
import { AnimatePresence as Presence, motion, useReducedMotion } from 'framer-motion';
import { products } from '../../data/products';
import { fadeUp } from '../../motion/presets';
import { Button } from '../ui/Button';
import { ProductIcon } from '../ui/ProductIcon';
import styles from './ComingSoonModal.module.css';

const AnimatePresence = Presence as React.ComponentType<{
  children?: React.ReactNode;
}>;

type ComingSoonModalProps = {
  open: boolean;
  productName?: string;
  onClose: () => void;
};

export function ComingSoonModal({ open, productName, onClose }: ComingSoonModalProps) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const product = products.find((item) => item.name === productName);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    lastFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      lastFocus.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={styles.backdrop}
          onClick={onClose}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            aria-describedby="coming-soon-text"
            className={styles.dialog}
            onClick={(event) => event.stopPropagation()}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.orb} aria-hidden="true" />
            <button
              ref={closeRef}
              type="button"
              className={styles.close}
              aria-label="Cerrar"
              onClick={onClose}
            >
              ×
            </button>

            <motion.div
              className={styles.content}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.06 },
                },
              }}
            >
              <motion.span className={styles.icon} variants={fadeUp}>
                <ProductIcon id={product?.icon ?? 'store'} />
              </motion.span>
              <motion.p className={styles.eyebrow} variants={fadeUp}>
                Producto Zemyx
              </motion.p>
              <motion.h2 id="coming-soon-title" className={styles.title} variants={fadeUp}>
                Muy pronto
              </motion.h2>
              <motion.p className={styles.product} variants={fadeUp}>
                {productName ?? 'Zemyx'}
              </motion.p>
              <motion.p id="coming-soon-text" className={styles.text} variants={fadeUp}>
                Estamos preparando este producto. Pronto podrás conocer cómo
                funciona y qué puede hacer por ti.
              </motion.p>
              <motion.div className={styles.action} variants={fadeUp}>
                <Button type="button" onClick={onClose}>
                  Entendido
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeUpTransition } from '../../motion/presets';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      transition={fadeUpTransition(delay)}
    >
      {children}
    </motion.div>
  );
}

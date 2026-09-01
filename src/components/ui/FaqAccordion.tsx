import { Reveal } from '../motion/Reveal';
import styles from './FaqAccordion.module.css';

type FaqAccordionProps = {
  items: readonly { pregunta: string; respuesta: string }[];
  openFirst?: boolean;
};

export function FaqAccordion({ items, openFirst = true }: FaqAccordionProps) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <Reveal key={item.pregunta} delay={0.06 * index}>
          <details className={styles.item} open={openFirst && index === 0}>
            <summary>{item.pregunta}</summary>
            <p>{item.respuesta}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

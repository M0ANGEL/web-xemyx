import styles from './Section.module.css';

type Tone = 'default' | 'muted' | 'surface';

type SectionProps = {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
};

export function Section({ children, tone = 'default', className, id }: SectionProps) {
  const classes = [
    styles.section,
    tone !== 'default' ? styles[tone] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

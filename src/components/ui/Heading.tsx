import styles from './Heading.module.css';

type Level = 1 | 2 | 3;
type Size = 'display' | 'xl' | 'lg' | 'md';
type Measure = 'default' | 'wide' | 'none';

type HeadingProps = {
  as?: Level;
  size?: Size;
  eyebrow?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  measure?: Measure;
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as = 1,
  size,
  eyebrow,
  subtitle,
  align = 'left',
  measure = 'default',
  children,
  className,
}: HeadingProps) {
  const Tag = `h${as}` as const;
  const titleSize = size ?? (as === 1 ? 'xl' : as === 2 ? 'lg' : 'md');

  return (
    <div
      className={[
        styles.group,
        align === 'center' ? styles.center : '',
        measure !== 'default' ? styles[measure] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Tag className={[styles.title, styles[titleSize]].join(' ')}>{children}</Tag>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}

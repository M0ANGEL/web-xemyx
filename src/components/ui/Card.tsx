import { Link } from 'react-router-dom';
import styles from './Card.module.css';

type CardProps = {
  title: string;
  label?: string;
  children?: React.ReactNode;
  to?: string;
  href?: string;
  actionLabel?: string;
};

export function Card({ title, label, children, to, href, actionLabel }: CardProps) {
  const content = (
    <>
      {label ? <p className={styles.label}>{label}</p> : null}
      <h3 className={styles.title}>{title}</h3>
      {children ? <div className={styles.body}>{children}</div> : null}
      {actionLabel ? <span className={styles.action}>{actionLabel}</span> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={styles.card}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles.card} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className={styles.card}>{content}</article>;
}

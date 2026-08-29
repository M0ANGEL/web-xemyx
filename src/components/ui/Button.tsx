import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type SharedProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
};

type ButtonAsButton = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  to: string;
  href?: undefined;
};

type ButtonAsAnchor = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'> & {
    href: string;
    to?: undefined;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

function classNames(variant: Variant, size: Size, className?: string) {
  return [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');
}

function Content({ children, withArrow }: { children: React.ReactNode; withArrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {withArrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className, withArrow } = props;
  const classes = classNames(variant, size, className);
  const content = <Content withArrow={withArrow}>{children}</Content>;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, target, rel } = props;
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }

  const { type = 'button', onClick, disabled } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}

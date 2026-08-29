import { Link } from 'react-router-dom';
import logo from '../../assets/brand/logo.jpg';
import { site } from '../../data/site';
import styles from './BrandLogo.module.css';

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link to="/" className={[styles.logo, className].filter(Boolean).join(' ')} aria-label={site.name}>
      <img className={styles.mark} src={logo} alt={site.name} />
    </Link>
  );
}

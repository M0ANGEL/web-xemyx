import type { emprendedorFeatures } from '../../data/emprendedor';

type FeatureIconId = (typeof emprendedorFeatures)[number]['icon'];

type FeatureIconProps = {
  id: FeatureIconId;
  className?: string;
};

export function FeatureIcon({ id, className }: FeatureIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {id === 'package' ? (
        <>
          <path d="M21 8.5 12 4 3 8.5v7L12 20l9-4.5z" />
          <path d="M12 12.5V20M3 8.5l9 4 9-4" />
        </>
      ) : null}
      {id === 'boxes' ? (
        <>
          <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.2" />
          <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.2" />
          <rect x="8.2" y="13" width="7.5" height="7.5" rx="1.2" />
        </>
      ) : null}
      {id === 'sales' ? (
        <>
          <path d="M4 17.5 9 12l3.5 3.5L20 7" />
          <path d="M14.5 7H20v5.5" />
        </>
      ) : null}
      {id === 'users' ? (
        <>
          <circle cx="9" cy="8" r="2.4" />
          <path d="M4.8 18c.4-2.6 2.4-4 4.2-4s3.8 1.4 4.2 4" />
          <circle cx="16.2" cy="8.4" r="2" />
          <path d="M15 14.2c1.6.2 3.2 1.3 3.6 3.8" />
        </>
      ) : null}
      {id === 'control' ? (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 12 16 8.8" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </>
      ) : null}
    </svg>
  );
}

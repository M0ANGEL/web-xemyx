import type { ProductIconId } from '../../data/products';

type ProductIconProps = {
  id: ProductIconId;
  className?: string;
};

export function ProductIcon({ id, className }: ProductIconProps) {
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
      {id === 'wallet' ? (
        <>
          <rect x="4" y="6.5" width="16" height="11" rx="2.2" />
          <path d="M4 10h16" />
          <circle cx="16.2" cy="13.6" r="0.9" fill="currentColor" stroke="none" />
        </>
      ) : null}
      {id === 'menu' ? (
        <>
          <rect x="5" y="4.5" width="14" height="15" rx="2" />
          <path d="M8.5 9h7M8.5 12.2h7M8.5 15.4h4.5" />
        </>
      ) : null}
      {id === 'store' ? (
        <>
          <path d="M7 9.5 8.2 5.8A1.4 1.4 0 0 1 9.5 5h5a1.4 1.4 0 0 1 1.3.8L17 9.5" />
          <path d="M5.5 9.5h13v8A1.5 1.5 0 0 1 17 19H7A1.5 1.5 0 0 1 5.5 17.5z" />
          <path d="M10 19v-4.2h4V19" />
        </>
      ) : null}
      {id === 'package' ? (
        <>
          <path d="M21 8.5 12 4 3 8.5v7L12 20l9-4.5z" />
          <path d="M12 12.5V20M3 8.5l9 4 9-4" />
        </>
      ) : null}
    </svg>
  );
}

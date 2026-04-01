import type { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
}

const IconFrame = ({ children }: IconProps) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

export const ShieldIcon = () => (
  <IconFrame>
    <path d="M32 8 14 14v14c0 13 7.7 24.8 18 28 10.3-3.2 18-15 18-28V14L32 8Z" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="m24 32 6 6 12-14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IconFrame>
);

export const TruckIcon = () => (
  <IconFrame>
    <rect x="10" y="18" width="28" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M38 24h8l8 8v6h-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="22" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="46" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="3" />
  </IconFrame>
);

export const CreditCardIcon = () => (
  <IconFrame>
    <rect x="10" y="16" width="44" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M10 26h44" stroke="currentColor" strokeWidth="3" />
    <path d="M18 36h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const SearchIcon = () => (
  <IconFrame>
    <circle cx="28" cy="28" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="m38 38 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const BagIcon = () => (
  <IconFrame>
    <path d="M18 22h28l-2 28H20l-2-28Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M24 24v-4a8 8 0 0 1 16 0v4" fill="none" stroke="currentColor" strokeWidth="3" />
  </IconFrame>
);

export const HeartIcon = () => (
  <IconFrame>
    <path d="M32 52 14 34a11 11 0 1 1 15.6-15.6L32 20.8l2.4-2.4A11 11 0 0 1 50 34L32 52Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
  </IconFrame>
);

export const UserIcon = () => (
  <IconFrame>
    <circle cx="32" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M18 50a14 14 0 0 1 28 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const CartIcon = () => (
  <IconFrame>
    <circle cx="24" cy="48" r="3" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="44" cy="48" r="3" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M12 16h6l4 22h24l6-16H20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IconFrame>
);

export const TechnologyCategoryIcon = () => (
  <IconFrame>
    <rect x="10" y="16" width="26" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
    <rect x="40" y="24" width="14" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M19 44h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const MarketCategoryIcon = () => (
  <IconFrame>
    <path d="M14 24h36v22a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V24Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M18 16h28l4 8H14l4-8Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M26 32h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const DrinksCategoryIcon = () => (
  <IconFrame>
    <path d="M23 12h10v10l4 7v19a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V29l4-7V12Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <rect x="42" y="26" width="10" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M25 22h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const ToolsCategoryIcon = () => (
  <IconFrame>
    <path d="m18 18 28 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="m46 18-8 8 8 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m26 38-8 8-6-6 8-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m24 16 8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const HealthCategoryIcon = () => (
  <IconFrame>
    <path d="M32 24c0-5.5 4.2-10 9.4-10A9.6 9.6 0 0 1 51 23.6C51 35 32 46 32 46S13 35 13 23.6A9.6 9.6 0 0 1 22.6 14c5.2 0 9.4 4.5 9.4 10Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M20 38c3-7 7-10 12-10 4 0 7 2 12 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconFrame>
);

export const FitnessCategoryIcon = () => (
  <IconFrame>
    <path d="M16 46h32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 46V22l10-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 46V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="33" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="m33 22 5 8-4 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m29 30 7 2 7-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IconFrame>
);

export const FashionCategoryIcon = () => (
  <IconFrame>
    <path d="m24 16 8 6 8-6 6 9-8 5v18H26V30l-8-5 6-9Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M32 22v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M46 18h6l-4 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IconFrame>
);

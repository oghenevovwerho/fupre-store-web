// ── Star helpers ─────────────────────────────────────────────────────────────
export function starType(index: number, rating: number): 'full' | 'half' | 'empty' {
  if (index <= Math.floor(rating)) return 'full';
  if (index - 0.5 <= rating) return 'half';
  return 'empty';
}

export function starChar(index: number, rating: number): string {
  const t = starType(index, rating);
  return t === 'full' ? '★' : t === 'half' ? '\uF587' : '☆';
}

// ── Size guide rows ───────────────────────────────────────────────────────────
export const SIZE_GUIDE_ROWS: string[][] = [
  ['XS', '80–84', '62–66', '88–92'],
  ['S', '84–88', '66–70', '92–96'],
  ['M', '88–94', '70–76', '96–102'],
  ['L', '94–100', '76–82', '102–108'],
  ['XL', '100–108', '82–90', '108–116'],
];

// ── Fit distribution ──────────────────────────────────────────────────────────
export const FIT_DATA = [
  { starCount: 5, pct: 5 },
  { starCount: 4, pct: 50 },
  { starCount: 3, pct: 15 },
  { starCount: 2, pct: 20 },
  { starCount: 1, pct: 10 },
];

// ── Trust badge data ──────────────────────────────────────────────────────────
export const TRUST_ITEMS = [
  { d: 'M5 12h14M12 5l7 7-7 7', label: 'Free delivery for over \u20A61,000,000' },
  { d: 'M1 4v6h6M3.51 15a9 9 0 102.13-9.36L1 10', label: '28-day returns' },
  { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Secure checkout' },
];

// ── Sample / default product ──────────────────────────────────────────────────
export { DEFAULT_PRODUCT } from './defaultProduct.js';

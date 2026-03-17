import type { SimilarProduct } from './types.js';

export const DEFAULT_SIMILAR_PRODUCTS: SimilarProduct[] = [
  {
    id: 'LST-002',
    name: 'Linen Trousers',
    subtitle: 'Wide-leg cut in garment-dyed linen',
    price: 165,
    comparePrice: 120,
    currency: `\u20A6`,
    tag: 'new',
    colours: [
      { name: 'Sand', hex: '#c0a882' },
      { name: 'Chalk', hex: '#f0ede8' },
      { name: 'Slate', hex: '#4a5568' },
    ],
    imageBg: '#ddd8cf',
  },
  {
    id: 'SMD-003',
    name: 'Silk Midi Dress',
    subtitle: 'Fluid bias-cut in washed habotai silk',
    price: 220,
    comparePrice: 360,
    currency: `\u20A6`,
    tag: 'sale',
    colours: [
      { name: 'Ivory', hex: '#f5f0e8' },
      { name: 'Blush', hex: '#d4a090' },
      { name: 'Moss', hex: '#7a8c7e' },
    ],
    imageBg: '#e4ddd6',
  },
  {
    id: 'LBT-005',
    name: 'Linen Blazer',
    subtitle: 'Unstructured single-button blazer',
    price: 245,
    comparePrice: null,
    currency: `\u20A6`,
    tag: null,
    colours: [
      { name: 'Sand', hex: '#c0a882' },
      { name: 'Navy', hex: '#2d3a4a' },
    ],
    imageBg: '#d8d2c8',
  },
  {
    id: 'MCN-004',
    name: 'Merino Crewneck',
    subtitle: 'Relaxed fit in extra-fine merino wool',
    price: 145,
    comparePrice: 235,
    currency: `\u20A6`,
    tag: null,
    colours: [
      { name: 'Ecru', hex: '#ede8df' },
      { name: 'Slate', hex: '#4a5568' },
      { name: 'Brown', hex: '#8c6a5a' },
    ],
    imageBg: '#e0dbd4',
  },
];

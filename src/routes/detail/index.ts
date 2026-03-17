export { default as ProductDetail }     from './ProductDetail.svelte';
export { default as ProductGallery }    from './components/ProductGallery.svelte';
export { default as StarRating }        from './components/StarRating.svelte';
export { default as ColourSelector }    from './components/ColourSelector.svelte';
export { default as SizeSelector }      from './components/SizeSelector.svelte';
export { default as AddToCart }         from './components/AddToCart.svelte';
export { default as ProductAccordions } from './components/ProductAccordions.svelte';
export { default as SimilarProducts }   from './components/SimilarProducts.svelte';

export type {
  Product,
  Colour,
  ProductImage,
  Review,
  SimilarProduct,
  CartPayload,
  WishlistPayload,
} from './types.js';

export {
  DEFAULT_PRODUCT,
  FIT_DATA,
  SIZE_GUIDE_ROWS,
  TRUST_ITEMS,
  starType,
  starChar,
} from './utils.js';

export { DEFAULT_SIMILAR_PRODUCTS } from './defaultSimilarProducts.js';

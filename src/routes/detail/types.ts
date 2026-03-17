export interface Colour {
  name: string;
  hex: string;
}

export interface ProductImage {
  label: string;
}

export interface Review {
  author: string;
  date: string;
  rating: number;
  size: string;
  fit: string;
  body: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  comparePrice: number | null;
  currency: string;
  category: string;
  rating: number;
  reviewCount: number;
  tag: 'new' | 'sale' | null;
  description: string;
  details: string[];
  shipping: string[];
  sizes: string[];
  outOfStock: string[];
  colours: Colour[];
  images: ProductImage[];
  reviews: Review[];
}

export interface SimilarProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  comparePrice: number | null;
  currency: string;
  tag: 'new' | 'sale' | null;
  /** Swatch colours available for this product */
  colours: Colour[];
  /** Background tint used for the placeholder image area */
  imageBg: string;
  href?: string;
}

export interface CartPayload {
  product: Product;
  colour: Colour;
  size: string;
  quantity: number;
}

export interface WishlistPayload {
  product: Product;
  saved: boolean;
}

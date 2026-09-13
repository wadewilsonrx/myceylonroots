export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: string;
  currency: string;
  onlineStoreUrl: string;
  images: ProductImage[];
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  products: Product[];
}

export interface Testimonial {
  quote: string;
  subtitle: string;
  author: string;
  role: string;
  rating: number;
}

export interface ResellerStore {
  name: string;
  location: string;
  contact: string;
  email: string;
}

export interface CountryReseller {
  country: string;
  stores: ResellerStore[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

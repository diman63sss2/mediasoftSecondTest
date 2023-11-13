import { Product } from 'entities/Product';

export interface ProductDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Product;
}

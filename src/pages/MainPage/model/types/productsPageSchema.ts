import { Product, ProductsCategory, ProductsSortField } from 'entities/Product';
import { EntityState } from '@reduxjs/toolkit';

export interface ProductsPageSchema extends EntityState<Product>{
  isLoading?: boolean;
  error?: string;

  page: number;
  limit?: number;
  hasMore: boolean;
  countPages: number;

  // filters
  sort?: ProductsSortField;
  category: ProductsCategory;

  _inited: boolean;
}

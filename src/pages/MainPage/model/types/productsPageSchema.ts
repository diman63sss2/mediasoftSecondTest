import { Product } from 'entities/Product';
import { EntityState } from '@reduxjs/toolkit';

export interface ProductsPageSchema extends EntityState<Product>{
  isLoading?: boolean;
  error?: string;
}

import { Product, ProductsCategory, ProductsSortField } from 'entities/Product';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

export interface ProductsPageSchema {
  isLoading: boolean;
  error: string | undefined;
  entities: Product[]
  page: number;
  limit: number;
  hasMore: boolean;
  countPages: number;

  // filters
  sort: ProductsSortField;
  category: ProductsCategory;

  _inited: boolean;
}

export const initialProductPage: ProductsPageSchema = {
    isLoading: false,
    error: undefined,
    entities: [],
    page: 1,
    limit: 12,
    hasMore: true,
    countPages: 0,
    sort: ProductsSortField.TITLE,
    category: ProductsCategory.ALL,
    _inited: false,
};

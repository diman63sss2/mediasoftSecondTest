import { User, UserSchema } from 'entities/User/model/types/user';

export enum ProductsSortField {
  PRICE = 'price',
  TITLE = 'title',
}

export enum ProductsCategory {
  MENS_CLOTHING = "men's clothing",
  JEWELERY = 'jewelery',
  ELECTRONICS = 'electronics',
  WOMENS_CLOTHING = "women's clothing",
  ALL = 'ALL',
}

export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  rate: number;
  price: number;
  isLoading: boolean;
}

export interface ProductDetailsSchema2 {
  isLoading: boolean;
}

export interface ProductDetailsSchema {
  isLoading: boolean;
  error: string | undefined;
  data: Product;
}

export const initialStateProductDetails: ProductDetailsSchema = {
    isLoading: true,
    error: '',
    data: {
        id: 0,
        isLoading: true,
        category: '',
        image: '',
        price: -1,
        rate: -1,
        title: '',
        description: '',
    } as Product,
};

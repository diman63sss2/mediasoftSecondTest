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
  category: string;
  rate: number;
  price: number;
  isLoading: boolean;
}

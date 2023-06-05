import { $host } from './index';

export const getProducts = async (settings) => {
  return await $host.get('http://localhost:3000/products');
};

export const getCategories = async () => {
  return await $host.get('/products/categories');
};

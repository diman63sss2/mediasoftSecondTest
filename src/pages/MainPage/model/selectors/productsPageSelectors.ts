import { StateSchema } from 'app/providers/StoreProvider';
import { ProductsCategory, ProductsSortField } from 'entities/Product';

export const getProductsPageIsLoading = (state: StateSchema) => state.productsPage?.isLoading || false;
export const getProductsPageError = (state: StateSchema) => state.productsPage?.error;
export const getProductsPageNum = (state: StateSchema) => state.productsPage?.page || 0;
export const getProductsPageLimit = (state: StateSchema) => state.productsPage?.limit || 12;
export const getProductsPageCount = (state: StateSchema) => state.productsPage?.countPages || 0;
export const getProductsPageInited = (state: StateSchema) => state.productsPage?._inited;
export const getProductsPageSort = (state: StateSchema) => state.productsPage?.sort ?? ProductsSortField.TITLE;
export const getProductsPageCategory = (state: StateSchema) => state.productsPage?.category ?? ProductsCategory.ALL;

// for infinity pagination
export const getProductsPageHasMore = (state: StateSchema) => state.productsPage?.hasMore;

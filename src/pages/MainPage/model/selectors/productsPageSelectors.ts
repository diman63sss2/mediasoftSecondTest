import { StateSchema } from 'app/providers/StoreProvider';

export const getProductsPageIsLoading = (state: StateSchema) => state.productsPage?.isLoading || false;
export const getProductsPageError = (state: StateSchema) => state.productsPage?.error;
export const getProductsPageNum = (state: StateSchema) => state.productsPage?.page || 0;
export const getProductsPageLimit = (state: StateSchema) => state.productsPage?.limit || 12;

// for infinity pagination
export const getProductsPageHasMore = (state: StateSchema) => state.productsPage?.hasMore;

export const getProductsPageCount = (state: StateSchema) => state.productsPage?.countPages || 0;

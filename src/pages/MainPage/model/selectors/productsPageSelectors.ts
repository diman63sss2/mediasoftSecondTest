import { StateSchema } from 'app/providers/StoreProvider';

export const getProductsPageIsLoading = (state: StateSchema) => state.productsPage?.isLoading || false;
export const getProductsPageError = (state: StateSchema) => state.productsPage?.error;

import { StateSchema } from 'app/providers/StoreProvider';

export const getProductDetailsData = (state: StateSchema) => state.productDetails?.data;
export const getProductDetailsIsLoading = (state: StateSchema) => state.productDetails?.isLoading || false;
export const getProductDetailsError = (state: StateSchema) => state.productDetails?.error;

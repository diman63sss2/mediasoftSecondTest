import { RootState } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';

const selectGetProductDetailsIsLoading = (state: RootState) => state.productDetailsReducer.isLoading;

export const getProductDetailsIsLoading = createSelector(
    selectGetProductDetailsIsLoading,
    (isLoading) => isLoading,
);

const selectGetProductDetailsError = (state: RootState) => state.productDetailsReducer.error;

export const getProductDetailsError = createSelector(
    selectGetProductDetailsError,
    (error) => error,
);

const selectGetProductDetailsData = (state: RootState) => state.productDetailsReducer.data;

export const getProductDetailsData = createSelector(
    selectGetProductDetailsData,
    (data) => data,
);

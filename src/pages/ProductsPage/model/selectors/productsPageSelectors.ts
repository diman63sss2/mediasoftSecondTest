import { RootState } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';

const selectGetProductsPageInited = (state: RootState) => state.ProductPageUsernameReducer._inited;

export const getProductsPageInited = createSelector(
    selectGetProductsPageInited,
    (inited) => inited,
);

const selectGetProductsPageSort = (state: RootState) => state.ProductPageUsernameReducer.sort;

export const getProductsPageSort = createSelector(
    selectGetProductsPageSort,
    (sort) => sort,
);

const selectGetProductsPageLimit = (state: RootState) => state.ProductPageUsernameReducer.limit;

export const getProductsPageLimit = createSelector(
    selectGetProductsPageLimit,
    (limit) => limit,
);

const selectGetProductsPageNum = (state: RootState) => state.ProductPageUsernameReducer.page;

export const getProductsPageNum = createSelector(
    selectGetProductsPageNum,
    (page) => page,
);

const selectGetProductsPageCategory = (state: RootState) => state.ProductPageUsernameReducer.category;

export const getProductsPageCategory = createSelector(
    selectGetProductsPageCategory,
    (category) => category,
);

const selectGetProducts = (state: RootState) => state.ProductPageUsernameReducer.entities;

export const getProducts = createSelector(
    selectGetProducts,
    (products) => products,
);

const selectGetProductsPageIsLoading = (state: RootState) => state.ProductPageUsernameReducer.isLoading;

export const getProductsPageIsLoading = createSelector(
    selectGetProductsPageIsLoading,
    (isLoading) => isLoading,
);

const selectGetProductsPageCount = (state: RootState) => state.ProductPageUsernameReducer.countPages;

export const getProductsPageCount = createSelector(
    selectGetProductsPageCount,
    (countPages) => countPages,
);

const selectGetProductsPageError = (state: RootState) => state.ProductPageUsernameReducer.error;

export const getProductsPageError = createSelector(
    selectGetProductsPageError,
    (error) => error,
);

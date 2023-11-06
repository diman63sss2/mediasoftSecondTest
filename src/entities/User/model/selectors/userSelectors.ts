import { createSelector } from 'reselect';
import { RootState } from 'app/providers/StoreProvider';

const selectGetUserAuthData = (state: RootState) => state.userReducer.authData;

export const getUserAuthData = createSelector(
    selectGetUserAuthData,
    (authData) => authData,
);

const selectGetUserInited = (state: RootState) => state.userReducer._inited;

export const getUserInited = createSelector(
    selectGetUserInited,
    (_inited) => _inited,
);

const selectGetUserProductsCount = (state: RootState) => state.userReducer.productsCount;

export const getUserProductsCount = createSelector(
    selectGetUserProductsCount,
    (productsCount) => productsCount,
);

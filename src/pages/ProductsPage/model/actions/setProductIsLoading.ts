import {
    INIT_STATE_PRODUCTS_PAGE,
    ProductsPageActionTypes, SET_PRODUCT_IS_LOADING,
} from '../../model/types/productPageActionTypes';

export const setProductIsLoading = (props: {id: number, isLoading: boolean}): ProductsPageActionTypes => ({
    type: SET_PRODUCT_IS_LOADING,
    payload: props,
});

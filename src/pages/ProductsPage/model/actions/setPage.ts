import { ProductsPageActionTypes, SET_PAGE_PRODUCTS } from '../../model/types/productPageActionTypes';

export const setPage = (page: number): ProductsPageActionTypes => ({
    type: SET_PAGE_PRODUCTS,
    payload: page,
});

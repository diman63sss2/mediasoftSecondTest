import { ProductsSortField } from 'entities/Product';
import {
    ProductsPageActionTypes,
    SET_SORT_PRODUCTS_PAGE,
} from '../../model/types/productPageActionTypes';

export const setSort = (sort: ProductsSortField): ProductsPageActionTypes => ({
    type: SET_SORT_PRODUCTS_PAGE,
    payload: sort,
});

import { ProductsCategory, ProductsSortField } from 'entities/Product';
import {
    ProductsPageActionTypes,
    SET_CATEGORY_PRODUCT_PAGE,
} from '../../model/types/productPageActionTypes';

export const setCategory = (category: ProductsCategory): ProductsPageActionTypes => ({
    type: SET_CATEGORY_PRODUCT_PAGE,
    payload: category,
});

import {
    FETCH_PRODUCTS_LIST_FAILURE,
    FETCH_PRODUCTS_LIST_REQUEST,
    FETCH_PRODUCTS_LIST_SUCCESS,
    ProductsPageActionTypes,
    SET_CATEGORY_PRODUCT_PAGE,
    SET_PAGE_PRODUCTS,
    SET_PRODUCT_IS_LOADING,
    SET_SORT_PRODUCTS_PAGE,
} from '../../model/types/productPageActionTypes';
import { initialProductPage, ProductsPageSchema } from '../../model/types/productPageSchema';

export const ProductPageUsernameReducer = (
    // eslint-disable-next-line default-param-last
    state: ProductsPageSchema = initialProductPage,
    action: ProductsPageActionTypes,
) => {
    switch (action.type) {
    case FETCH_PRODUCTS_LIST_REQUEST:
        return {
            ...state,
            error: undefined,
            isLoading: true,
        };
    case FETCH_PRODUCTS_LIST_SUCCESS:
        return {
            ...state,
            entities: action.payload.products,
            countPages: action.payload.count,
            isLoading: false,
        };
    case FETCH_PRODUCTS_LIST_FAILURE:
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        };
    case SET_PAGE_PRODUCTS:
        return {
            ...state,
            page: action.payload,
        };
    case SET_CATEGORY_PRODUCT_PAGE:
        return {
            ...state,
            category: action.payload,
        };
    case SET_SORT_PRODUCTS_PAGE:
        return {
            ...state,
            sort: action.payload,
        };
    case SET_PRODUCT_IS_LOADING: {
        const { id, isLoading } = action.payload;

        return {
            ...state,
            entities: state.entities.map((item) => {
                if (item.id === id) {
                    return { ...item, isLoading };
                }
                return item;
            }),
        };
    }

    default:
        return state;
    }
};

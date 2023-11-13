import { initialStateProductDetails, ProductDetailsSchema } from '../../model/types/Product';
import {
    FETCH_PRODUCT_BY_ID_FAILURE,
    FETCH_PRODUCT_BY_ID_REQUEST,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    ProductDetailsActionTypes,
} from '../types/productActionTypes';

const productDetailsReducer = (
    // eslint-disable-next-line default-param-last
    state: ProductDetailsSchema = initialStateProductDetails,
    action: ProductDetailsActionTypes,
) => {
    switch (action.type) {
    case FETCH_PRODUCT_BY_ID_REQUEST:
        return {
            ...state,
            error: undefined,
            isLoading: true,
        };
    case FETCH_PRODUCT_BY_ID_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.payload,
        };
    case FETCH_PRODUCT_BY_ID_FAILURE:
        return {
            ...state,
            isLoading: false,
        };
    default:
        return state;
    }
};

export default productDetailsReducer;

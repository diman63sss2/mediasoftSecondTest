import { Dispatch } from 'react';
import { $api } from 'shared/api/api';
import { Product } from 'entities/Product';
import {
    FETCH_PRODUCT_BY_ID_FAILURE,
    FETCH_PRODUCT_BY_ID_REQUEST,
    FETCH_PRODUCT_BY_ID_SUCCESS, ProductDetailsActionTypes,
} from 'entities/Product/model/types/productActionTypes';

export const fetchProductById = (productId: string) => async (dispatch: Dispatch<ProductDetailsActionTypes>) => {
    dispatch({
        type: FETCH_PRODUCT_BY_ID_REQUEST,
    });
    try {
        const response = await $api.get<Product>(`/products/${productId}`);
        if (!response.data) {
            throw new Error();
        }

        const data = await response.data;

        dispatch({
            type: FETCH_PRODUCT_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_PRODUCT_BY_ID_FAILURE,
            payload: 'fetch error',
        });
        console.log(error);
    }
};

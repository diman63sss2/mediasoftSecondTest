import { $api } from 'shared/api/api';
import { Product, ProductsCategory, ProductsSortField } from 'entities/Product';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import { UserActionTypes } from 'entities/User';
import { RootState } from 'app/providers/StoreProvider';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    FETCH_PRODUCTS_LIST_FAILURE,
    FETCH_PRODUCTS_LIST_REQUEST,
    FETCH_PRODUCTS_LIST_SUCCESS, ProductsPageActionTypes,
} from '../../model/types/productPageActionTypes';
import {
    getProductsPageCategory, getProductsPageInited,
    getProductsPageLimit,
    getProductsPageNum,
    getProductsPageSort,
} from '../../model/selectors/productsPageSelectors';

export interface FetchProductsListResponse {
    products: Product[];
    count: number;
}

export const fetchProductsList = () => async (
    dispatch: Dispatch<UserActionTypes | ProductsPageActionTypes>,
    getState: () => RootState,
) => {
    dispatch({
        type: FETCH_PRODUCTS_LIST_REQUEST,
    });
    const state = getState();
    console.log('fetchProductsList');
    const { sort } = state.ProductPageUsernameReducer;
    const { limit } = state.ProductPageUsernameReducer;
    const { page } = state.ProductPageUsernameReducer;
    const { category } = state.ProductPageUsernameReducer;

    try {
        addQueryParams({
            sort,
            page,
            category,
        });
        const response = await $api().get<Product[]>('/products', {
            params: {
                _limit: limit,
                _page: page,
                _sort: sort,
                category: category === ProductsCategory.ALL ? undefined : category,
            },
        });
        if (!response.data) {
            throw new Error();
        }

        const totalCountHeader = response.headers['x-total-count'];
        const totalCount = parseInt(totalCountHeader, 10);

        const products = response.data.map((product) => ({
            ...product,
            isLoading: false,
        }));

        dispatch({
            type: FETCH_PRODUCTS_LIST_SUCCESS,
            payload: {
                products,
                count: totalCount,
            },
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: FETCH_PRODUCTS_LIST_FAILURE,
            payload: error as string,
        });
    }
};

import { Dispatch } from 'react';
import { UserActionTypes } from 'entities/User';
import { $api } from 'shared/api/api';
import { UserProduct } from 'entities/User/model/types/user';
import {
    ADD_USER_PRODUCT_SUCCESS,
    UPDATE_USER_PRODUCTS,
    UPDATE_USER_PRODUCTS_COUNT,
} from 'entities/User/model/types/userActionTypes';
import { RootState } from 'app/providers/StoreProvider';
import { ProductsPageActionTypes, SET_PRODUCT_IS_LOADING } from 'pages/ProductsPage/model/types/productPageActionTypes';

export type AddUserProductProps = {
  id: number;
}

export const addUserProduct = (
    props: AddUserProductProps,
) => async (dispatch: Dispatch<UserActionTypes | ProductsPageActionTypes>, getState: () => RootState) => {
    const state = getState();
    const productsCart = state.userReducer.products;
    const { id } = props;
    const productFinded = productsCart.find((product) => product.id === id);
    if (productFinded) {
        try {
            const response = await $api().put<UserProduct>(`/cart/${id}`, {
                id,
                count: productFinded.count + 1,
            });
            if (!response.data) {
                throw new Error();
            }

            const data = await response.data;

            dispatch({
                type: UPDATE_USER_PRODUCTS,
                payload: response.data,
            });

            dispatch({
                type: UPDATE_USER_PRODUCTS_COUNT,
            });

            dispatch({
                type: SET_PRODUCT_IS_LOADING,
                payload: {
                    id,
                    isLoading: false,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
};

import { Dispatch } from 'react';
import { $api } from 'shared/api/api';
import { CLEAN_USER_CART_SUCCESS, UserActionTypes } from '../types/userActionTypes';

export const cleanUserCart = () => async (dispatch: Dispatch<UserActionTypes>) => {
    try {
        const response = await $api.delete('/cart');
        if (!response.data) {
            throw new Error();
        }

        const data = await response.data;

        dispatch({
            type: CLEAN_USER_CART_SUCCESS,
        });
        window.alert('Корзина очищенна');
    } catch (error) {
        console.log(error);
    }
};

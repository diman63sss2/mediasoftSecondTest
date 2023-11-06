import { Dispatch } from 'react';
import { $api } from 'shared/api/api';
import { UserProduct } from '../../model/types/user';
import { FETCH_USER_CART_SUCCESS, UserActionTypes } from '../types/userActionTypes';

export const fetchUserCart = () => async (dispatch: Dispatch<UserActionTypes>) => {
    try {
        const response = await $api().get<UserProduct[]>('/cart');
        if (!response.data) {
            throw new Error();
        }

        const data = await response.data;

        dispatch({
            type: FETCH_USER_CART_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

import { Dispatch } from 'react';
import { setUser, User, UserActionTypes } from 'entities/User';
import { $api } from 'shared/api/api';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import {
    AuthByUsernameActionTypes, LOGIN_BY_USER_NAME_FAILURE,
    LOGIN_BY_USER_NAME_REQUEST, LOGIN_BY_USER_NAME_SUCCESS,
} from '../../model/types/loginActionTypes';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = (
    authData: LoginByUsernameProps,
    onSuccess: () => void,
) => async (dispatch: Dispatch<AuthByUsernameActionTypes | UserActionTypes >) => {
    dispatch({
        type: LOGIN_BY_USER_NAME_REQUEST,
    });
    try {
        const response = await $api.post<User>('/login', authData);
        if (!response.data) {
            throw new Error();
        }

        const data = await response.data;

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
        dispatch(setUser(data));
        dispatch({
            type: LOGIN_BY_USER_NAME_SUCCESS,
        });
        onSuccess();
    } catch (error) {
        dispatch({
            type: LOGIN_BY_USER_NAME_FAILURE,
            payload: error as string,
        });
    }
};

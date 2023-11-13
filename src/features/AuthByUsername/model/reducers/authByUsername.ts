import { initialStateLogin, LoginSchema } from '../types/loginSchema';
import {
    AuthByUsernameActionTypes, LOGIN_BY_USER_NAME_FAILURE, LOGIN_BY_USER_NAME_REQUEST, LOGIN_BY_USER_NAME_SUCCESS,
    SET_USER_NAME,
    SET_USER_PASSWORD,
} from '../../model/types/loginActionTypes';

const authByUsernameReducer = (
    // eslint-disable-next-line default-param-last
    state: LoginSchema = initialStateLogin,
    action: AuthByUsernameActionTypes,
) => {
    switch (action.type) {
    case SET_USER_NAME:
        return {
            ...state, username: action.payload,
        };
    case SET_USER_PASSWORD:
        return {
            ...state, password: action.payload,
        };
    case LOGIN_BY_USER_NAME_REQUEST:
        return {
            ...state, error: undefined, isLoading: true,
        };
    case LOGIN_BY_USER_NAME_SUCCESS:
        return {
            ...state, isLoading: false,
        };
    case LOGIN_BY_USER_NAME_FAILURE:
        return {
            ...state, error: action.payload, isLoading: false,
        };
    default:
        return state;
    }
};

export default authByUsernameReducer;

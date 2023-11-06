import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { initialState, UserProduct, UserSchema } from '../../model/types/user';
import {
    FETCH_USER_CART_SUCCESS,
    INIT_AUTH_DATA,
    SET_USER,
    UPDATE_USER_PRODUCTS,
    UPDATE_USER_PRODUCTS_COUNT,
    USER_LOGOUT,
    UserActionTypes,
} from '../types/userActionTypes';

// eslint-disable-next-line default-param-last
const userReducer = (state: UserSchema = initialState, action: UserActionTypes) => {
    switch (action.type) {
    case SET_USER:
        return {
            ...state, authData: action.payload, products: state.products, productsCount: state.productsCount,
        };
    case INIT_AUTH_DATA: {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if (user) {
            return {
                ...state, _inited: true, authData: JSON.parse(user),
            };
        }
        return {
            ...state, _inited: true,
        };
    }
    case FETCH_USER_CART_SUCCESS: {
        return {
            ...state,
            products: action.payload,
            productsCount: action.payload.reduce((total, product) => total + product.count, 0),
        };
    }
    case USER_LOGOUT:
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        return {
            ...state,
            authData: {
                id: null,
                username: '',
            },
            products: [],
            productsCount: 0,
        };
    case UPDATE_USER_PRODUCTS: {
        const index = state.products.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
            // Объект с указанным id найден, заменяем его
            return {
                ...state,
                products: state.products.map((item: UserProduct) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                }),
            };
        }
        return {
            ...state,
            products: [...state.products, action.payload],
        };
    }
    case UPDATE_USER_PRODUCTS_COUNT: {
        return {
            ...state,
            productsCount: state.products.reduce((total, product) => total + product.count, 0),
        };
    }

    default:
        return state;
    }
};

export default userReducer;

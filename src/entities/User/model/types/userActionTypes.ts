import { User, UserProduct } from '../../model/types/user';

export const SET_USER = 'SET_USER';
export const INIT_AUTH_DATA = 'INIT_AUTH_DATA';
export const FETCH_USER_CART_SUCCESS = 'FETCH_USER_CART_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const ADD_USER_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_LIST_SUCCESS';
export const UPDATE_USER_PRODUCTS = 'UPDATE_USER_PRODUCTS';
export const UPDATE_USER_PRODUCTS_COUNT = 'UPDATE_USER_PRODUCTS_COUNT';
export const CLEAN_USER_CART_SUCCESS = 'CLEAN_USER_CART_SUCCESS';

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface InitAuthDataAction {
  type: typeof INIT_AUTH_DATA;
}

interface FetchUserCartSuccessAction {
  type: typeof FETCH_USER_CART_SUCCESS;
  payload: UserProduct[];
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

interface AddUserProductAction {
  type: typeof ADD_USER_PRODUCT_SUCCESS;
}

interface UpdateUserProductsAction {
  type: typeof UPDATE_USER_PRODUCTS;
  payload: UserProduct;
}

interface UpdateUserProductsCountAction {
  type: typeof UPDATE_USER_PRODUCTS_COUNT;
}

interface CleanUserCartSuccessAction {
  type: typeof CLEAN_USER_CART_SUCCESS;
}

export type UserActionTypes =
  | SetUserAction
  | InitAuthDataAction
  | FetchUserCartSuccessAction
  | UserLogoutAction
  | AddUserProductAction
  | UpdateUserProductsAction
  | UpdateUserProductsCountAction
  | CleanUserCartSuccessAction;

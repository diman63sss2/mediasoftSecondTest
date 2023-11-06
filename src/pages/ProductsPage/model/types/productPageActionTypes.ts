import { ProductsCategory, ProductsSortField } from 'entities/Product';
import { FetchProductsListResponse } from '../../model/actions/fetchProductsList';

export const SET_PAGE_PRODUCTS = 'SET_PAGE_PRODUCTS';
export const SET_SORT_PRODUCTS_PAGE = 'SET_SORT_PRODUCTS_PAGE';
export const SET_CATEGORY_PRODUCT_PAGE = 'SET_CATEGORY_PRODUCT_PAGE';
export const SET_PRODUCT_IS_LOADING = 'SET_PRODUCT_IS_LOADING';
export const INIT_STATE_PRODUCTS_PAGE = 'INIT_STATE_PRODUCTS_PAGE';
export const FETCH_PRODUCTS_LIST_REQUEST = 'FETCH_PRODUCTS_LIST_REQUEST';
export const FETCH_PRODUCTS_LIST_SUCCESS = 'FETCH_PRODUCTS_LIST_SUCCESS';
export const FETCH_PRODUCTS_LIST_FAILURE = 'FETCH_PRODUCTS_LIST_FAILURE';

interface SetPageAction {
  type: typeof SET_PAGE_PRODUCTS;
  payload: number;
}

interface SetSortAction {
  type: typeof SET_SORT_PRODUCTS_PAGE;
  payload: ProductsSortField;
}

interface SetCategoryAction {
  type: typeof SET_CATEGORY_PRODUCT_PAGE;
  payload: ProductsCategory;
}

interface SetProductIsLoadingAction {
  type: typeof SET_PRODUCT_IS_LOADING;
  payload: {id: number, isLoading: boolean};
}

interface InitStateProductsPageAction {
  type: typeof INIT_STATE_PRODUCTS_PAGE;
}

interface FetchProductsListRequestAction {
  type: typeof FETCH_PRODUCTS_LIST_REQUEST;
}

interface FetchProductsListSuccessAction {
  type: typeof FETCH_PRODUCTS_LIST_SUCCESS;
  payload: FetchProductsListResponse;
}

interface FetchProductsListFailureAction {
  type: typeof FETCH_PRODUCTS_LIST_FAILURE;
  payload: string | undefined;
}

export type ProductsPageActionTypes =
  | SetPageAction
  | SetSortAction
  | SetCategoryAction
  | SetProductIsLoadingAction
  | InitStateProductsPageAction
  | FetchProductsListRequestAction
  | FetchProductsListSuccessAction
  | FetchProductsListFailureAction;

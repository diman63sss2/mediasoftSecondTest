import { Product } from '../../index';

export const FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';
export const FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';
export const FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';

interface FetchProductByIdActionRequest {
  type: typeof FETCH_PRODUCT_BY_ID_REQUEST;
}

interface FetchProductByIdActionSuccess {
  type: typeof FETCH_PRODUCT_BY_ID_SUCCESS;
  payload: Product;
}

interface FetchProductByIdActionFailure {
  type: typeof FETCH_PRODUCT_BY_ID_FAILURE;
  payload: string | undefined;
}

export type ProductDetailsActionTypes =
  | FetchProductByIdActionRequest
  | FetchProductByIdActionSuccess
  | FetchProductByIdActionFailure;

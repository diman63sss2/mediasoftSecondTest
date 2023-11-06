import { ProductsCategory, ProductsSortField } from 'entities/Product';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import { UserActionTypes } from 'entities/User';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'app/providers/StoreProvider';
import { setCategory } from 'pages/ProductsPage/model/actions/setCategory';
import { useSearchParams } from 'react-router-dom';
import { fetchProductsList } from '../../model/actions/fetchProductsList';
import { INIT_STATE_PRODUCTS_PAGE, ProductsPageActionTypes } from '../../model/types/productPageActionTypes';
import { getProductsPageInited } from '../../model/selectors/productsPageSelectors';
import { setSort } from './setSort';
import { setPage } from './setPage';

export const initState = (): ProductsPageActionTypes => ({
    type: INIT_STATE_PRODUCTS_PAGE,
});

export const initProductsPage = (
    searchParams: URLSearchParams,
) => (getState: () => RootState, dispatch:Dispatch<ProductsPageActionTypes | UserActionTypes>) => {
    const state = getState();
    const { _inited } = state.ProductPageUsernameReducer;
    if (!_inited) {
        const sortFromUrl = searchParams.get('sort') as ProductsSortField;
        const pageFromUrl = searchParams.get('page');
        const categoryFromUrl = searchParams.get('category') as ProductsCategory;
        if (sortFromUrl) {
            dispatch(setSort(sortFromUrl));
        }

        if (pageFromUrl) {
            dispatch(setPage(Number(pageFromUrl)));
        }

        if (categoryFromUrl) {
            dispatch(setCategory(categoryFromUrl));
        }

        dispatch(initState());
        fetchProductsList();
    }
};

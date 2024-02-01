import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProductsSortField } from 'entities/Product';
import { getProductsPageInited } from '../../selectors/productsPageSelectors';
import { productsPageActions } from '../../slices/productsPageSlice';
import { fetchProductsList } from '../fetchProductsList/fetchProductsList';

export const initProductsPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
    'productsPage/initProductsPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getProductsPageInited(getState());
        if (!inited) {
            const sortFromUrl = searchParams.get('sort') as ProductsSortField;
            const pageFromUrl = searchParams.get('page');

            if (sortFromUrl) {
                dispatch(productsPageActions.setSort(sortFromUrl));
            }

            if (pageFromUrl) {
                dispatch(productsPageActions.setPage(Number(pageFromUrl)));
            }
            dispatch(productsPageActions.initState());
            dispatch(fetchProductsList({}));
        }
    },
);

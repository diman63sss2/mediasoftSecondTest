import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProductsPageInited } from '../../selectors/productsPageSelectors';
import { productsPageActions } from '../../slices/productsPageSlice';
import { fetchProductsList } from '../fetchProductsList/fetchProductsList';

export const initProductsPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
    'productsPage/initProductsPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getProductsPageInited(getState());
        if (!inited) {
            dispatch(productsPageActions.initState());
            dispatch(fetchProductsList({
                page: 1,
            }));
        }
    },
);

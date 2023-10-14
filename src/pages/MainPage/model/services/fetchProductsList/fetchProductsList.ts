import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Product } from 'entities/Product';
import { getProductsPageLimit } from '../../selectors/productsPageSelectors';

interface FetchProductsListProps {
  page?: number;
}

export interface FetchProductsListResponse {
  products: Product[];
  count: number;
}

export const fetchProductsList = createAsyncThunk<
  FetchProductsListResponse,
  FetchProductsListProps,
  ThunkConfig<string>
  >(
      'productsPage/fetchProductsList',
      async (props, thunkApi) => {
          console.log('fetchProductsList');
          const { extra, rejectWithValue, getState } = thunkApi;
          const { page = 1 } = props;
          const limit = getProductsPageLimit(getState());
          try {
              const response = await extra.api.get<Product[]>('/products', {
                  params: {
                      _limit: limit,
                      _page: page,
                  },
              });

              if (!response.data) {
                  throw new Error();
              }

              const totalCountHeader = response.headers['x-total-count'];
              const totalCount = parseInt(totalCountHeader, 10);

              return {
                  products: response.data,
                  count: totalCount,
              };
          } catch (e) {
              return rejectWithValue('error');
          }
      },
  );

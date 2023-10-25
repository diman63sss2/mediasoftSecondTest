import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Product, ProductsCategory } from 'entities/Product';
import { useSelector } from 'react-redux';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getProductsPageCategory,
    getProductsPageLimit,
    getProductsPageNum,
    getProductsPageSort,
} from '../../selectors/productsPageSelectors';

interface FetchProductsListProps {

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
          const { extra, rejectWithValue, getState } = thunkApi;
          const sort = getProductsPageSort(getState());
          const limit = getProductsPageLimit(getState());
          const page = getProductsPageNum(getState());
          const category = getProductsPageCategory(getState());

          try {
              addQueryParams({
                  sort,
                  page,
                  category,
              });
              const response = await extra.api.get<Product[]>('/products', {
                  params: {
                      _limit: limit,
                      _page: page,
                      _sort: sort,
                      category: category === ProductsCategory.ALL ? undefined : category,
                  },
              });

              if (!response.data) {
                  throw new Error();
              }

              const totalCountHeader = response.headers['x-total-count'];
              const totalCount = parseInt(totalCountHeader, 10);

              const products = response.data.map((product) => ({
                  ...product,
                  isLoading: false,
              }));

              return {
                  products,
                  count: totalCount,
              };
          } catch (e) {
              return rejectWithValue('error');
          }
      },
  );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Product } from 'entities/Product';

export const fetchProductsList = createAsyncThunk<
  Product[],
  void,
  ThunkConfig<string>
  >(
      'productsPage/fetchProductsList',
      async (articleId, thunkApi) => {
          const { extra, rejectWithValue } = thunkApi;

          try {
              const response = await extra.api.get<Product[]>('/products');

              if (!response.data) {
                  throw new Error();
              }

              return response.data;
          } catch (e) {
              return rejectWithValue('error');
          }
      },
  );

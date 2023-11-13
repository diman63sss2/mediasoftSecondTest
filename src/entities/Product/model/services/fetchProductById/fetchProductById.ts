import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Product } from '../../types/product';

export const fetchProductById = createAsyncThunk<
  Product,
  string,
  ThunkConfig<string>
  >(
      'productDetails/fetchProductById',
      async (productId, thunkApi) => {
          const { extra, rejectWithValue } = thunkApi;

          try {
              const response = await extra.api.get<Product>(`/products/${productId}`);

              if (!response.data) {
                  throw new Error();
              }

              return response.data;
          } catch (e) {
              console.log(e);
              return rejectWithValue('error');
          }
      },
  );

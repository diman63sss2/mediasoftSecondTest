import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserProduct } from 'entities/User/model/types/user';

interface FetchUserCartProps {
  username: string;
  password: string;
}

export const fetchUserCart = createAsyncThunk<
  UserProduct[],
  void,
  ThunkConfig<string>
  >(
      'user/fetchUserCart',
      async (authData, thunkApi) => {
          const { extra, dispatch, rejectWithValue } = thunkApi;
          try {
              const response = await extra.api.get<UserProduct[]>('/cart');

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

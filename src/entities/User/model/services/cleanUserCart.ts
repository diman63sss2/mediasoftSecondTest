import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserProduct } from 'entities/User/model/types/user';
import { AddUserProductProps } from 'entities/User/model/services/addUserProduct';

interface CleanUserCartProps {
  username: string;
  password: string;
}

interface CartObject {
  cart: [];
}

export const cleanUserCart = createAsyncThunk<
  UserProduct,
  void,
  ThunkConfig<string>
  >(
      'user/cleanUserCart',
      async (authData, thunkApi) => {
          const { extra, dispatch, rejectWithValue } = thunkApi;
          const newArray: CartObject = { cart: [] };
          try {
              const response = await extra.api.delete('/cart');

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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserProduct } from 'entities/User/model/types/user';
import { getProductsPageInited } from 'pages/MainPage/model/selectors/productsPageSelectors';
import { getUserProductsCount, userActions } from 'entities/User';
import { productsPageActions } from 'pages/MainPage/model/slices/productsPageSlice';
import { getUserProducts } from '../../model/selectors/getUserAuthData/getUserAuthData';

export interface AddUserProductProps {
  id: number;
}

export const addUserProduct = createAsyncThunk<
  UserProduct,
  AddUserProductProps,
  ThunkConfig<string>
  >(
      'user/addUserProduct',
      async (productData, thunkApi) => {
          const {
              extra, getState, rejectWithValue, dispatch,
          } = thunkApi;
          const productsCart = getUserProducts(getState());
          const { id } = productData;
          const productFinded = productsCart.find((product) => product.id === id);
          if (productFinded) {
              try {
                  const response = await extra.api.put<UserProduct>(`/cart/${productData.id}`, {
                      id,
                      count: productFinded.count + 1,
                  });

                  if (!response.data) {
                      throw new Error();
                  }

                  dispatch(userActions.updateUserProducts(response.data));
                  dispatch(userActions.updateUserProductsCount());
                  dispatch(productsPageActions.setProductIsLoading({
                      id: response.data.id,
                      isLoading: false,
                  }));

                  return response.data;
              } catch (e) {
                  console.log(e);
                  return rejectWithValue('error');
              }
          } else {
              try {
                  const response = await extra.api.post<UserProduct>('/cart/', {
                      id,
                      count: 1,
                  });

                  if (!response.data) {
                      throw new Error();
                  }

                  dispatch(userActions.updateUserProducts(response.data));
                  dispatch(userActions.updateUserProductsCount());
                  dispatch(productsPageActions.setProductIsLoading({
                      id: response.data.id,
                      isLoading: false,
                  }));

                  return response.data;
              } catch (e) {
                  console.log(e);
                  return rejectWithValue('error');
              }
          }
      },
  );

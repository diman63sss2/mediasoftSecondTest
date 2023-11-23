import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { fetchUserCart } from 'entities/User/model/services/fetchUserCart';
import { addUserProduct } from 'entities/User/model/services/addUserProduct';
import { productsPageActions } from 'pages/MainPage/model/slices/productsPageSlice';
import { cleanUserCart } from 'entities/User/model/services/cleanUserCart';
import { UserSchema, User, UserProduct } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
    products: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
        updateUserProducts: (state, action: PayloadAction<UserProduct>) => {
            const index = state.products.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            } else {
                state.products.push(action.payload);
            }
        },
        updateUserProductsCount: (state) => {
            state.productsCount = state.products.reduce((total, product) => total + product.count, 0);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCart.pending, (state) => {

            })
            .addCase(fetchUserCart.fulfilled, (state, action: PayloadAction<UserProduct[]>) => {
                state.products = action.payload;
                state.productsCount = action.payload.reduce((total, product) => total + product.count, 0);
            })
            .addCase(fetchUserCart.rejected, (state, action) => {

            })
            .addCase(addUserProduct.pending, (state) => {

            })
            .addCase(addUserProduct.fulfilled, (state, action: PayloadAction<UserProduct>) => {

            })
            .addCase(addUserProduct.rejected, (state, action) => {

            })
            .addCase(cleanUserCart.pending, (state) => {

            })
            .addCase(cleanUserCart.fulfilled, (state) => {
                state.products = [];
                state.productsCount = 0;
            })
            .addCase(cleanUserCart.rejected, (state) => {

            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

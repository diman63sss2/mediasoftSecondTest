import { combineReducers } from 'redux';
import { userReducer } from 'entities/User';
import { authByUsernameReducer } from 'features/AuthByUsername';
import { ProductPageUsernameReducer } from 'pages/ProductsPage';
import { productDetailsReducer } from 'entities/Product';

export const rootReducer = combineReducers({
    userReducer,
    authByUsernameReducer,
    ProductPageUsernameReducer,
    productDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

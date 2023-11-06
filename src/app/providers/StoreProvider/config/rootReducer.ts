import { combineReducers } from 'redux';
import { userReducer } from 'entities/User';
import { authByUsernameReducer } from 'features/AuthByUsername';
import { ProductPageUsernameReducer } from 'pages/ProductsPage';

export const rootReducer = combineReducers({
    userReducer,
    authByUsernameReducer,
    ProductPageUsernameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

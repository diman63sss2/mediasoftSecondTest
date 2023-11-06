import { ProductsPageSchema } from 'pages/ProductsPage/model/types/productPageSchema';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { UserSchema } from 'entities/User/model/types/user';

export interface StateSchema {
  userReducer: UserSchema;
  authByUsernameReducer: LoginSchema;
  ProductPageUsernameReducer: ProductsPageSchema;
}

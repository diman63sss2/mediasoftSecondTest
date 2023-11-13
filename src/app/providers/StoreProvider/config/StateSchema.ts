import { ProductsPageSchema } from 'pages/ProductsPage/model/types/productPageSchema';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { UserSchema } from 'entities/User/model/types/user';
import { ProductDetailsSchema } from 'entities/Product/model/types/Product';

export interface StateSchema {
  userReducer: UserSchema;
  authByUsernameReducer: LoginSchema;
  ProductPageUsernameReducer: ProductsPageSchema;
  productDetailsReducer: ProductDetailsSchema;
}

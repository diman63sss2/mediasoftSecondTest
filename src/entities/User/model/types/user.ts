export interface UserProduct {
  id: number,
  count: number,
}

export interface User {
  id: number | null;
  username: string;
}

export interface UserSchema {
  authData: User;
  products: UserProduct[];
  productsCount: number;
  _inited: boolean;
}

export const initialState: UserSchema = {
    authData: {
        id: null,
        username: '',
    } as User,
    products: [],
    productsCount: 0,
    _inited: false,
};

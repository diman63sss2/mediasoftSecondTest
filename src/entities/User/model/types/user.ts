export interface UserProduct {
  id: number,
  count: number,
}

export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
  products: UserProduct[];
  productsCount?: number;
  _inited: boolean;
}

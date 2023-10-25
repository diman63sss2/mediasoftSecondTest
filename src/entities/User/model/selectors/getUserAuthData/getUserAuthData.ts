import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user?.authData;
export const getUserInited = (state: StateSchema) => state.user._inited;
export const getUserProductsCount = (state: StateSchema) => state.user.productsCount ?? 0;
export const getUserProducts = (state: StateSchema) => state.user.products ?? [];

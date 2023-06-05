export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const setIsAuth = (isAuth) => ({
  type: 'SET_IS_AUTH',
  payload: isAuth,
});

export const logOut = () => ({
  type: 'LOG_OUT',
});

export const reduceProduct = (product) => ({
  type: 'REDUCE_PRODUCT',
  payload: product,
});

export const deleteProduct = (product) => ({
  type: 'DELETE_PRODUCT',
  payload: product,
});

export const compareProduct = (product) => ({
  type: 'COMPARE_PRODUCT',
  payload: product,
});

export const cleanCart = () => ({
  type: 'ClEAN_CART',
});

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

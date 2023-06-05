const initialState = {
  isAuth: false,
  user: {},
  products: [],
  numberProducts: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };
    case 'ADD_PRODUCT':
      const products = state.products;
      const product = action.payload;
      let num = 1;
      for (let i = 0; i < products.length; i++) {
        num += products[i].num;
      }
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === product.id) {
          products[i].num = products[i].num + 1;
          return { ...state, numberProducts: num, products: [...products] };
        }
      }
      return {
        ...state,
        numberProducts: num,
        products: [...products, { ...product, num: 1 }],
      };
    case 'REDUCE_PRODUCT':
      let reduceProduct = action.payload;
      let reduceProducts = state.products.filter((el) => {
        if (reduceProduct.id === el.id) {
          el.num -= 1;
        }
        if (el.num <= 0) {
          return;
        }
        return el;
      });
      console.log({
        ...state,
        numberProducts: state.numberProducts - 1,
        products: [...reduceProducts],
      });
      return {
        ...state,
        numberProducts: state.numberProducts - 1,
        products: [...reduceProducts],
      };
    case 'DELETE_PRODUCT':
      let deleteProduct = action.payload;

      let deleteProducts = state.products.filter((el) => {
        if (deleteProduct.id === el.id) {
          return;
        }
        return el;
      });

      let numAfterDelete = 0;
      for (let i = 0; i < deleteProducts.length; i++) {
        numAfterDelete += deleteProducts[i].num;
      }

      return {
        ...state,
        numberProducts: numAfterDelete,
        products: [...deleteProducts],
      };

    case 'COMPARE_PRODUCT':
      let compareProduct = action.payload;
      let compareProducts = state.products.filter((el) => {
        if (compareProduct.id === el.id) {
          el.compare = !compareProduct.compare;
        }
        return el;
      });
      return { ...state, products: [...compareProducts] };
    case 'ClEAN_CART':
      return { ...state, numberProducts: 0, products: [] };
    case 'LOG_OUT':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

import React from 'react';
import CartList from '../components/Cart/CartList/CartList.jsx';
import CompareList from '../components/Cart/CompareList/CompareList.jsx';
import { useSelector } from 'react-redux';

const Cart = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="container">
      <CartList />
      {user.products.filter((el) => {
        if (el.compare) {
          return el;
        }
        return;
      }).length >= 2 && (
        <CompareList
          products={user.products.filter((el) => {
            if (el.compare) {
              return el;
            }
            return;
          })}
        />
      )}
    </div>
  );
};

export default Cart;

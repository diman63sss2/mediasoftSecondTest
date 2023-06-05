import React, { useContext } from 'react';
import { AuthContext } from '../context';
import { observer } from 'mobx-react-lite';
import CartList from '../components/Cart/CartList/CartList.jsx';
import CompareList from '../components/Cart/CompareList/CompareList.jsx';

const Cart = observer(() => {
  const { user } = useContext(AuthContext);
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
          products={JSON.parse(JSON.stringify(user.products)).filter((el) => {
            if (el.compare) {
              return el;
            }
            return;
          })}
        />
      )}
    </div>
  );
});

export default Cart;

import React from 'react';
import cl from './CartList.module.css';
import CartListItem from '../CartListItem/CartListItem.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartList = () => {
  const user = useSelector((state) => state.user);
  if (user.numberProducts > 0) {
    return (
      <div>
        <div className={cl.list}>
          {user.products.map((el) => (
            <CartListItem key={el.id} product={el} />
          ))}
        </div>
        <div className={cl.footer}>
          <Link className={cl.link} to={'/order'}>
            Оформить
          </Link>
        </div>
      </div>
    );
  }
  return <div>Корзина пуста</div>;
};

export default CartList;

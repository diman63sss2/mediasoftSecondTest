import React from 'react';
import cl from './CatalogListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../store/userActions';

const CatalogListItem = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

  return (
    <li className={cl.item}>
      <div className={cl.content}>
        <div className={cl.image}>
          <span className={cl.category}>{product.category}</span>
          <img src={product.image} alt="" />
        </div>
        <div className={cl.info}>
          <h3 className={cl.title}>
            {product.title.length > 40
              ? product.title.substr(0, 40) + '...'
              : product.title}
          </h3>
          <span className={cl.price}>{product.price}$</span>
        </div>
      </div>
      <div className={cl.additional}>
        {user.isAuth ? (
          <button className={cl.button} onClick={handleAddProduct}>
            Добавить в корзину
          </button>
        ) : (
          <button className={cl.button} disabled>
            Добавить в корзину
          </button>
        )}
      </div>
    </li>
  );
};

export default CatalogListItem;

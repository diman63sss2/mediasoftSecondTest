import React from 'react';
import cl from './CartListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  compareProduct,
  deleteProduct,
  reduceProduct,
} from '../../../store/userActions';

const CartListItem = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

  const handleReduceProduct = () => {
    dispatch(reduceProduct(product));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product));
  };

  const handleCompareProduct = () => {
    dispatch(compareProduct(product));
  };

  return (
    <div className={cl.product}>
      <div className={cl.img}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={cl.content}>
        <h3>{product.title}</h3>
        <p className={cl.description}>{product.description}</p>
        <div className={cl.info}>
          <span className={cl.category}>Категория: {product.category}</span>
          <div className={cl.rateContainer}>
            <span className={cl.numRate}>Оценок: {product.rating.count}</span>
            <span className={cl.rate}>Рейтинг: {product.rating.rate}</span>
          </div>
        </div>
      </div>
      <div className={cl.interactions}>
        <div className={cl.numberContainer}>
          <div onClick={handleAddProduct} className={cl.pluse}>
            +
          </div>
          <div className={cl.number}>{product.num}</div>
          <div onClick={handleReduceProduct} className={cl.minus}>
            -
          </div>
        </div>
        <div onClick={handleDeleteProduct} className={cl.delete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" />
          </svg>
        </div>
        <div
          onClick={handleCompareProduct}
          className={cl.compare + ` ${product.compare ? cl.active : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
          >
            <path d="M1,8A1,1,0,0,1,2,7H9.586L7.293,4.707A1,1,0,1,1,8.707,3.293l4,4a1,1,0,0,1,0,1.414l-4,4a1,1,0,1,1-1.414-1.414L9.586,9H2A1,1,0,0,1,1,8Zm21,7H14.414l2.293-2.293a1,1,0,0,0-1.414-1.414l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414-1.414L14.414,17H22a1,1,0,0,0,0-2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;

import React from 'react';
import cl from './CompareListItem.module.css';

const CompareListItem = ({ product }) => {
  return (
    <div className={cl.item}>
      <div className={cl.cell}>
        <img className={cl.image} src={product.image} alt={product.title} />
      </div>
      <div className={cl.cell}>
        <h3 className={cl.title}>{product.title}</h3>
      </div>
      <div className={cl.cell}>
        Цена <br />
        <span className={cl.price}>{product.price}$</span>
      </div>
      <div className={cl.cell}>
        Популярность <br />
        <span className={cl.rateNum}>{product.rating.count}</span>
      </div>
      <div className={cl.cell}>
        Рейтинг <br />
        <div className={cl.rate}>{product.rating.rate}</div>
      </div>
    </div>
  );
};

export default CompareListItem;

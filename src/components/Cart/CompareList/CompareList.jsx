import React from 'react';
import cl from './CompareList.module.css';
import CompareListItem from '../CompareListItem/CompareListItem.jsx';

const CompareList = ({ products }) => {
  return (
    <div className={cl.list}>
      {products.map((product) => (
        <CompareListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CompareList;

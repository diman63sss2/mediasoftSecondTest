import React, { useContext } from 'react';
import cl from './CompareList.module.css';
import { AuthContext } from '../../../context';
import { observer } from 'mobx-react-lite';
import CompareListItem from '../CompareListItem/CompareListItem.jsx';

const CompareList = observer(({ products }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className={cl.list}>
      {products.map((product) => (
        <CompareListItem key={product.id} product={product} />
      ))}
    </div>
  );
});

export default CompareList;

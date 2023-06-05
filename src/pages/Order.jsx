import React, { useState } from 'react';
import OrderInfo from '../components/Order/OrderInfo/OrderInfo.jsx';
import OrderCart from '../components/Order/OrderCart/OrderCart.jsx';
import OrderAddress from '../components/Order/OrderAddress/OrderAddress.jsx';

const Order = () => {
  const [stage, setStage] = useState('info');
  switch (stage) {
    case 'info':
      return (
        <div className="container">
          <OrderInfo setStage={setStage} />
        </div>
      );
    case 'cart':
      return (
        <div className="container">
          <OrderCart setStage={setStage} />
        </div>
      );
    case 'address':
      return (
        <div className="container">
          <OrderAddress />
        </div>
      );
    default:
      return (
        <div className="container">
          <OrderInfo setStage={setStage} />
        </div>
      );
  }
};

export default Order;

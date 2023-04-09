import React from 'react';

const OrderSummary = ({ cart }) => {
  console.log("cart---",cart);
  return (
    <div>
      <h1>Order Summary: {cart.length}</h1>
    </div>
  );
};

export default OrderSummary;
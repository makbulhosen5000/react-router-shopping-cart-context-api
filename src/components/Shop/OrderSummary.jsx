import React from 'react';

const OrderSummary = ({ cart, removeCartItem }) => {
  //console.log("cart---",cart);
  return (
    <div>
      <h1>Order Summary: {cart.length}</h1>
      {cart.length === 0?<span> add the product</span>:''}
      {cart.map((shirt) => (
        <p>
          {shirt.name}
          <button
            onClick={() => removeCartItem(shirt._id)}
            className="px-2 ms-2  bg-yellow-400"
          >
            X
          </button>{" "}
        </p>
      ))}
    </div>
  );
};

export default OrderSummary;
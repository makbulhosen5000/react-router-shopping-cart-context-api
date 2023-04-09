import React from 'react';
import { Link } from "react-router-dom";

const SingleShop = ({ tshirt,handleAddToCart }) => {
  const { _id, picture, name, price } = tshirt;
  return (
    <div className="border-2 rounded-md m-2">
      <img
        src={picture}
        className="w-96 h-96 object-cover p-4 hover:shadow-xl"
        alt=""
      />
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <Link to={`/shop-details/${_id}`}>
        <button className="bg-yellow-500 rounded-md p-4 my-4">
          See Details
        </button>
      </Link>
      <button
        onClick={()=>handleAddToCart(tshirt)}
        className="ml-2 bg-green-500 rounded-md p-4 my-4"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default SingleShop;
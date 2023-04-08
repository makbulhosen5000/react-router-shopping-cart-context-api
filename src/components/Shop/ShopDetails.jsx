import React from 'react';
import { useLoaderData,Link } from 'react-router-dom';

const ShopDetails = () => {
    const details = useLoaderData();
  return (
    <div className="border-2 rounded-md m-2">
      <img
        src="{details.picture}"
        className="w-96 h-96 object-cover p-4 hover:shadow-xl"
        alt=""
      />
      <p>Name: </p>
      <p>Price: $</p>
      <Link to="">
        <button className="bg-yellow-500 rounded-md p-4 my-4">
          Back To Shop
        </button>
      </Link>
    </div>
  );
};

export default ShopDetails;
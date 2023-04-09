import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ShopDetails = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  console.log("details--", details);

 

  const backToShop = () => {
    navigate("/shop");
  };
  return (
    <div className="border-2 rounded-md my-10 text-center">
      <p>Name: {details.gender} </p>
      <p>Index: {details.index}</p>

      <button
        onClick={backToShop}
        className="bg-yellow-500 rounded-md p-4 my-4"
      >
        Back To Shop
      </button>
    </div>
  );
};

export default ShopDetails;

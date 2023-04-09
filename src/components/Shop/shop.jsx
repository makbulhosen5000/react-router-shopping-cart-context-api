import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleShop from "./SingleShop";
import OrderSummary from "./OrderSummary";

const Shop = () => {
  const tshirts = useLoaderData();
  
  const [cart,setCart] = useState([]);

  //add cart item
  const handleAddToCart = (tshirt) => {
    setCart([...cart, tshirt]);
  };
 
  //remove cart item
  
  const navigation = useNavigation();

  return (
    <div>
      <div>
        <h1 className="text-black text-3xl text-center mt-4">
          {navigation.state === "loading" ? "loading..." : ""}
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 text-center my-16">
        <div className="col-span-3 bg-gray-300">
          {/* loading message */}
          <div className="grid sm:grid-cols-1 md:grid-col-3 lg:grid-cols-3 text-center p-5">
            {tshirts.map((tshirt) => (
              <SingleShop
                tshirt={tshirt}
                key={tshirt._id}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 bg-gray-500 text-center pt-4 text-white text-3xl">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

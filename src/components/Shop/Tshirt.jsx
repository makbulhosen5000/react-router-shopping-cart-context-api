import React from 'react';
import { useLoaderData, useNavigation } from "react-router-dom";

const Tshirt = () => {
    const tshirts = useLoaderData();
      const navigation = useNavigation();
    console.log("tshirts---", tshirts);
    return (
      <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 text-center my-16">
        <div class="col-span-3 bg-gray-300">
          {/* loading message */}
          <div>
            <h1 className='text-black text-3xl'>{navigation.state === "loading" ? "loading..." : ""}</h1>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-col-3 lg:grid-cols-3 text-center p-5">
            {tshirts.map((tshirt) => (
              <div className="">
                <img
                  src={tshirt.picture}
                  className="w-96 h-96 object-cover p-4 hover:shadow-xl"
                  alt=""
                />
                <p>Name: {tshirt.name}</p>
                <p>Price: ${tshirt.price}</p>
                <p>See More</p>
                <button className="bg-green-500 rounded-md p-4 my-4">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <div class="col-span-1 bg-gray-500 text-center">
          <h1>Order Summary:{tshirts.length}</h1>
        </div>
      </div>
    );
};

export default Tshirt;
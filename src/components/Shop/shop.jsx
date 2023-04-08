import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleShop from "./SingleShop";

const Tshirt = () => {
  const tshirts = useLoaderData();
  const navigation = useNavigation();
  console.log("tshirts---", tshirts);
  return (
    <div>
      <div>
        <h1 className="text-black text-3xl text-center mt-4">
          {navigation.state === "loading" ? "loading..." : ""}
        </h1>
      </div>

      <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 text-center my-16">
        <div class="col-span-3 bg-gray-300">
          {/* loading message */}
          <div className="grid sm:grid-cols-1 md:grid-col-3 lg:grid-cols-3 text-center p-5">

            {tshirts.map((tshirt) => (
              <SingleShop tshirt={tshirt} key={tshirt._id} />
            ))}

          </div>
        </div>
        <div class="col-span-1 bg-gray-500 text-center pt-4 text-white text-3xl">
          <h1>Order Summary:{tshirts.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;

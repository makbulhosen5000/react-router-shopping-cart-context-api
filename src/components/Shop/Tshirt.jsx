import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tshirt = () => {
    const tshirts = useLoaderData();
    console.log("tshirts---", tshirts);
    return (
      <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div class="col-span-3 bg-gray-300">
          {tshirts.map((tshirt) => (
            <p>{tshirt.name}</p>
          ))}
        </div>
        <div class="col-span-1 bg-gray-500">
          <h1>Order Summary:{tshirts.length}</h1>
        </div>
      </div>
    );
};

export default Tshirt;
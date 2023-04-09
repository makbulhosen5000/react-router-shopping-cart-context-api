import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Toaster } from "react-hot-toast";

const Home = () => {
    return (
      <div className="lg:mx-10">
      
        <Header />
        <Outlet />
        <Toaster/>
      </div>
    );
};

export default Home;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import Tshirt from './components/Shop/shop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ShopDetails from './components/Shop/ShopDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "shop",
        element: <Tshirt />,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "shop-details/:shopId",
        element: <ShopDetails />,
        loader: ({ params }) => fetch(`tshirts.json/${params.friendId}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

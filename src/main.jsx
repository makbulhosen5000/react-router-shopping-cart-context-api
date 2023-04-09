import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ShopDetails from './components/ShopDetails/ShopDetails';
import Shop from './components/Shop/shop';


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
        element: <Shop/>,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "shop-details/:shopId",
        element: <ShopDetails />,
        loader: ({ params }) => fetch(`tshirts.json/${params.shopId}`)
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

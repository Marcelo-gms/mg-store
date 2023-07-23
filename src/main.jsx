import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from "./GlobalStyles/Global.jsx";

// Pages
import ErroPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx"
import SingleProduct from "./pages/SingleProduct/SingleProduct.jsx"
import Store from "./pages/Store/Store.jsx"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/store/:category",
        element: <Store />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
);

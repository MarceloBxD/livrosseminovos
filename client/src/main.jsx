import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from "./pages/Product/index.jsx";
import Home from "./pages/Home/index.jsx";
import Products from "./pages/Products/index.jsx";

import { Footer, Navbar } from "./components";

// Criei um Layout para o App, para que o Navbar e o Footer sejam renderizados em todas as páginas
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

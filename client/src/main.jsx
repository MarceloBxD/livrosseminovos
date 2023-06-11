import React from "react";
import ReactDOM from "react-dom/client";

// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from "./pages/Product/index.jsx";
import Home from "./pages/Home/index.jsx";
import Products from "./pages/Products/index.jsx";

import { Footer, Navbar } from "./components";
import { AppProvider } from "./contexts/ContextApi.jsx";

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

const stripePromise = loadStripe(
  "pk_live_51N80DtJDY5lruH3Ne9l3D4Lnm2I8dkO0rzad7EbQw7spSrhWBzxtWj02qoEgJ9QJaoYzzJHM0oCn0n1J0g4u1HlL00of0o51i3"
);

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
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </AppProvider>
  </React.StrictMode>
);

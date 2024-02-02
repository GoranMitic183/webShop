import React from "react";
import MainLayout from "./components/mainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, {
  loader as productsLoader,
} from "./components/homePage/HomePage";
import CategoriePage from "./components/categories/CategoriePage";
import ProductDetails from "./components/product/ProductDetails";
import ErrorPage from "./components/error/errorPage";
import { Categorie } from "./components/categorie/Categorie";
import { WishList } from "./components/wishList/WishList";
import Shop from "./components/shop/Shop";
import Profile from "./components/profile/Profile"
import Register from "./components/profile/Register"
import Login from "./components/profile/Login";
import Accounting from "./components/accounting/Accounting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: productsLoader,
      },
      {
        path: "/categories",
        element: <CategoriePage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/categories/:categorie/:id",
        element: <Categorie />
      },
      {
        path: "/added",
        element: <WishList />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/accounting",
        element: <Accounting />
      }
    ],
  },
]);


function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

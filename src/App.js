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

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      }
    ],
  },
]);

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    // </QueryClientProvider>
  );
}

export default App;

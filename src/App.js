import MainLayout from "./components/mainLayout/MainLayout";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage , { loader as productsLoader } from "./components/homePage/HomePage";
import CategoriePage from "./components/categories/CategoriePage";
import ProductDetails from "./components/product/ProductDetails";
import ErrorPage from "./components/error/errorPage";

const router = createBrowserRouter([
  {
    path: '/',
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
        element: <ProductDetails />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider  router={router}/>
  );
}

export default App;

import MainLayout from "./components/mainLayout/MainLayout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import CategoriePage from "./components/categories/CategoriePage";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/categories" element={<CategoriePage />}></Route>
          <Route path="/product" element={<ProductDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import MainLayout from "./components/mainLayout/MainLayout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Latest from "./components/latest/Latest";
import MainLayout from "./components/mainLayout/MainLayout";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Latest />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

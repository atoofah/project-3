import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProductsDetails from "./pages/ProductsDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
};

export default App;

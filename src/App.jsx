import { Route, Routes } from "react-router-dom";
import "./App.css";
import Test from "./components/Test";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import WishList from "./pages/WishList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail/:goods_id" element={<ProductDetail />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>

      <Test />
    </div>
  );
}

export default App;

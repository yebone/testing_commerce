import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Test from "./components/Test";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail/:goods_id" element={<ProductDetail />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/SearchPage/:search_key_words" element={<SearchPage />} />
      </Routes>

      {/* <Test /> */}
    </>
  );
}

export default App;

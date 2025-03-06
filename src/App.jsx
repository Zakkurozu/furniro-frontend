import "./App.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./layouts/Footer";
import { useEffect } from "react";
import SearchResult from "./pages/SearchResult";
import CheckOut from "./pages/CheckOut";

function App() {
  const location = useLocation();

  useEffect(() => {
    let title = "Furniro | Online Furniture Shop";
    if (location.pathname === "/") {
      title = "Furniro | Online Furniture Shop";
    } else if (location.pathname.toLowerCase() === "/shop") {
      title = "Furniro | Shop";
    } else if (location.pathname.toLowerCase() === "/about") {
      title = "Furniro | About";
    } else if (location.pathname.toLowerCase() === "/contact") {
      title = "Furniro | Contact";
    }

    document.title = title;
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/product/:id/:name" element={<SingleProduct />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/shop/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

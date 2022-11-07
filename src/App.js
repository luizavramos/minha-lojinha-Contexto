import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import { useContext, useState } from "react";
import CartContext from "./Context/CartContext";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  );
}
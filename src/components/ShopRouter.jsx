import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { Return } from "./Return";
import { Cart } from "./Cart";
import { NotFound } from "./NotFound.jsx";

export const ShopRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Products/" element={<Products />} />
        <Route path="/Cart/" element={<Cart />} />
        <Route path="/Return/" element={<Return />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

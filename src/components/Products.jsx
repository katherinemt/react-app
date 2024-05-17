import "../styles/product.css";
import { product_list } from "../products.json";
import { Product } from "./Product";
import { useNavigate } from "react-router";

export const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="shop_product">
      {product_list.map((p) => {
        return (
          <Product
            key={p.id}
            name={p.name}
            price={p.price}
            detail={p.detail}
            foto={p.foto}
          />
        );
      })}
      <button className="shop_product_cart" onClick={() => navigate("/Cart/")}>
        Ir al carrito
      </button>
    </div>
  );
};

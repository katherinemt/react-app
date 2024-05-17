import { useState } from "react";
export const Product = ({ id, name, detail, foto, price }) => {
  const [infoClass, setInfoClass] = useState("hide");
  const [ZoomImg, setZoomImg] = useState("");
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="shop_product_item" key={`product_${id}`}>
      <div
        onMouseOver={() => {
          setInfoClass("show");
          setZoomImg("zoom");
        }}
        onMouseOut={() => {
          setInfoClass("hide");
          setZoomImg("");
        }}
      >
        <img className={`shop_product_item_img ${ZoomImg}`} src={foto} />
        <h5 className={`${infoClass}`}>{name}</h5>
        <p>{detail}</p>
        <footer className="shop_product_footer">
          <small>{price}</small>
        </footer>
      </div>

      <nav>
        <ul className="pagination shop_product_add">
          <li className="page-item">
            <a
              className="page-link shop_product_quantity"
              onClick={() => setCantidad(cantidad - 1)}
            >
              {" "}
              -{" "}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="">
              <span> {cantidad}</span>
            </a>
          </li>

          <li className="page-item">
            <a
              className="page-link shop_product_quantity"
              onClick={() => setCantidad(cantidad + 1)}
            >
              {" "}
              +{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

import "../styles/cart.css";

export const Cart = () => {
  const list_style =
    "list-group-item d-flex justify-content-between lh-condensed";
  return (
    <div className="shop__cart">
      <h4 className="">
        <span className="text-muted">
          El carrito cuenta con los siguientes productos
        </span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group">
        <li className={list_style}>
          <div>
            <h6 className="my-0">Item</h6>
            <small className="text-muted">Detalle producto</small>
          </div>
          <span className="text-muted">$0</span>
        </li>
        <li className={list_style}>
          <div className="text-success">
            <h6 className="my-0">Código promocional</h6>
            <small>Codigo promocional</small>
          </div>
          <span className="text-success">-$0</span>
        </li>
        <li className={list_style}>
          <span>Total (COP)</span>
          <strong>$000</strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Promo code"
          ></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">
              Redimir
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

import "../styles/return.css";
export const Return = () => {
  return (
    <div className="shop__return_form">
      <form>
        <div>
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="shop_return_email"
            placeholder="mail@example.com"
          ></input>
        </div>
        <div>
          <label>N° del pedido</label>
          <input
            type="text"
            className="form-control"
            id="shop_return_id"
            placeholder="#"
          ></input>
        </div>
        <div className="form-group">
          <label>Seleccione la causa de la devolución</label>
          <select className="form-control" id="shop_return_reason">
            <option>Defectos de Calidad</option>
            <option>Talla incorrecta</option>
            <option>El producto no es el que pedí</option>
          </select>
        </div>
        <div className="form-group">
          <label>Observaciones</label>
          <textarea
            className="form-control"
            id="shop_return_obs"
            rows="3"
          ></textarea>
        </div>
      </form>
      <button>Enviar</button>
    </div>
  );
};

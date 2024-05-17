export const Search = () => {
  return (
    <form className="form-inline">
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          id="search_product"
          placeholder="Palabra clave..."
        ></input>
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Buscar
      </button>
    </form>
  );
};

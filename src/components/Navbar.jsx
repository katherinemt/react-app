import "../styles/navbar.css";
export const Navbar = () => {
  return (
    <nav className="shop__nav">
      <a href="/Home">Home</a>
      <a href="/Products">Productos</a>
      <a href="/Cart">Carrito</a>
      <a href="/Return">Devolucion</a>
    </nav>
  );
};

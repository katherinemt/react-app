import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ShopRouter } from "./components/ShopRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />

      <div className="main">
        <ShopRouter />
      </div>

      <Footer />
    </div>
  );
}

export default App;

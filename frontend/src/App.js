import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

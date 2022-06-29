import { Route, Routes, BrowserRouter, Link, NavLink, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Hero from "./pages/Hero";
import Products from "./pages/Products";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="*" element ={<Navigate to="/about"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

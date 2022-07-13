import "./App.css"
import { Route, Routes, BrowserRouter, Link, NavLink, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Hero from "./pages/Hero";
import Products from "./pages/Products";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ProductDetails from "./components/ProductDetails";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";



function App() {

  const {mode} = useTheme()

  return (
    <div className={mode}>
        <BrowserRouter>
          <Navbar/>
          <ThemeSelector/>
          <Routes>
            <Route exact path="/" element={<Hero/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/products/*" element={<Products/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/sign-in" element={<Signin/>} />
            <Route path="/sign-up" element={<Signup/>} />
            <Route path="/*" element={<NotFound/>} />
            <Route path="*" element ={<Navigate to="/"/>}/>
          </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </div>
  );
}

export default App;

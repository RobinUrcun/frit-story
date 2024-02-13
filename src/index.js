import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/css/reset.css";
import "./style/css/index.css";
import Header from "./components/header/header";
import Home from "./pages/Home/home";
import Footer from "./components/footer/footer";
import Products from "./pages/Products/productsCart";
import BurgerProducts from "./pages/Products/productsCategories/burgerProducts/burgerProducts";
import BeefBurgerProducts from "./pages/Products/productsCategories/burgerProducts/beefBurgerProducts/beefBurgerProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Products />}>
          <Route path="burger" element={<BurgerProducts />}>
            <Route path="boeuf" element={<BeefBurgerProducts />} />
            <Route path="poulet" />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

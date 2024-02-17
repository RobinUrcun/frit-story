import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/css/reset.css";
import "./style/css/index.css";
import Header from "./components/header/header";
import Home from "./pages/Home/home";
import Footer from "./components/footer/footer";
import Error from "./pages/Error/error";
import Products from "./pages/Products/productsCart";
import BurgerProducts from "./pages/Products/productsCategories/burgerProducts/burgerProducts";
import BeefBurgerProducts from "./pages/Products/productsCategories/burgerProducts/beefBurgerProducts/beefBurgerProducts";
import ChickenBurgerProducts from "./pages/Products/productsCategories/burgerProducts/chickenBurgerProducts/chickenBurgerProducts";
import SandwichProducts from "./pages/Products/productsCategories/sandwichsProducts/sandwitchsProducts";
import ChickenSandwichProducts from "./pages/Products/productsCategories/sandwichsProducts/chickenSandwichProducts/chickenSandwichProducts";
import BeefSandwichProducts from "./pages/Products/productsCategories/sandwichsProducts/beefSandwichProducts/beefSandwichProducts";
import MammouthProducts from "./pages/Products/productsCategories/mammouthProducts/mammouthsProducts";
import BeefMammouthProducts from "./pages/Products/productsCategories/mammouthProducts/beefMammouthProducts/beefMammouthProducts";
import ChickenMammouthProducts from "./pages/Products/productsCategories/mammouthProducts/chickenMammouthProducts/chickenMammouthProducts";
import SaladProducts from "./pages/Products/productsCategories/saladProducts/saladProduct";
import PaniniProducts from "./pages/Products/productsCategories/paniniProducts/paniniProducts";
import ProductSingle from "./pages/product/product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/produit/:id" element={<ProductSingle />} />
        <Route path="/nosProduits" element={<Products />}>
          <Route path="burger" element={<BurgerProducts />}>
            <Route path="boeuf" element={<BeefBurgerProducts />} />
            <Route path="poulet" element={<ChickenBurgerProducts />} />
          </Route>
          <Route path="sandwich" element={<SandwichProducts />}>
            <Route path="boeuf" element={<BeefSandwichProducts />} />
            <Route path="poulet" element={<ChickenSandwichProducts />} />
          </Route>
          <Route path="mammouth" element={<MammouthProducts />}>
            <Route path="boeuf" element={<BeefMammouthProducts />} />
            <Route path="poulet" element={<ChickenMammouthProducts />} />
          </Route>
          <Route path="salade" element={<SaladProducts />}></Route>
          <Route path="panini" element={<PaniniProducts />}></Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

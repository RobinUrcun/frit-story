import ProductCard from "./productCard";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import LogoBurger from "../../assets/logo_products/logo_burger.png";
import LogoSandwich from "../../assets/logo_products/logo_sandwich.png";
import LogoMammouth from "../../assets/logo_products/logo_mammouth.png";
import LogoMenu from "../../assets/logo_products/logo_meal.png";
import LogoSalad from "../../assets/logo_products/logo_salad.png";

function Products() {
  const [donnee, setDonnee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/carte").then((response) =>
      response
        .json()
        .then((carte) => setDonnee(carte))
        .catch((error) => console.log(error))
    );
  }, []);

  return (
    <main className="main_products">
      <h1>Découvrez nos produits ! </h1>
      <section donnee={donnee} className="first_categories">
        <ProductCard
          atb="first_category_card"
          imgUrl={LogoBurger}
          title="Nos hamburgers"
          route="burger"
        />

        <ProductCard
          atb="first_category_card"
          imgUrl={LogoSandwich}
          title="Nos sandwichs géants"
          route="sandwichs"
        />
        <ProductCard
          atb="first_category_card"
          imgUrl={LogoMammouth}
          title="Nos Mammouths"
          route="mammouths"
        />
        <ProductCard
          atb="first_category_card"
          imgUrl={LogoMenu}
          title="Nos menus"
          route="menus"
        />
        <ProductCard
          atb="first_category_card"
          imgUrl={LogoSalad}
          title="Nos salades"
          route="salades"
        />
      </section>
      <Outlet context={[donnee, setDonnee]} />
    </main>
  );
}

export default Products;

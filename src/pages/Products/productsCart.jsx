import CategoryCard from "./categoryCard";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import LogoBurger from "../../assets/logo_products/logo_burger.png";
import LogoSandwich from "../../assets/logo_products/logo_sandwich.png";
import LogoMammouth from "../../assets/logo_products/logo_mammouth.png";
import LogoPanini from "../../assets/logo_products/logo_panini.png";
import LogoSalad from "../../assets/logo_products/logo_salad.png";

import chickenBurgerLogo from "../../assets/logo_products/logo_burger/chickenBurger.png";
import beefBurgerLogo from "../../assets/logo_products/logo_burger/beefBurger.png";
import beefSandwichLogo from "../../assets/logo_products/logo_sandwich/beefSandwich.png";
import chickenSandwichLogo from "../../assets/logo_products/logo_sandwich/chickenSndwich.png";
import beefMammouthLogo from "../../assets/logo_products/logo_mammouth/beefMammouth.png";
import chickenMammouthLogo from "../../assets/logo_products/logo_mammouth/chickenMammouth.png";
function Products() {
  const [donnee, setDonnee] = useState([]);

  useEffect(() => {
    fetch("https://frit-story-api-b3vs.vercel.app/api/carte").then((response) =>
      response
        .json()
        .then((carte) => setDonnee(carte))
        .catch((error) => console.log(error))
    );
  }, []);

  const [categories, setCategories] = useState([
    {
      category: "burger",
      meat: [
        {
          type: "beef",
          imgUrl: beefBurgerLogo,
          route: "boeuf",
          title: "Burgers au boeuf",
        },
        {
          type: "chicken",
          imgUrl: chickenBurgerLogo,
          route: "poulet",
          title: "Burgers au poulet",
        },
      ],
      imgUrl: LogoBurger,
      title: "Nos hamburgers",
      route: "burger",
    },
    {
      category: "sandwich",
      meat: [
        {
          type: "beef",
          imgUrl: beefSandwichLogo,
          route: "boeuf",
          title: "Sandwichs au boeuf",
        },
        {
          type: "chicken",
          imgUrl: chickenSandwichLogo,
          route: "poulet",
          title: "Sandwichs au poulet",
        },
      ],
      imgUrl: LogoSandwich,
      title: "Nos sandwiches géants",
      route: "sandwich",
    },
    {
      category: "mammouth",
      meat: [
        {
          type: "beef",
          imgUrl: beefMammouthLogo,
          route: "boeuf",
          title: "Mammouths au boeuf",
        },
        {
          type: "chicken",
          imgUrl: chickenMammouthLogo,
          route: "poulet",
          title: "Mammouths au poulet",
        },
      ],
      imgUrl: LogoMammouth,
      title: "Nos Mammouths géants",
      route: "mammouth",
    },
    {
      category: "panini",
      imgUrl: LogoPanini,
      title: "Nos Paninis",
      route: "panini",
    },
    {
      category: "salade",
      imgUrl: LogoSalad,
      title: "Nos Salades",
      route: "salade",
    },
  ]);

  return (
    <main className="main_products">
      <h1>Découvrez nos produits ! </h1>

      <section className="product_section">
        <ul>
          {categories.map((category, index) => (
            <CategoryCard
              key={`${category.title} ${index}`}
              imgUrl={category.imgUrl}
              title={category.title}
              route={category.route}
            />
          ))}
        </ul>
      </section>
      <Outlet
        context={{
          donnee: [donnee, setDonnee],
          category: [categories, setCategories],
        }}
      />
    </main>
  );
}

export default Products;

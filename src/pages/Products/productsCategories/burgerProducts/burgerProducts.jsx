import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import ProductCard from "../../productCard";

import chickenBurgerLogo from "../../../../assets/logo_products/logo_burger/chickenBurger.png";
import beefBurgerLogo from "../../../../assets/logo_products/logo_burger/beefBurger.png";

function BurgerProducts() {
  const [donnee, setDonnee] = useOutletContext();
  console.log(donnee);

  const filterCategoryBurger = donnee.filter(
    (donnee) => donnee.category === "burger"
  );
  return (
    <section className="second_category">
      <ul>
        <li>
          <ProductCard
            atb="second_category_card"
            route="poulet"
            title="Burgers au poulet"
            imgUrl={chickenBurgerLogo}
            meat="poulet"
          />
        </li>
        <li>
          <ProductCard
            atb="second_category_card"
            route="boeuf"
            title="Burgers au boeuf"
            imgUrl={beefBurgerLogo}
            meat="boeuf"
          />
        </li>
      </ul>
      <Outlet />
    </section>
  );
}

export default BurgerProducts;

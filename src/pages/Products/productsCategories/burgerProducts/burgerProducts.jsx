import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import UnderCategory from "../../underCategory";

function BurgerProducts() {
  const {
    donnee: [donnee, setDonnee],
    category: [categories, setCategories],
  } = useOutletContext();
  const categoryBurger = categories.find((x) => x.category === "burger");

  return (
    <section className="product_section">
      <ul>
        {categoryBurger.meat.map((meat, index) => (
          <UnderCategory
            key={meat + index}
            route={meat.route}
            title={meat.title}
            imgUrl={meat.imgUrl}
            meat={meat.type}
          />
        ))}
      </ul>
      <Outlet context={[donnee, setDonnee]} />
    </section>
  );
}

export default BurgerProducts;

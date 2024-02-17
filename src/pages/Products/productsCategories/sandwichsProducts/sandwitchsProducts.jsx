import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import UnderCategory from "../../underCategory";

function SandwichProducts() {
  const {
    donnee: [donnee, setDonnee],
    category: [categories, setCategories],
  } = useOutletContext();
  const categorySandwich = categories.find((x) => x.category === "sandwich");

  return (
    <section className="product_section">
      <ul>
        {categorySandwich.meat.map((meat, index) => (
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

export default SandwichProducts;

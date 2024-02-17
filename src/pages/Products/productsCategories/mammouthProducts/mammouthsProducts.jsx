import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import UnderCategory from "../../underCategory";

function MammouthProducts() {
  const {
    donnee: [donnee, setDonnee],
    category: [categories, setCategories],
  } = useOutletContext();
  const categoryMammouth = categories.find((x) => x.category === "mammouth");

  return (
    <section className="product_section">
      <ul>
        {categoryMammouth.meat.map((meat, index) => (
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

export default MammouthProducts;

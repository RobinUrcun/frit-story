import { useOutletContext } from "react-router-dom";

import SingleProduct from "../../../singleProduct";

function BeefBurgerProducts() {
  const [donnee, setDonnee] = useOutletContext();
  const burgerList = donnee.filter(
    (x) => x.category === "burger" && x.meat === "boeuf"
  );

  console.log(burgerList);
  return (
    <div className="product_section product_background">
      <ul>
        {burgerList.map((burger, index) => (
          <SingleProduct
            key={burger.name + index}
            name={burger.name}
            price={burger.price}
            imgUrl={burger.imgurl}
            description={burger.description}
            _id={burger._id}
          />
        ))}
      </ul>
    </div>
  );
}

export default BeefBurgerProducts;

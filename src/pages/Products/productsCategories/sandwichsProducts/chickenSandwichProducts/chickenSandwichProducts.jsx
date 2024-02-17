import { useOutletContext } from "react-router-dom";

import SingleProduct from "../../../singleProduct";

function ChickenSandwichProducts() {
  const [donnee, setDonnee] = useOutletContext();
  const sandwichList = donnee.filter(
    (x) => x.category === "sandwich" && x.meat === "poulet"
  );

  return (
    <div className="product_section product_background">
      {sandwichList.map((sandwich, index) => (
        <SingleProduct
          key={sandwich.name + index}
          name={sandwich.name}
          price={sandwich.price}
          imgUrl={sandwich.imgUrl}
          description={sandwich.description}
          _id={sandwich._id}
        />
      ))}
    </div>
  );
}

export default ChickenSandwichProducts;

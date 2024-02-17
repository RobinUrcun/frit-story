import { useOutletContext } from "react-router-dom";

import SingleProduct from "../../../singleProduct";

function BeefSandwichProducts() {
  const [donnee, setDonnee] = useOutletContext();
  const sandwichList = donnee.filter(
    (x) => x.category === "sandwich" && x.meat === "boeuf"
  );
  console.log(sandwichList);

  return (
    <div className="product_section product_background">
      <ul>
        {sandwichList.map((sandwich, index) => (
          <SingleProduct
            key={sandwich.name + index}
            name={sandwich.name}
            price={sandwich.price}
            imgUrl={sandwich.imgurl}
            description={sandwich.description}
            _id={sandwich._id}
          />
        ))}
      </ul>
    </div>
  );
}

export default BeefSandwichProducts;

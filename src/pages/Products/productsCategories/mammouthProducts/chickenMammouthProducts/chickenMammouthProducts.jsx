import { useOutletContext } from "react-router-dom";

import SingleProduct from "../../../singleProduct";

function ChickenMammouthProducts() {
  const [donnee, setDonnee] = useOutletContext();
  const mammouthList = donnee.filter(
    (x) => x.category === "mammouth" && x.meat === "poulet"
  );

  return (
    <div className="product_section">
      <ul>
        {mammouthList.map((mammouth, index) => (
          <SingleProduct
            key={mammouth.name + index}
            name={mammouth.name}
            price={mammouth.price}
            imgUrl={mammouth.imgurl}
            description={mammouth.description}
            _id={mammouth._id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ChickenMammouthProducts;

import { useOutletContext } from "react-router-dom";

import SingleProduct from "../../singleProduct";

function SaladProducts() {
  const {
    donnee: [donnee, setDonnee],
    category: [categories, setCategories],
  } = useOutletContext();
  const saladList = donnee.filter((x) => x.category === "salade");

  console.log(saladList);
  return (
    <div className="flex_row product_background">
      {saladList.map((salad, index) => (
        <SingleProduct
          key={salad.name + index}
          name={salad.name}
          price={salad.price}
          imgUrl={salad.imgurl}
          description={salad.description}
          _id={salad._id}
        />
      ))}
    </div>
  );
}

export default SaladProducts;

import { useOutletContext } from "react-router-dom";

import SingleProduct from "../../singleProduct";

function PaniniProducts() {
  const {
    donnee: [donnee, setDonnee],
    category: [categories, setCategories],
  } = useOutletContext();
  const paniniList = donnee.filter((x) => x.category === "panini");

  return (
    <div className="flex_row product_background">
      {paniniList.map((panini, index) => (
        <SingleProduct
          key={panini.name + index}
          name={panini.name}
          price={panini.price}
          imgUrl={panini.imgurl}
          description={panini.description}
          _id={panini._id}
        />
      ))}
    </div>
  );
}

export default PaniniProducts;

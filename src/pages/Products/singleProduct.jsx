import { useOutletContext } from "react-router-dom";

function SingleProduct() {
  const [donnee, setDonnee] = useOutletContext();
  console.log(donnee);
}

export default SingleProduct;

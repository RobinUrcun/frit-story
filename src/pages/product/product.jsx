import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import arrow from "../../assets/form/arrow.png";

function ProductSingle() {
  const [donnee, setDonnee] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const idOfProductSelected = useParams().id;
  console.log(idOfProductSelected);

  function openBox() {
    setIsBoxOpen(!isBoxOpen);
  }

  useEffect(() => {
    async function response() {
      try {
        const responses = await fetch(
          `https://frit-story-api-b3vs.vercel.app/api/carte/${idOfProductSelected}`
        );
        console.log(responses);
        const carte = await responses.json();
        setDonnee(carte);
        setIngredients(carte.ingredient);
      } catch (error) {
        console.log(error);
      }
    }
    response();
  }, []);

  console.log(donnee);
  console.log(ingredients);

  return (
    <section className="productPage">
      <div className="product_image_wrapper">
        <img src={donnee.imgurl} alt="" />
      </div>
      <div className="product_info">
        <div className="product_info_wrapper">
          <h1>{donnee.name}</h1>
          <p className="product_info_description">{donnee.description}</p>
          <div className="product_info_price">{donnee.price / 100 + "€"}</div>
        </div>
        <div className="product_ingredient_wrapper">
          <div onClick={openBox} className="product_ingredient_titled">
            <h2>Ingrédients</h2>
            <img src={arrow} alt="cliquer pour consulter les ingrédients" />
          </div>
          <ul
            className={
              isBoxOpen === false
                ? "product_ingredient_list_close"
                : "product_ingredient_list"
            }
          >
            {ingredients.map((ingr) => (
              <li>{ingr}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductSingle;

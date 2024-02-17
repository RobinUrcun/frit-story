import { useState } from "react";
import { Link } from "react-router-dom";
function SingleProduct({ name, price, imgUrl, _id, description }) {
  function hoverEffect() {}
  return (
    <li className="cardSingleProduct">
      <Link to={`/produit/${_id}`}>
        <div className="singleProductWrapper">
          <h3>{name}</h3>
          <img src={imgUrl} alt="ok" />
          <p>{description}</p>
        </div>
        <div className="priceProduct">{price / 100 + "€"}</div>
      </Link>
    </li>
  );
}

export default SingleProduct;

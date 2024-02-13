import { Outlet, Link } from "react-router-dom";

function ProductCard({ imgUrl, route, title, atb }) {
  return (
    <Link to={route} className={atb}>
      <img src={imgUrl} alt="Nos hamburgers" />
      <h2>{title}</h2>
    </Link>
  );
}

export default ProductCard;

import { Link } from "react-router-dom";

function CategoryCard({ imgUrl, route, title }) {
  return (
    <li className="card">
      <Link to={route}>
        <img src={imgUrl} alt="Nos hamburgers" />
        <h2>{title}</h2>
      </Link>
    </li>
  );
}

export default CategoryCard;

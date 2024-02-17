import { Link } from "react-router-dom";

function UnderCategory({
  route,
  title,
  imgUrl,
  meat,
  atb,
  setUpdateDonnee,
  updateDonnee,
}) {
  return (
    <li className="card">
      <Link
        to={route}
        className={atb}
        onClick={() => {
          console.log(updateDonnee);
        }}
      >
        <img src={imgUrl} alt="Nos hamburgers" />
        <h2>{title}</h2>
      </Link>
    </li>
  );
}

export default UnderCategory;

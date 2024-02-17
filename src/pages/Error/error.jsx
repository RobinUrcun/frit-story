import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="errorSection">
      <p>404</p>
      <Link>retourner à la page d'accueil</Link>
    </section>
  );
}

export default Error;

import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpeg";

function Header() {
  return (
    <header>
      <div className="header_logo">
        <img src={logo} alt="" />
      </div>
      <nav className="header_nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="produits"> Nos Produits</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

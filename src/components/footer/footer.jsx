import { Link } from "react-router-dom";

import Logo from "../../assets/logo.jpeg";
import LogoFacebook from "../../assets/logo_social/logo_facebook.png";
import LogoTripadvisor from "../../assets/logo_social/logo_tripadvisor.png";
import LogoInstagram from "../../assets/logo_social/logo_instagram.jpeg";
function Footer() {
  return (
    <footer>
      <div className="footer_logo">
        <img src={Logo} alt="Frit'Story" />
      </div>
      <div className="footer_social">
        <Link to="https://facebook.com/fritstory/">
          <img src={LogoFacebook} alt="rejoignez nous sur Facebook !" />
        </Link>
        <Link to="https://www.tripadvisor.fr/Restaurant_Review-g187239-d1336792-Reviews-Frit_Story-Sainte_Maxime_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_Azur.html">
          <img src={LogoTripadvisor} alt="Rejoignez nous sur Tripadvisor !" />
        </Link>
        <Link to="https://www.instagram.com/fritstory/">
          <img src={LogoInstagram} alt="" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

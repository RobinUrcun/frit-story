import BannerPhoto from "../../assets/banner.jpeg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_wrapper">
        <img src={BannerPhoto} alt="Le Mammouth Chicken Bacon !" />
      </div>
      <h1>Frit' Story</h1>
    </div>
  );
}

export default Banner;

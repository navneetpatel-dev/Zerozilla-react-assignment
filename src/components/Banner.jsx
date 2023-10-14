import classes from "../css/Banner.module.css";
import BannerImage from "../assets/banner_image.png";
import PlayButton from "../assets/play_button.png";
import FloatingDashboard from "../assets/banner_dashboard_floating.png";
import AppleStore from "../assets/app_store.png";
import PlayStore from "../assets/play_store.png";
import Button from "./ReusableComponents/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Banner = () => {
  const hamburgerOpen = useSelector((state) => state.navbar.isNavbarOpen);

  return (
    <div
      className={classes.banner}
      style={{
        marginTop: hamburgerOpen ? "400px" : "0px",
      }}
    >
      <div className={classes.banner_bg_image}>
        <img
          src={BannerImage}
          alt="Banner image"
          className={classes.banner_image}
        />
        <div className={classes.banner_contents}>
          <div className={classes.banner_text}>
            <h1>Elevate Apartment Living with Our Smart Management App</h1>
            <p>
              Discover Seamless Solutions for Residents, Gatekeepers, Facility
              Managers, and Admins.
            </p>
          </div>
          <div className={classes.banner_buttons}>
            <Link to="get-started">
              <Button text="Get Started" transparent />
            </Link>
            <div className={classes.banner_play_button}>
              <img src={PlayButton} alt="play button" />
              <p>Watch the trailer</p>
            </div>
          </div>
          <div className={classes.banner_floating_dashboard}>
            <img src={FloatingDashboard} alt="Dashboard" />
          </div>
          <div className={classes.download_container}>
            <div className={classes.banner_download}>
              <p>
                Download our myDEN Apartment Management App and simplify your
                living experience!
              </p>
              <div className={classes.download_images}>
                <img src={AppleStore} alt="Apple store link" />
                <img src={PlayStore} alt="Play store link" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

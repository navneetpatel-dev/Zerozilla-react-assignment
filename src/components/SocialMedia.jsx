import classes from "../css/SocialMedia.module.css";
import Section from "./ReusableComponents/Section";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const date = new Date().getFullYear();

  return (
    <Section
      customStyle={{
        marginBottom: "4.8rem",
      }}
    >
      <div className={classes.social_media}>
        <p> &copy; {date} All rights reserved</p>
        <div className={classes.social_links}>
          <Link to="twitter">
            <img src={Twitter} alt="" />
          </Link>
          <Link to="linkedin">
            <img src={Linkedin} alt="" />
          </Link>
          <Link to="facebook">
            <img src={Facebook} alt="" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default SocialMedia;

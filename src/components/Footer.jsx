import classes from "../css/Footer.module.css";
import Logo from "../assets/logo.png";
import Apple from "../assets/app_store.png";
import Google from "../assets/play_store.png";
import Section from "./ReusableComponents/Section";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Section
      customStyle={{
        marginBottom: "4.8rem",
      }}
    >
      <div className={classes.footer}>
        <div className={classes.footer_container}>
          <div className={classes.logo_container}>
            <img src={Logo} alt="logo" />
            <p className={classes.footer_logo_text}>
              Revolutionize apartment living with our feature-rich management
              app.
            </p>
          </div>
        </div>
        {/* Footer contents */}
        <div className={classes.footer_contents}>
          <div className={classes.footer_contents_container}>
            <h2>Products</h2>
            <ul>
              <li>
                <Link to="resident">Resident App</Link>
              </li>
              <li>
                <Link to="gatekeeper">Gatekeeper</Link>
              </li>
              <li>
                <Link to="facility">Facility Management</Link>
              </li>
              <li>
                <Link to="admin-dashboard">Admin Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className={classes.footer_contents_container}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="pricing">Pricing</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={classes.footer_contents_container}>
            <h2>Legal</h2>
            <ul>
              <li>
                <Link to="privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="copyright">Copy Right Policy</Link>
              </li>
            </ul>
          </div>
          <div className={classes.footer_contents_container}>
            <h2>Get the app</h2>
            <ul>
              <li>
                <Link to="apple-store">
                  <img src={Apple} alt="" />
                </Link>
              </li>
              <li>
                <Link to="play-store">
                  <img src={Google} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;

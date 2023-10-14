import classes from "../css/Navbar.module.css";
import logo from "../assets/logo.png";
import HamburgerIcon from "../assets/hamburger.png";
import CloseIcon from "../assets/close.png";
import { Link } from "react-router-dom";
import Button from "./ReusableComponents/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbarOpenAndClose } from "../redux/slices/navbarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const hamburgerOpen = useSelector((state) => state.navbar.isNavbarOpen);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hamburgerHandler = () => {
    dispatch(toggleNavbarOpenAndClose(!hamburgerOpen));
  };

  const isMobile = windowWidth <= 768;

  const mobileNavOpenerCondition = (isMobile && hamburgerOpen) || !isMobile;

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_contents}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {mobileNavOpenerCondition && (
          <div className={classes.navbar_items}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Products</Link>
              </li>
              <li>
                <Link to="/contact">Pricing</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/demo">
                  <Button text="Request Demo" />
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className={classes.hamburger} onClick={hamburgerHandler}>
          {hamburgerOpen ? (
            <img src={CloseIcon} alt="" />
          ) : (
            <img src={HamburgerIcon} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

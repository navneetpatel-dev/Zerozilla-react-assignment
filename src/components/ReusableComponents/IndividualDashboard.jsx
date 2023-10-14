import { Link } from "react-router-dom";
import classes from "../../css/IndividualDashboard.module.css";
import Section from "./Section";
import { PropTypes } from "prop-types";
import Button from "./Button";
import { useEffect, useState } from "react";

const IndividualDashboard = ({ index, image, pLink, heading, pContent }) => {
  const even = index % 2 === 0;

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

  const isMobile = windowWidth <= 768;

  return (
    <Section bgColor={even ? "#F9FAFB" : "#fff"}>
      <div
        className={classes.module_description_image}
        style={{
          order: even && !isMobile ? 1 : 0,
        }}
      >
        <img src={image} alt="Power Convenience" />
      </div>
      <div
        className={classes.module_description_text}
        style={{
          marginBottom: even ? "6rem" : "0rem",
        }}
      >
        <p className={classes.link}>{pLink}</p>
        <h1>{heading}</h1>
        <p className={classes.description}>{pContent}</p>
        <Link to="read-more">
          <Button text="Read More" />
        </Link>
      </div>
    </Section>
  );
};

IndividualDashboard.propTypes = {
  image: PropTypes.string.isRequired,
  pLink: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  pContent: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IndividualDashboard;

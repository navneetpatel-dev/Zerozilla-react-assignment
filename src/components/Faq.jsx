import Section from "./ReusableComponents/Section";
import classes from "../css/Faq.module.css";
import { useEffect, useState } from "react";

const Faq = () => {
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
  const isLargeDesktop = windowWidth >= 1030;

  return (
    <Section
      sectionCustStyle={{
        marginTop: isMobile ? "5rem" : isLargeDesktop ? "40rem" : "35rem",
      }}
    >
      <div className={classes.faq}>
        <h2>FAQs</h2>
        <h1>Everything you need to know about the product and billing.</h1>
      </div>
    </Section>
  );
};

export default Faq;

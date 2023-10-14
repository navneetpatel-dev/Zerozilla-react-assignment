import classes from "../../css/Section.module.css";
import { PropTypes } from "prop-types";

const Section = ({
  children,
  bgColor = "#fff",
  customStyle = {},
  sectionCustStyle = {},
}) => {
  const styles = {};

  if (bgColor) {
    styles["backgroundColor"] = bgColor;
  }

  return (
    <section
      className={classes.section}
      style={{ ...styles, ...sectionCustStyle }}
    >
      <div className={classes.section_content} style={customStyle}>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  customStyle: PropTypes.object,
  sectionCustStyle: PropTypes.object,
};

export default Section;

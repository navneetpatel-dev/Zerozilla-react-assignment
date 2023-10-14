import classes from "../../css/Divider.module.css";
import Section from "./Section";
import { PropTypes } from "prop-types";

export const Divider = ({ styles = {} }) => {
  return (
    <Section
      customStyle={{
        marginBottom: "3.2rem",
        ...styles,
      }}
    >
      <div className={classes.divider}></div>
    </Section>
  );
};

Divider.propTypes = {
  styles: PropTypes.object,
};

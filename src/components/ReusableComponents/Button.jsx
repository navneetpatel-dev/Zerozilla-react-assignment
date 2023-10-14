import classes from "../../css/Button.module.css";
import PropTypes from "prop-types";

const Button = ({ text, transparent }) => {
  const styles = {};
  if (transparent) {
    styles["backgroundColor"] = "transparent";
    styles["border"] = "1px solid #EAECF0";
    styles["borderRadius"] = "4px";
  }

  return (
    <div className={classes.button} style={styles}>
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  transparent: PropTypes.bool,
};

export default Button;

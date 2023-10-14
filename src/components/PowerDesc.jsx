import Section from "./ReusableComponents/Section";
import classes from "../css/PowerDesc.module.css";

const PowerDesc = () => {
  return (
    <Section>
      <div className={classes.power_desc}>
        <h1>{`Our App's Powerful Modules`}</h1>
        <p>
          Our all-in-one Apartment Management App is designed to simplify the
          complexities of apartment living. With specialized modules catering to
          residents, gatekeepers, facility managers, and administrators, our app
          revolutionizes the way apartment communities are managed.
        </p>
      </div>
    </Section>
  );
};

export default PowerDesc;

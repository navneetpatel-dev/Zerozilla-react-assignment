import { Section } from "./index";
import classes from "../css/AppartmentManagement.module.css";
import Appartment from "../assets/appartement.png";

const AppartmentManagement = () => {
  return (
    <Section bgColor="#F2F4F7" sectionCustStyle={{ marginTop: "25rem" }}>
      <div className={classes.appartment_text}>
        <h1>Welcome to myDEN Apartment Management App!</h1>
        <p>
          Simplify the management of your apartment complex with our
          comprehensive solution. Our app offers specialized modules for
          residents, gatekeepers, facility managers, and administrators,
          ensuring a seamless experience for everyone involved.
        </p>
      </div>
      <div className={classes.appartment_image}>
        <img src={Appartment} alt="Appartement" />
      </div>
    </Section>
  );
};

export default AppartmentManagement;

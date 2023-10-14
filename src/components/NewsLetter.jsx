import Button from "./ReusableComponents/Button";
import Section from "./ReusableComponents/Section";
import classes from "../css/NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <Section bgColor="#bde2ff">
      <div className={classes.newsletter}>
        <div className={classes.newsletter_content}>
          <h1>Sign up for our newsletter!</h1>
          <p>Get notified about launch, updates and weekly blogs.</p>
        </div>
        <div className={classes.newsletter_input}>
          <input type="text" placeholder="Enter your email" />
          <Button text="Subscribe" />
        </div>
      </div>
    </Section>
  );
};

export default NewsLetter;

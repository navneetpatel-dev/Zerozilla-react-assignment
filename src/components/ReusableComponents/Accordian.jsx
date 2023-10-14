import { useState } from "react";
import Chevron_up from "../../assets/chevron_up.png";
import Chevron_down from "../../assets/chevron_down.png";
import { PropTypes } from "prop-types";
import classes from "../../css/Accordian.module.css";
import { Divider } from "./Divider";

function Accordion({ data }) {
  const [openSection, setOpenSection] = useState(0);

  const handleSectionClick = (sectionIndex) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };

  return (
    <div>
      {data.map((section, index) => (
        <div
          key={index}
          onClick={() => handleSectionClick(index)}
          className={classes.section_header}
        >
          <div className={classes.accordion_section}>
            <div className={classes.accordian_header}>
              <h2>{section.title}</h2>
              {openSection === index && (
                <div className={classes.accordian_content}>
                  {section.content}
                </div>
              )}
            </div>
            <span className={classes.cheveron}>
              {openSection === index ? (
                <img src={Chevron_up} alt="" />
              ) : (
                <img src={Chevron_down} alt="" />
              )}
            </span>
          </div>
          {index !== data.length - 1 && (
            <Divider
              styles={{
                marginTop: "2.4rem",
                marginBottom: "3.2rem",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.array,
};

export default Accordion;

import classes from "../css/ManagementApp.module.css";
import ManagementImage from "../assets/management.png";
import Info from "../assets/management_info_icon.png";
import Explore from "../assets/expore.png";
import Button from "./ReusableComponents/Button";

const ManagementApp = () => {
  const data = [
    {
      title: "Comprehensive SOlution",
      content:
        "Our myDEN Apartment Management App offers an all-in-one solution for residents, gatekeepers, facility managers, and admins.",
    },
    {
      title: "Enhanced Convenience",
      content:
        "Residents can handle payments and maintenance effortlessly, while gatekeepers efficiently manage visitor access, all from their smartphones.",
    },
    {
      title: "Advanced Security",
      content:
        "Our Gatekeeper Module ensures a secure environment by tracking visitor entry and enhancing access control, ensuring the safety of your community.",
    },
    {
      title: "Streamlined Operations",
      content:
        "Facility managers can optimize resource allocation and maintenance schedules with our App, ensuring smooth operations and satisfied residents.",
    },
    {
      title: "Data-Driven Insights",
      content:
        "Our Admin Dashboard Module empowers administrators with valuable data analytics and insights.",
    },
    {
      title: "Customer Satisfaction",
      content:
        "Join thousands of happy users who already trust our app to improve their apartment management.",
    },
    {
      title: "Customizable & Scalable",
      content:
        "Whether you manage a small complex or a large-scale property, our app is designed to scale with your requirements.",
    },
    {
      title: "Dedicated Support",
      content:
        "Our dedicated support team is ready to address your queries and ensure a smooth experience with our app.",
    },
  ];

  return (
    <div className={classes.management}>
      <div className={classes.image_with_content}>
        <img src={ManagementImage} alt="" />
        <div className={classes.management_contents}>
          <div className={classes.management_contents_top}>
            <p>WHO CHOOSE US</p>
            <h1>Discover the Advantages of myDEN Apartment Management App</h1>
          </div>
          <div className={classes.management_contents_middle}>
            {data.map((data, index) => {
              return (
                <div className={classes.content} key={index}>
                  <img src={Info} alt="" />
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                </div>
              );
            })}
          </div>
          <div className={classes.explore_management_app}>
            <img src={Explore} alt="" />
            <div className={classes.app_content}>
              <h1>Ready to Experience the Future of Apartment Management?</h1>
              <p>Join myDEN app to manage your communities efficiently.</p>
              <Button text="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementApp;

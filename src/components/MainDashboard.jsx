import Power from "../assets/power_convenience.png";
import Security from "../assets/security.png";
import Amenities from "../assets/amenities.png";
import Decisions from "../assets/decisions.png";
import IndividualDashboard from "./ReusableComponents/IndividualDashboard";

const MainDashboard = () => {
  const data = [
    {
      image: Power,
      pLink: "Resident",
      heading: "Discover the Power of Convenience",
      pContent:
        "Our Resident Module empowers residents to take control of their living experience. From paying rent and utility bills to requesting maintenance services, everything is just a tap away. Stay up-to-date with community announcements and effortlessly communicate with your neighbors.",
    },
    {
      image: Security,
      pLink: "GATEKEEPER",
      heading: "Efficient Amenities and Resource Allocation",
      pContent:
        "Our Gatekeeper Module revolutionizes visitor management. Gatekeepers can efficiently manage visitor access, track deliveries, and maintain communication with residents. Say goodbye to long queues and time-consuming paperwork.Experience a new level of security and convenience with our app.",
    },
    {
      image: Amenities,
      pLink: "FACILITY MANAGEMENT",
      heading: "Efficient Amenities and Resource Allocation",
      pContent:
        "Facility managers, say hello to streamlined operations. Our Facility Management Module allows you to oversee amenities, schedule maintenance, and handle resident requests with ease. Keep residents satisfied and resources optimized.Join other facility managers who trust our app to manage their communities efficiently.",
    },
    {
      image: Decisions,
      pLink: "ADMIN DASHBOARD",
      heading: "Data-Driven Decisions Made Simple",
      pContent:
        "For administrators, our Admin Dashboard Module provides comprehensive data analytics and insights. Monitor activities, track trends, and manage the entire apartment complex efficiently. Make well-informed decisions to ensure a thriving community. Discover the power of data with our intuitive admin dashboard.",
    },
  ];

  return (
    <div>
      {data.map((data, index) => {
        return (
          <IndividualDashboard
            image={data.image}
            pLink={data.pLink}
            heading={data.heading}
            pContent={data.pContent}
            key={index}
            index={index + 1}
          />
        );
      })}
    </div>
  );
};

export default MainDashboard;

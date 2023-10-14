import { Banner } from "./components";
import { Navbar } from "./components";
import MainDashboard from "./components/MainDashboard";
import ManagementApp from "./components/ManagementApp";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import { Divider } from "./components/ReusableComponents/Divider";
import SocialMedia from "./components/SocialMedia";
import AppartmentManagement from "./components/AppartmentManagement";
import PowerDesc from "./components/PowerDesc";
import Faq from "./components/Faq";
import FaqContent from "./components/FaqContent";
import classes from "./css/App.module.css";

const App = () => (
  <div className={classes.app}>
    <nav>
      <Navbar />
    </nav>
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <AppartmentManagement />
      </section>
      <section>
        <PowerDesc />
      </section>
      <section>
        <MainDashboard />
      </section>
      <section>
        <ManagementApp />
      </section>
      <section>
        <Faq />
        <FaqContent />
      </section>
      <section>
        <NewsLetter />
      </section>
    </main>
    <footer>
      <Footer />
      <Divider />
      <SocialMedia />
    </footer>
  </div>
);

export default App;

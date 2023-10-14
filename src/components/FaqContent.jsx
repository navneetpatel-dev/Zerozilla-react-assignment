import classes from "../css/FaqContent.module.css";
import Faq from "../assets/faq.png";

import Section from "./ReusableComponents/Section";
import Accordion from "./ReusableComponents/Accordian";

const FaqContent = () => {
  const data = [
    {
      title: "Is there a free trial available?",
      content:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      content:
        "PLAN:- Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "What is your cancellation policy?",
      content:
        "CANCELLATION:- Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can other info be added to an invoice?",
      content:
        "INVOICE:- Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      content:
        "BILLING:- Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How do I change my account email?",
      content:
        "ACCOUNT:- Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];
  return (
    <Section
      customStyle={{
        alignItems: "flex-start",
      }}
      media="1024px"
    >
      <div className={classes.faq_content}>
        <Accordion data={data} />
      </div>
      <div className={classes.faq_image}>
        <img src={Faq} alt="" />
      </div>
    </Section>
  );
};

export default FaqContent;

import { NextPage } from "next";
import ContactForm from "../components/Contact/contact-form";
import Main from "../components/UI/main";

const ContactPage: NextPage = () => {
  return (
    <div className="h-screen bg-dark-cyan flex flex-col justify-center items-center text-electric-blue">
      <ContactForm />
    </div>
  );
};

export default ContactPage;

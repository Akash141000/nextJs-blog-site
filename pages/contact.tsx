import { NextPage } from "next";
import ContactForm from "../components/Contact/contact-form";

const ContactPage: NextPage = () => {
  return (
    <div className="h-screen bg-dark-cyan fixed overflow-scroll flex flex-col w-screen justify-center items-center text-electric-blue">
      <ContactForm />
    </div>
  );
};

export default ContactPage; 

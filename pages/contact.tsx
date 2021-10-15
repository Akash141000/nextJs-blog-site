import { NextPage } from "next";
import ContactForm from "../components/Contact/contact-form";
import Head from "next/dist/shared/lib/head";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message" />
      </Head>
      <div className="h-screen bg-dark-cyan fixed overflow-scroll flex flex-col w-screen justify-center items-center text-electric-blue">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;

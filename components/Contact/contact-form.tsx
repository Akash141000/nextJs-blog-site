import React, { FormEventHandler, useRef } from "react";

const ContactForm = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const sendMessageHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        name: nameRef.current.value,
        message: messageRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section>
      <h1 className="text-4xl my-4">How can I help you?</h1>
      <form
        id="contactForm"
        onSubmit={sendMessageHandler}
        className="flex flex-col w-1/2 text-xl"
      >
        <div className="my-2">
          <label htmlFor="email">Your Email</label>
          <input
            ref={emailRef}
            className="text-black-color p-2"
            type="email"
            id="email"
          />
        </div>
        <div className="my-2">
          <label htmlFor="email">Your Name</label>
          <input
            ref={nameRef}
            className="text-black-color p-2"
            type="text"
            id="name"
          />
        </div>
        <div className="my-2">
          <label htmlFor="message">Your Message</label>
          <textarea
            ref={messageRef}
            className="text-black-color p-2"
            id="message"
          />
        </div>
        <div className="my-2 ">
          <button
            className="border p-2 hover:bg-electric-blue hover:text-black-color "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

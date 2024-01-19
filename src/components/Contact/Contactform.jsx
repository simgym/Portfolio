import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contactform.css";

export const ContactUs = () => {
  const form = useRef();
  const [responseResult, setResponseResult] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mydsxjn",
        "template_634kg3c",
        form.current,
        "voy210zXE0uGf6M2P"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setResponseResult("Message sent");
            setTimeout(() => {
              setResponseResult("");
            }, 3000);
          }
        },
        (error) => {
          console.log(error.text);
          if (error.text) {
            setResponseResult(error.text);
            setTimeout(() => {
              setResponseResult("");
            }, 3000);
          }
        }
      );
    form.current.reset();
  };

  return (
    <>
      <main className="contact-wrapper">
        {" "}
        <p className="response-result">{responseResult}</p>
        <h1 className="message-heading">MESSAGE ME</h1>
        <form ref={form} onSubmit={sendEmail} className="message-me-form">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="message-me-input"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="message-me-input"
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter message"
            className="message-me-input"
          />
          <input type="submit" value="Send" className="message-me-submit" />
        </form>
      </main>
    </>
  );
};

import React from "react";
import styled from "styled-components";
import { Section } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
import { motion } from "framer-motion";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import contactImage from "../img/contact-image.svg";

import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [element, controls] = useScroll();
  // Formspree form
  const [state, handleSubmit] = useForm("mqknvddl");
  // Confirmation message on form submission
  if (state.succeeded) {
    return <p>Submission successful. Thanks for contacting me!</p>;
  }
  return (
    <div>
      <Contact
        id="contact"
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <div>
          <h2>
            Get In <span>Contact</span>
          </h2>
        </div>
        <ContactForm>
          <form onSubmit={handleSubmit}>
            <div className="Info">
              <input type="text" placeholder="Name" id="Name" required />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input type="text" placeholder="Subject" id="Subject" required />
            </div>
            <div className="Message">
              <textarea
                required
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="contact-footer">
              <div>
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </div>
              <div className="iconLinks">
                <a href="https://github.com/alibahbah" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.linkedin.com/in/arobs/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
              </div>
            </div>
          </form>
        </ContactForm>
      </Contact>
      <ContactImage
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <img src={contactImage} alt="send a message" />
      </ContactImage>
    </div>
  );
};

const Contact = styled(Section)`
  z-index: 2;
  display: block;
  box-sizing: border-box;
  width: 55vw;
  height: 70vh;
  padding-top: 3rem;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  // Media Queries
  @media screen and (max-width: 2800px) {
  }
  @media screen and (max-width: 2400px) {
  }
  @media screen and (max-width: 2000px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    padding: 2rem 2rem;
    text-align: center;
    justify-content: center;
    width: 100vw;
    min-height: 50rem;
  }
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 500px) {
  }
`;

const ContactForm = styled(motion.div)`
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    button {
      margin: 0;
      align-items: center;
      justify-content: center;
    }
    .contact-footer {
      width: 100%;
      min-width: 18rem;
      margin: 1rem 2.5rem;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
    }
    .iconLinks {
      a {
        padding-left: 1.5rem;
        margin: 1rem 0rem;
        color: white;
        text-decoration: none;
      }
    }
  }
  input {
    margin: 1rem;
    padding: 1rem 1rem;
    color: white;
    background: #323232;
    border: none;
    font-family: "Inter" sans-serif;
    font-size: 1.5rem;
  }
  .Info {
    display: flex;
    flex-direction: column;
    min-width: 22.5rem;
    width: 100%;
  }
  .Info input {
    min-height: 3rem;
    height: 5vh;
    margin: 1rem 0rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #1f1f1f;
  }
  .Message {
    display: block;
    width: 100%;
    min-width: 22.5rem;
  }
  .Message textarea {
    background: #323232;
    color: white;
    border: none;
    min-height: 13rem;
    height: 30vh;
    margin: 2rem 0rem;
    width: 100%;
    font: normal 1.5rem Inter, sans-serif;
    padding: 1rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #1f1f1f;
  }
`;

const ContactImage = styled(motion.div)`
  position: absolute;
  right: 22vh;
  top: 22vh;
  z-index: -1;
  img {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export default ContactSection;

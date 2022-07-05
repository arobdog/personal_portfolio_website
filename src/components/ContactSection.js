import React from "react";
import styled from "styled-components";
import { Section } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [element, controls] = useScroll();
  return (
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
        <img src="" alt="Linkedin" />
        <img src="" alt="Email" />
      </div>
      <ContactForm>
        <form action="">
          <div className="Info">
            <input type="text" placeholder="Name" id="Name" />
            <input type="email" placeholder="Email" id="Email" />
            <input type="text" placeholder="Subject" id="Subject" />
          </div>
          <div className="Message">
            <input type="text" placeholder="Message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </ContactForm>
    </Contact>
  );
};

const Contact = styled(Section)`
  display: block;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;

const ContactForm = styled(motion.div)`
  width: 60vw;
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  form button {
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
  }
  .Info input {
    min-width: 32rem;
    width: 35vw;
    height: 3rem;
    margin: 1rem 0rem;
  }
  .Message {
  }
  .Message input {
    width: 35vw;
    height: 13rem;
    margin: 2rem 0rem;
  }
`;

export default ContactSection;

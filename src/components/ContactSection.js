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

const ContactSection = () => {
  const [element, controls] = useScroll();
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
          <form action="">
            <div className="Info">
              <input type="text" placeholder="Name" id="Name" />
              <input type="email" placeholder="Email" id="Email" />
              <input type="text" placeholder="Subject" id="Subject" />
            </div>
            <div className="Message">
              <input type="text" placeholder="Message" />
            </div>
            <div className="contact-footer">
              <div>
                <button type="submit">Send</button>
              </div>
              <div className="iconLinks">
                <a href="https://www.linkedin.com/in/arobs/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://github.com/alibahbah" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
              </div>
            </div>
          </form>
        </ContactForm>
      </Contact>
      <ConatactImage
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <img src={contactImage} alt="send a message" />
      </ConatactImage>
    </div>
  );
};

const Contact = styled(Section)`
  z-index: 2;
  display: block;
  box-sizing: border-box;
  width: 55vw;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
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
    height: 3rem;
    margin: 1rem 0rem;
  }
  .Message {
    display: block;
    width: 100%;
    min-width: 22.5rem;
  }
  .Message input {
    height: 13rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;

const ConatactImage = styled(motion.div)`
  position: absolute;
  right: 20vh;
  top: 20vh;
  z-index: -1;
  img {
    scale: 1;
    opacity: 1;
  }
`;

export default ContactSection;

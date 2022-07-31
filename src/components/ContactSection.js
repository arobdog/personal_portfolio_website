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
          <form
            name="contact"
            action="/contact"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className="Info">
              <input
                type="text"
                placeholder="Name"
                id="Name"
                name="name"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="Message">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="contact-footer">
              <div>
                <button type="submit">Submit</button>
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
  @media screen and (max-width: 1200px) {
    min-height: auto;
    padding: 4rem 4rem;
    margin: auto;
    width: 100vw;
  }
  @media screen and (max-height: 850px) {
    padding-top: 1.5rem;
    h2 {
      padding: 0;
    }
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
      @media screen and (max-width: 350px) {
        margin: auto;
        min-width: 10rem;
        svg {
          transform: scale(0.8);
        }
      }
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
    min-width: 10rem;
    width: 100%;
  }
  .Info input {
    min-height: 1rem;
    height: 5vh;
    margin: 1rem 0rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #1f1f1f;
  }
  .Message {
    display: block;
    width: 100%;
    min-width: 10rem;
  }
  .Message textarea {
    background: #323232;
    color: white;
    border: none;
    min-height: 3rem;
    height: 25vh;
    margin: 2rem 0rem;
    width: 100%;
    font: normal 1.5rem Inter, sans-serif;
    padding: 1rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #1f1f1f;
  }
`;

const ContactImage = styled(motion.div)`
  position: absolute;
  right: 20vh;
  top: 25vh;
  z-index: -1;
  img {
    opacity: 1;
    transform: scale(1.2);
  }
  // Media Queries
  @media screen and (max-width: 2800px) {
    right: 20vh;
    top: 30vh;
    img {
      transform: scale(1.5);
    }
  }
  @media screen and (max-width: 2400px) {
    right: 17vh;
    top: 30vh;
    img {
      transform: scale(1.4);
    }
  }
  @media screen and (max-width: 2000px) {
    right: 12vh;
    top: 28vh;
    img {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 1600px) {
    right: 6vh;
    top: 24vh;
    img {
      transform: scale(1);
    }
  }
  @media screen and (max-width: 1200px) {
    right: 20vh;
    top: 25vh;
    overflow: hidden;
    img {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`;

export default ContactSection;

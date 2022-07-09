import React, { useState } from "react";
import A1 from "../img/A-layer1.svg";
import A2 from "../img/A-layer1.svg";
import A3 from "../img/A-layer1.svg";
import LayeredA from "./LayeredA";
import { Section, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, buttonAnim } from "../animation";
import Wave from "./Wave";
import styled from "styled-components";
//React Router
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HomeSection = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  return (
    <Section id="home">
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Alex</span>.
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Software Engineer</motion.h2>
          </Hide>
        </motion.div>
        <HashLink to="/#about" animate={{ duration: 100, easing: "easeOut" }}>
          <motion.button variants={fade}>About Me</motion.button>
        </HashLink>
        <HashLink to="/#skills">
          <motion.button className="skills-button" variants={fade}>
            Skills
          </motion.button>
        </HashLink>
        <HashLink to="/projects">
          <motion.button className="projects-button" variants={fade}>
            Projects
          </motion.button>
        </HashLink>
      </Description>
      <Wave />
    </Section>
  );
};

export default HomeSection;
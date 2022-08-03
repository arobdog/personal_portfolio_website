import React from "react";
import { Section, Description, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
//React Router
import { HashLink } from "react-router-hash-link";

const HomeSection = () => {
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
        <motion.div className="link-buttons">
          <HashLink smooth to="/#about">
            <motion.button className="about-button" variants={fade}>
              About Me
            </motion.button>
          </HashLink>
          <HashLink smooth to="/#skills">
            <motion.button className="skills-button" variants={fade}>
              Skills
            </motion.button>
          </HashLink>
          <HashLink to="/projects">
            <motion.button className="projects-button" variants={fade}>
              Projects
            </motion.button>
          </HashLink>
        </motion.div>
      </Description>
    </Section>
  );
};

export default HomeSection;

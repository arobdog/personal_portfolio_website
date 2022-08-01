import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images

//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MyProjects = () => {
  const [element, controls] = useScroll();
  return (
    <Projects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#212121" }}
    >
      <Project>
        <motion.div className="heading" variants={fade}>
          <motion.h2>Ember Game Search</motion.h2>
          <motion.div className="icons">
            <motion.a href="https://github.com/alibahbah/ember" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </motion.a>
            <motion.a href="https://ember-games.netlify.app" target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <motion.div className="content">
          <motion.div className="description">
            <p>Hello there</p>
          </motion.div>
          <motion.div className="image-stack">
            <Hide>
              <motion.img variants={photoAnim} alt="Ember Game Search" />
            </Hide>
          </motion.div>
        </motion.div>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.div className="heading" variants={fade}>
          <motion.h2>F&P Data Analysis Tool</motion.h2>
          <motion.div className="icons">
            <motion.a href="" target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <motion.div className="content">
          <motion.div className="description">
            <p>Hello there</p>
          </motion.div>
          <motion.div className="image-stack">
            <Hide>
              <FontAwesomeIcon
                style={{ cursor: "pointer", padding: "0rem 1rem" }}
                icon={faChevronLeft}
                size="4x"
              />
              <ProjectImages>
                <motion.img alt="Python Analysis Tool" />
              </ProjectImages>
              <FontAwesomeIcon
                style={{ cursor: "pointer", padding: "0rem 1rem" }}
                icon={faChevronRight}
                size="4x"
              />
            </Hide>
          </motion.div>
        </motion.div>
      </Project>
      <ScrollTop />
    </Projects>
  );
};

const Projects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .heading {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .icons {
    svg {
      margin: 0.5rem;
      padding: 0.5rem;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  .line {
    height: 0.5rem;
    background: #14ffec;
    margin-bottom: 3rem;
  }
  .content {
    display: flex;
    width: 100%;
    height: 60vh;
    p {
      padding: 0;
    }
    .description {
      width: 50%;
    }
    .image-stack {
      color: white;
      display: inline;
      margin: auto;
      width: 50%;
    }
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const ProjectImages = styled(motion.div)`
  z-index: -1;
  img {
    position: absolute;
    width: 100%;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default MyProjects;

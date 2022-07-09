import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images

//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const MyProjects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Projects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#212121" }}
    >
      <Project>
        <motion.h2 variants={fade}>Python Report Generator</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work">
          <Hide>
            <motion.img variants={photoAnim} alt="athlete" />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.h2>Data Glove</motion.h2>
        <motion.div variantss={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img alt="theracer" />
        </Link>
      </Project>
      <ScrollTop />
    </Projects>
  );
};

const Projects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #14ffec;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default MyProjects;

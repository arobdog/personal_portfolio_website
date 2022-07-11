import styled from "styled-components";
import { motion } from "framer-motion";

//Styled Components
export const Section = styled(motion.div)`
  min-height: 94vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  padding-top: 2rem;
  width: 60vw;
  @media (max-width: 2800px) {
  }
  @media (max-width: 1920px) {
  }
  @media (max-width: 1200px) {
    display: flex;
    padding: 2rem 2rem;
    text-align: center;
    justify-content: center;
    width: 100vw;
    min-height: 50rem;
  }
  @media (max-width: 800px) {
    height: 60rem;
  }
  @media (max-width: 500px) {
    height: 50rem;
  }
  @media (max-height: 1000px) {
    height: 66rem;
  }
  @media (max-height: 850px) {
    height: 62rem;
  }
  @media (max-height: 700px) {
    height: 35rem;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  p {
    padding: 1.5rem 0rem;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 1rem;
  }
  .skills-title {
    padding: 1rem 1rem;
    font-size: 2rem;
  }
  .skills-button {
    margin-left: 2rem;
  }
  .projects-button {
    margin-left: 2rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
    @media (max-width: 1200px) {
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

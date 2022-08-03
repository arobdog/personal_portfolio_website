import styled from "styled-components";
import { motion } from "framer-motion";

//Styled Components
export const Section = styled(motion.div)`
  max-height: 94vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  padding-top: 6rem;
  width: 60vw;
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 1200px) {
    display: flex;
    padding: 2rem 2rem;
    text-align: center;
    justify-content: center;
    width: 100vw;
    min-height: 50rem;
  }
  @media screen and (max-width: 800px) {
    height: 60rem;
  }
  @media screen and (max-width: 500px) {
    height: 50rem;
  }
  @media screen and (max-height: 1000px) {
    height: 60rem;
    @media screen and (orientation: landscape) {
    }
  }
  @media screen and (max-height: 850px) {
    height: 60rem;
    @media (orientation: landscape) {
      height: 30rem;
    }
  }
  @media screen and (max-height: 700px) {
    height: 40rem;
    @media screen and (orientation: landscape) {
      height: 30rem;
    }
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  p {
    padding: 1.5rem 0rem;
    padding-top: 3rem;
    padding-bottom: 0rem;
    width: 95%;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 1.5rem;
  }
  .skills-title {
    padding: 1rem 0rem;
    font-size: 1.5rem;
  }
  .skills-button {
    margin-left: 2rem;
  }
  .projects-button {
    margin-left: 2rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
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

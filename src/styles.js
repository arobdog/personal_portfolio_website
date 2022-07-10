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
    div {
      width: 95vw;
    }

    display: block;
    padding: 2rem 2rem;
    text-align: center;
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

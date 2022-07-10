import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from "framer-motion";

//Import Images
import { ReactComponent as A1 } from "../img/A-layer1.svg";
import { ReactComponent as A2 } from "../img/A-layer2.svg";
import { ReactComponent as A3 } from "../img/A-layer3.svg";

//Import Animations
import { scrollAnim } from "../animation";

const LayeredA = () => {
  // Do calculations for scroll position
  const { scrollYProgress } = useViewportScroll();
  const scrollYPercentage = useTransform(
    scrollYProgress,
    (value) => value * -100
  );
  //A2 Layer Values
  const a2Position = useTransform(scrollYPercentage, (value) => value * 0.35);
  //A3 Layer Values
  const a3Position = useTransform(scrollYPercentage, (value) => value * 0.7);

  return (
    <CombinedA>
      <StyledA1
        style={{
          scale: 1,
          rotate: "-15deg",
        }}
        src={A1}
        alt="First letter A layer"
      />
      <StyledA2
        style={{ scale: 1, rotate: "-15deg", x: a2Position, y: a2Position }}
        src={A2}
        alt="Second letter A layer"
      />
      <StyledA3
        style={{
          scale: 1,
          rotate: "-15deg",
          x: a3Position,
          y: a3Position,
          transition: { duration: 0.5, ease: "ease-in-out" },
        }}
        transform="scale: 1.5"
        src={A3}
        alt="Third letter A layer"
      />
    </CombinedA>
  );
};

const CombinedA = styled(motion.div)`
  position: sticky;
  top: 25vh;
  background: none;
  z-index: 8;
  // Media queries for 4k to small mobile friendliness
  @media (max-width: 2800px) {
    transform: scale(1.9) translateX(-10vw);
    top: 10vh;
  }
  @media (max-width: 2400px) {
    transform: scale(1.75) translateX(-8vw);
    top: 13vh;
  }
  @media (max-width: 2000px) {
    transform: scale(1.5) translateX(-5vw);
    top: 12vh;
  }
  @media (max-width: 1600px) {
    transform: scale(1.2) translateX(3vw);
    top: 18vh;
  }
  @media (max-width: 1200px) {
    transform: scale(1) translateX(-10vw);
    opacity: 0.2;
    top: 25vh;
    z-index: -1;
  }
  @media (max-width: 800px) {
    transform: scale(0.85) translateX(0vw);
    opacity: 0.2;
    top: 30vh;
    z-index: -1;
  }
  @media (max-width: 600px) {
    transform: scale(0.8) translateX(10vw);
    opacity: 0.2;
    top: 30vh;
    z-index: -1;
  }
  @media (max-width: 400px) {
    transform: scale(0.7) translateX(15vw);
    opacity: 0.2;
    top: 30vh;
    z-index: -1;
  }
`;

const StyledA1 = styled(motion(A1))`
  z-index: 8;
  opacity: 100%;
  position: absolute;
  top: 5vh;
  right: 20vw;
  transform: scale(1.5);
`;

const StyledA2 = styled(motion(A2))`
  z-index: 7;
  opacity: 100%;
  position: absolute;
  top: 5vh;
  right: 20vw;
  transform: scale(1.5);
`;
const StyledA3 = styled(motion(A3))`
  z-index: 6;
  opacity: 100%;
  position: absolute;
  top: 5vh;
  right: 20vw;
  transform: scale(1.5);
`;

export default LayeredA;

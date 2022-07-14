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
import { aLayerAnim } from "../animation";

const LayeredA = () => {
  // Do calculations for scroll position
  const { scrollYProgress } = useViewportScroll();
  const scrollYPercentage = useTransform(
    scrollYProgress,
    (value) => value * -100
  );
  //A2 Layer Values
  const a2Position = useTransform(scrollYPercentage, (value) => value * 0.325);
  //A3 Layer Values
  const a3Position = useTransform(scrollYPercentage, (value) => value * 0.65);

  let onHoverOffset = 0;

  return (
    <CombinedA>
      <StyledA1
        variants={aLayerAnim}
        initial="hidden"
        animate="show"
        onMouseEnter={() => console.log("hello A1")}
        onMouseLeave={() => console.log("bye A1")}
        className="A1"
        style={{ rotate: "-15deg" }}
        src={A1}
        alt="First letter A layer"
      />
      <StyledA2
        variants={aLayerAnim}
        initial="hidden"
        animate="show"
        onMouseEnter={() => console.log("hello A2")}
        onMouseLeave={() => console.log("bye A2")}
        className="A2"
        style={{
          rotate: "-15deg",
          x: a2Position,
          y: a2Position,
          transition: "x, 90ms ease-out",
          transition: "y, 90ms ease-out",
        }}
        src={A2}
        alt="Second letter A layer"
      />
      <StyledA3
        variants={aLayerAnim}
        initial="hidden"
        animate="show"
        onMouseEnter={null}
        onMouseLeave={null}
        className="A3"
        style={{
          rotate: "-15deg",
          x: a3Position,
          y: a3Position,
          transition: "x, 90ms ease-out",
          transition: "y, 90ms ease-out",
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
  @media screen and (max-width: 2800px) {
    transform: scale(1.8) translateX(-10.5vw);
    top: 16vh;
  }
  @media screen and (max-width: 2400px) {
    transform: scale(1.65) translateX(-8.5vw);
    top: 17vh;
  }
  @media screen and (max-width: 2000px) {
    transform: scale(1.4) translateX(-5vw);
    top: 17.5vh;
  }
  @media screen and (max-width: 1600px) {
    transform: scale(1.2) translateX(3vw);
    top: 20vh;
  }
  @media screen and (max-width: 1200px) {
    transform: scale(1) translateX(-10vw);
    opacity: 0.2;
    top: 27vh;
    z-index: -1;
  }
  @media screen and (max-width: 800px) {
    transform: scale(0.85) translateX(0vw);
    opacity: 0.2;
    top: 30vh;
    z-index: -1;
  }
  @media screen and (max-width: 600px) {
    transform: scale(0.8) translateX(10vw);
    opacity: 0.2;
    top: 30vh;
    z-index: -1;
  }
  @media screen and (max-width: 400px) {
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
  pointer-events: none;
  path:hover {
    fill: #7dfffa;
    stroke: #7dfffa;
    cursor: pointer;
    transition: fill, 60ms ease-out;
  }
  g {
    pointer-events: auto;
  }
`;

const StyledA2 = styled(motion(A2))`
  z-index: 7;
  opacity: 100%;
  position: absolute;
  top: 4vh;
  right: 20.5vw;
  pointer-events: none;
  path:hover {
    fill: #119499;
    stroke: #119499;
    cursor: pointer;
    transition: fill, 60ms ease-out;
  }
  g {
    pointer-events: auto;
  }
`;
const StyledA3 = styled(motion(A3))`
  z-index: 6;
  opacity: 100%;
  position: absolute;
  top: 3vh;
  right: 21vw;
  pointer-events: none;
  path:hover {
    fill: #4d4d4d;
    stroke: #4d4d4d;
    cursor: pointer;
    transition: fill, 60ms ease-out;
  }
  g {
    pointer-events: auto;
  }
`;

export default LayeredA;

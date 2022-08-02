import React from "react";
//Styles
import styled from "styled-components";
import { Description, Section } from "../styles";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const AboutMeSection = () => {
  const [element, controls] = useScroll();
  return (
    <Section
      id="about"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          A Bit <span>About Me</span>
        </h2>
        <p>
          I am an embedded software engineer based in Auckland that is
          transitioning into Full Stack web development. The tech stack I use is{" "}
          <span>JavaScript</span>, <span>React</span> and <span>Node.js</span>.
        </p>
        <p>
          My favourite way to learn is through projects and this portfolio
          allows me to show you. I am most fulfilled when the results of my work
          improve people's lives.
        </p>
        <p>
          Apart from coding I enjoy bouldering, learning foreign languages and
          hanging out with friends.
        </p>
      </Description>
    </Section>
  );
};

export default AboutMeSection;

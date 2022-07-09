import React from "react";
//Styles
import styled from "styled-components";
import { Description, Section } from "../styles";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const AboutMeSection = () => {
  const [element, controls] = useScroll();
  return (
    <Section id="about">
      <Description>
        <h2>
          A Bit <span>About Me</span>
        </h2>
        <p>
          I am a professional embedded software engineer based in Auckland that
          is learning Full Stack software development. I am focusing on{" "}
          <span>JavaScript</span> and <span>React</span> for the frontend and{" "}
          <span>.NET</span> for the backend.
        </p>
        <p>
          Currently most of my time outside of work is spent working on projects
          which use these technologies.
        </p>
        <p>
          Apart from coding I enjoy calisthenics, bouldering and learning
          foreign languages.
        </p>
      </Description>
    </Section>
  );
};

export default AboutMeSection;

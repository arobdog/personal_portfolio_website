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
          I am an embedded software engineer that is learning Full Stack
          software development.
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

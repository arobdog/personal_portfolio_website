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
          I am an embedded software engineer based in Auckland that is learning
          Full Stack software development. I am focusing primarily on{" "}
          <span>JavaScript</span>, with <span>React</span> for the frontend and{" "}
          <span>Node.js</span> for the backend.
        </p>
        <p>
          Currently most of my time outside of work is spent working on projects
          which use these technologies. I believe that learning by doing is most
          effective.
        </p>
        <p>
          Apart from coding I enjoy calisthenics, bouldering, learning foreign
          languages and hanging out with friends. I also try to live a balanced
          life and do activities outdoors whenever I can.
        </p>
      </Description>
    </Section>
  );
};

export default AboutMeSection;

import React from "react";
//Import Icons
import cSharpIcon from "../img/skills-icons/c_sharp_icon.svg";
import javascriptIcon from "../img/skills-icons/javascript_icon.svg";
import reactIcon from "../img/skills-icons/react_icon.svg";
import pythonIcon from "../img/skills-icons/python_icon.svg";
//import cIcon from "../img/skills-icons/c_programming_language_icon.svg";
import gitIcon from "../img/skills-icons/git_icon.svg";
import vsCodeIcon from "../img/skills-icons/visual_studio_code_icon.svg";
//Styles
import styled from "styled-components";
import { Section, Description, Image } from "../styles";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const SkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <SkillsSummary
      id="skills"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          My <span>Skills</span>
        </h2>
        <div>
          <h3 className="skills-title">Languages</h3>
          <Skills>
            <Skill>
              <div className="icon">
                <img src={pythonIcon} alt="" />
              </div>
              <h3>Python</h3>
            </Skill>
            <Skill>
              <div className="icon">
                <img src={cSharpIcon} alt="" />
              </div>
              <h3>C#</h3>
            </Skill>
          </Skills>
        </div>
        <div>
          <h3 className="skills-title">Technologies</h3>
          <Skills>
            <Skill>
              <div className="icon">
                <img src={reactIcon} alt="React" />
              </div>
              <h3>ReactJS</h3>
            </Skill>
          </Skills>
        </div>
        <div>
          <h3 className="skills-title">Tools</h3>
          <Skills>
            <Skill>
              <div className="icon">
                <img src={gitIcon} alt="Git" />
              </div>
              <h3>Git</h3>
            </Skill>
            <Skill>
              <div className="icon">
                <img src={vsCodeIcon} alt="Git" />
              </div>
              <h3>VS Code</h3>
            </Skill>
          </Skills>
        </div>
      </Description>
    </SkillsSummary>
  );
};

const SkillsSummary = styled(Section)`
  width: 60vw;
  height: 94vh;
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 90%;
    padding: 1rem 0rem 2rem 0rem;
  }
  @media (max-width: 1200px) {
    width: 100vw;
  }
  @media (max-height: 900px) {
    height: 75rem;
  }
  @media (max-height: 850px) {
    height: 60rem;
  }
  @media (max-height: 700px) {
    h2 {
      font-size: 3rem;
      padding: 0;
    }
    div h3 {
      padding-bottom: 0;
      font-size: 1rem;
    }
    height: 30rem;
  }
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Skill = styled.div`
  flex-basis: 8rem;
  display: block;

  h3 {
    background: none;
    color: white;
    padding: 1.5rem 0rem;
  }

  .icon {
    display: block;
    img {
      width: 4rem;
    }
  }
`;

export default SkillsSection;

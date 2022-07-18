import React from "react";
//Import Icons
import nodejsIcon from "../img/skills-icons/node.js_logo.svg";
import javascriptIcon from "../img/skills-icons/javascript_icon.svg";
import reactIcon from "../img/skills-icons/react_icon.svg";
import pythonIcon from "../img/skills-icons/python_icon.svg";
import cIcon from "../img/skills-icons/C.svg";
import gitIcon from "../img/skills-icons/git_icon.svg";
import vsCodeIcon from "../img/skills-icons/visual_studio_code_icon.svg";
//Styles
import styled from "styled-components";
import { Section, Description, Image } from "../styles";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const SkillsSection = ({ skillsSelection, setSkillsSelection }) => {
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
        <div className="skills-container">
          <div>
            <Skills id="frontend-skills">
              <div className={`${skillsSelection[0]}`}>
                <p className=" skills-title">Frontend</p>
                <Skill>
                  <div className="icon">
                    <img src={pythonIcon} alt="" />
                  </div>
                  <p></p>
                </Skill>
                <Skill>
                  <div className="icon">
                    <img src={cIcon} alt="" />
                  </div>
                  <p></p>
                </Skill>
                <Skill>
                  <div className="icon">
                    <img src={javascriptIcon} alt="" />
                  </div>
                  <p></p>
                </Skill>
              </div>
            </Skills>
          </div>
          <div>
            <Skills id="technologies-skills">
              <div className={`${skillsSelection[1]}`}>
                <p className=" skills-title">Technologies</p>
                <Skill>
                  <div className="icon">
                    <img src={reactIcon} alt="React" />
                  </div>
                  <p>React</p>
                </Skill>
              </div>
            </Skills>
          </div>
          <div>
            <Skills id="backend-skills">
              <div className={`${skillsSelection[2]}`}>
                <p className=" skills-title">Backend</p>
                <Skill>
                  <div className="icon">
                    <img src={gitIcon} alt="Git" />
                  </div>
                  <p>Git</p>
                </Skill>

                <Skill>
                  <div className="icon">
                    <img src={vsCodeIcon} alt="Git" />
                  </div>
                  <p>VS Code</p>
                </Skill>
              </div>
            </Skills>
          </div>
        </div>
      </Description>
    </SkillsSummary>
  );
};

const SkillsSummary = styled(Section)`
  width: 60vw;
  height: 94vh;
  position: relative;
  display: block;
  h2 {
    padding-bottom: 2rem;
    top: 0;
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
      font-size: 1rem;
    }
    height: 30rem;
  }
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 40vw;
  position: absolute;
  opacity: 1;
  margin: auto;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  p {
    text-align: center;
  }
  .hidden {
    opacity: 0;
    transform: translateX(-200%);
    transition: all 0.5s ease-out;
  }
  .visible {
    opacity: 1;
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
`;
const Skill = styled.div`
  flex-basis: 6rem;
  display: block;

  p {
    margin: auto;
    background: none;
    color: white;
    padding: 0rem 0rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .icon {
    text-align: center;
    margin: auto;
    overflow: hidden;
    img {
      margin-bottom: 1rem;
      width: 4rem;
      opacity: 0.75;
    }
  }
`;

export default SkillsSection;

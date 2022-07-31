import React from "react";
//Import Icons
import typescriptIcon from "../img/skills-icons/typescript.svg";
import nodejsIcon from "../img/skills-icons/nodejs-icon.svg";
import javascriptIcon from "../img/skills-icons/javascript-icon-primary.svg";
import reactIcon from "../img/skills-icons/react_icon.svg";
import pythonIcon from "../img/skills-icons/python_icon.svg";
import cIcon from "../img/skills-icons/C.svg";
import gitIcon from "../img/skills-icons/git_icon.svg";
import vsCodeIcon from "../img/skills-icons/visual_studio_code_icon.svg";
import reduxIcon from "../img/skills-icons/redux-logo.svg";
import jiraIcon from "../img/skills-icons/jira-icon.svg";
import bitbucketIcon from "../img/skills-icons/bitbucket-icon.svg";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
            <Skills>
              <div className={`${skillsSelection[0]}`}>
                <h2>
                  <span className="title-span">Hover over the A</span> to see my
                  skills!
                </h2>
              </div>
            </Skills>
          </div>
          <div>
            <Skills id="frontend-skills">
              <div className={`${skillsSelection[1]}`}>
                <div className="skill-wrapper">
                  <p>
                    <span>Frontend</span>
                  </p>
                  <Skill>
                    <div className="icon">
                      <img src={javascriptIcon} alt="JavaScript" />
                    </div>
                    <p>JavaScript</p>
                  </Skill>
                  <Skill>
                    <div className="icon">
                      <img src={reactIcon} alt="React" />
                    </div>
                    <p>React</p>
                  </Skill>
                  <Skill>
                    <div className="icon">
                      <img src={reduxIcon} alt="Redux" />
                    </div>
                    <p>Redux</p>
                  </Skill>
                </div>
              </div>
            </Skills>
          </div>
          <div>
            <Skills id="technologies-skills">
              <div className={`${skillsSelection[2]}`}>
                <div className="skill-wrapper">
                  <p>
                    <span>Other Languages</span>
                  </p>
                  <Skill>
                    <div className="icon">
                      <img src={pythonIcon} alt="Python" />
                    </div>
                    <p>Python</p>
                  </Skill>
                  <Skill>
                    <div className="icon">
                      <img src={cIcon} alt="C" />
                    </div>
                    <p>C</p>
                  </Skill>
                  <p>
                    <span>Tools</span>
                  </p>
                  <Skill>
                    <div className="icon">
                      <img src={vsCodeIcon} alt="VS Code" />
                    </div>
                    <p>VS Code</p>
                  </Skill>
                  <Skill>
                    <div className="icon">
                      <img src={gitIcon} alt="Git" />
                    </div>
                    <p>Git</p>
                  </Skill>
                  <Skill>
                    <div className="icon">
                      <img src={bitbucketIcon} alt="Bitbucket" />
                    </div>
                    <p>Bitbucket</p>
                  </Skill>
                  <Skill>
                    <div className="icon">
                      <img src={jiraIcon} alt="Jira" />
                    </div>
                    <p>Jira</p>
                  </Skill>
                </div>
              </div>
            </Skills>
          </div>
          <div>
            <Skills id="backend-skills">
              <div className={`${skillsSelection[3]}`}>
                <div className="skill-wrapper">
                  <p>
                    <span>Backend</span>
                  </p>
                  <Skill>
                    <div className="icon">
                      <img src={typescriptIcon} alt="TypeScript" />
                    </div>
                    <p>TypeScript</p>
                  </Skill>
                  <Skill>
                    <div className="icon">
                      <img src={nodejsIcon} alt="Node.js" />
                    </div>
                    <p>Node.js</p>
                  </Skill>
                </div>
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
    padding-top: 5rem;
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
  height: 35rem;
  width: 35vw;
  position: absolute;
  opacity: 1;
  margin: auto;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  p {
    text-align: center;
    font-size: 1.8rem;
    width: 100%;
    padding: 0.8rem 1rem;
    padding-top: 0rem;
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
  .skill-wrapper {
    padding-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 2rem;
    align-items: center;
    justify-content: center;
  }
  .title-span {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 3rem;
  }
  span {
    font-size: 2rem;
  }
`;
const Skill = styled.div`
  padding-bottom: 2rem;
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
    padding: 0rem 1rem;
    img {
      margin-bottom: 0.8rem;
      width: 4.7rem;
      opacity: 0.8;
    }
  }
`;

export default SkillsSection;

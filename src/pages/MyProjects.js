import { React, useState } from "react";
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Import Project Images
// F&P Data Analysis Tool
import mainScreen from "../img/project_images/fp_data_analysis/MainScreen.PNG";
import selectionScreen from "../img/project_images/fp_data_analysis/SelectionScreen.PNG";
import cycleSelection from "../img/project_images/fp_data_analysis/CycleSelection.PNG";
import reportConfirmation from "../img/project_images/fp_data_analysis/ReportConfirmation.PNG";

// Ember Game Search
import mainPage from "../img/project_images/ember_game_search/MainPage.PNG";
import searchResults from "../img/project_images/ember_game_search/SearchResults.PNG";
import cardDetail1 from "../img/project_images/ember_game_search/CardDetail1.PNG";
import cardDetail2 from "../img/project_images/ember_game_search/CardDetail2.PNG";

const MyProjects = () => {
  const [element, controls] = useScroll();
  //Project Images
  const emberGamesImages = [mainPage, searchResults, cardDetail1, cardDetail2];
  const dataAnalysisImages = [
    mainScreen,
    selectionScreen,
    cycleSelection,
    reportConfirmation,
  ];
  // Counters for image gallery
  const [imageCount1, setImageCount1] = useState(0);
  const [imageCount2, setImageCount2] = useState(0);

  return (
    <Projects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#212121" }}
    >
      <Project>
        <motion.div className="heading" variants={fade}>
          <motion.h2>Ember Game Search</motion.h2>
          <motion.div className="icons">
            <motion.a href="https://github.com/alibahbah/ember" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </motion.a>
            <motion.a href="https://ember-games.netlify.app" target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <motion.div className="content">
          <motion.div className="description">
            <p>Hello there</p>
          </motion.div>
          <motion.div className="image-stack">
            <FontAwesomeIcon
              onClick={() => {
                if (imageCount1 == 0) {
                  setImageCount1(emberGamesImages.length - 1);
                } else {
                  setImageCount1((imageCount1 - 1) % emberGamesImages.length);
                }
              }}
              style={{ cursor: "pointer", padding: "0rem 1rem" }}
              icon={faChevronLeft}
              size="4x"
            />
            <ProjectImages>
              <motion.img
                variants={fade}
                src={emberGamesImages[imageCount1]}
                alt="Ember Games Search Images"
              />
            </ProjectImages>
            <FontAwesomeIcon
              onClick={() => {
                setImageCount1((imageCount1 + 1) % emberGamesImages.length);
              }}
              on
              style={{ cursor: "pointer", padding: "0rem 1rem" }}
              icon={faChevronRight}
              size="4x"
            />
          </motion.div>
        </motion.div>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.div className="heading" variants={fade}>
          <motion.h2>F&P Data Analysis Tool</motion.h2>
          <motion.div className="icons">
            <motion.a
              href="/project_resources/fp_data_analysis/Sample_Report.html"
              target="_blank"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <motion.div className="content">
          <motion.div className="description">
            <p>Hello there</p>
          </motion.div>
          <motion.div className="image-stack">
            <FontAwesomeIcon
              onClick={() => {
                if (imageCount2 == 0) {
                  setImageCount2(dataAnalysisImages.length - 1);
                } else {
                  setImageCount2((imageCount2 - 1) % dataAnalysisImages.length);
                }
              }}
              style={{ cursor: "pointer", padding: "0rem 1rem" }}
              icon={faChevronLeft}
              size="4x"
            />
            <ProjectImages>
              <motion.img
                variants={fade}
                src={dataAnalysisImages[imageCount2]}
                alt="Python Analysis Tool Images"
              />
            </ProjectImages>
            <FontAwesomeIcon
              onClick={() => {
                setImageCount2((imageCount2 + 1) % dataAnalysisImages.length);
              }}
              style={{ cursor: "pointer", padding: "0rem 1rem" }}
              icon={faChevronRight}
              size="4x"
            />
          </motion.div>
        </motion.div>
      </Project>
      <ScrollTop />
    </Projects>
  );
};

const Projects = styled(motion.div)`
  min-height: 100vh;
  /* overflow: hidden; */
  padding: 5rem 10rem;
  @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 5rem;
  .heading {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .icons {
    svg {
      margin: 0.5rem;
      padding: 0.5rem;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  .line {
    height: 0.5rem;
    background: #14ffec;
    margin-bottom: 3rem;
  }
  .content {
    display: flex;
    width: 100%;
    height: 60vh;
    /* overflow: hidden; */
    p {
      padding: 0;
    }
    .description {
      width: 50%;
    }
    .image-stack {
      color: white;
      display: inline;
      margin: auto;
      width: 50%;
    }
  }
  img {
  }
`;

const ProjectImages = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 0.7rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #1f1f1f;
  }
`;

const Hide = styled.div`
  /* overflow: hidden; */
`;

export default MyProjects;

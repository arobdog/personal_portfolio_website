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
            <motion.p variants={fade}>
              Ember is a game search site that displays upcoming and populars
              games. Each game card can be clicked which expands the card and
              provides more details about the game, including which platforms it
              is available on, its rating, a synopsis and more pictures.
              <br />
              <br />
              You can search for a game in the search bar at the top of the
              page. Relevant games are retrieved and displayed as new cards
              under the 'Searched Games' section. The data is retrieved from an
              external API, details can be found at rawg.io.
              <br />
              <br />
              The project was made using <span>React</span>, <span>Redux</span>{" "}
              for state management, <span>Axios</span> for API requests,{" "}
              <span>framer-motion</span> for animations and{" "}
              <span>styled components</span>.
            </motion.p>
          </motion.div>
          <motion.div className="image-gallery noSelect" variants={fade}>
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
            <motion.img
              src={emberGamesImages[imageCount1]}
              alt="Ember Games Search Images"
            />
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
        className="succeeding-project"
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
            <motion.p variants={fade}>
              Testlab Analyser is the internal data analysis tool I developed at
              F&P Appliances. It is used to identify and extract refirgeration
              product features and perform analysis on them. The results are
              compiled in a summary HTML report (click the external link).{" "}
              <br />
              <br />
              It can extract Defrost, Warm Zone, Control Zone test cases and
              more. All cycles are identified and you can select the ones to
              include in the report. Each cycle is verified against the
              criterion of that test case.
              <br />
              <br />
              It was developed in <span>Python</span> using <span>Kivy</span>{" "}
              for the UI, <span>Pandas</span> for data manipulation and
              analysis, <span>NumPy</span> for mathematical operations,{" "}
              <span>Plotly</span> for interactive data visualisations and{" "}
              <span>HTML</span> for report formatting.
            </motion.p>
          </motion.div>
          <motion.div className="image-gallery noSelect" variants={fade}>
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
            <motion.img
              src={dataAnalysisImages[imageCount2]}
              alt="Python Analysis Tool Images"
            />
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
  .succeeding-project {
    padding-top: 10rem;
  }
  @media screen and (max-width: 1200px) {
    .succeeding-project {
      padding-top: 2.5rem;
    }
  }
`;
const Project = styled(motion.div)`
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
    overflow: hidden;
    p {
      padding: 1.5rem 0rem;
      padding-right: 10rem;
      font-size: 1.5rem;
    }
    .description {
      width: 50%;
    }
    .image-gallery {
      color: #626262;
      display: inline-flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
  }
  img {
    width: 81%;
    border-radius: 0.7rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #1f1f1f;
  }
  .noSelect {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .noSelect:focus {
    outline: none !important;
  }
  @media screen and (max-width: 1200px) {
    .heading {
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
    .icons {
      svg {
        margin: 1rem 2rem;
        margin-top: 2rem;
        margin-right: 2rem;
        padding: 0.5rem;
        transform: scale(120%);
      }
    }
    .content {
      display: block;
      width: 100%;
      height: fit-content;
      overflow: visible;
      p {
        padding: 1.5rem 0rem;
        padding-right: 0rem;
        padding-bottom: 4rem;
        font-size: 1.25rem;
      }
      .description {
        width: 100%;
      }
      .image-gallery {
        color: #626262;
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 3rem;
      }
    }
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export default MyProjects;

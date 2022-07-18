import React, { useState } from "react";
//Page Components
import HomeSection from "../components/HomeSection";
import SkillsSection from "../components/SkillsSection";
import LayeredA from "../components/LayeredA";
import AboutMeSection from "../components/AboutMeSection";
//Animations
import { motion, useViewportScroll } from "framer-motion";
import { fade, pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const HomePage = () => {
  const [skillsSelection, setSkillsSelection] = useState([
    "hidden",
    "hidden",
    "visible",
    "hidden",
  ]);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <LayeredA
        skillsSelection={skillsSelection}
        setSkillsSelection={setSkillsSelection}
      />
      <HomeSection />
      <AboutMeSection />
      <SkillsSection
        skillsSelection={skillsSelection}
        setSkillsSelection={setSkillsSelection}
      />
      <ScrollTop />
    </motion.div>
  );
};

export default HomePage;

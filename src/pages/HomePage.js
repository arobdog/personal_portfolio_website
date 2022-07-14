import React from "react";
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
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <LayeredA />
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <ScrollTop />
    </motion.div>
  );
};

export default HomePage;

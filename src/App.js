import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import HomePage from "./pages/HomePage";
import MyProjects from "./pages/MyProjects";
import Nav from "./components/Nav";
import ContactSection from "./components/ContactSection";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/contact" element={<ContactSection />} exact />
          <Route path="/projects" element={<MyProjects />} exact />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react"; // useEffect imported
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhyUs from "./pages/WhyUs";
import Branches from "./pages/Branches";

import ScrollToTop from "./utils/ScrollToTop";
import PageTransition from "./utils/PageTransition";
import CustomCursor from "./utils/CustomCursor";
import SmoothScroll from "./utils/SmoothScroll";
import Welcome from "./pages/Welcome";

// Function to check if the user has visited this session
const hasVisited = sessionStorage.getItem("visited");

function App() {
  // Initialize showWelcome based on sessionStorage. If 'visited' is NOT present, show Welcome (true).
  const [showWelcome, setShowWelcome] = useState(!hasVisited);

  const handleWelcomeComplete = () => {
    // 1. Hide the welcome screen
    setShowWelcome(false);
    // 2. Set the flag in sessionStorage so it doesn't show up again this session
    sessionStorage.setItem("visited", "true");
  };

  return (
    <>
      {/* Welcome Screen - Only on first load of the session */}
      {showWelcome ? (
        <Welcome onComplete={handleWelcomeComplete} />
      ) : (
        <BrowserRouter>
          <CustomCursor />
          <ScrollToTop />
          {/* <SmoothScroll> */}
          <Routes>
            {/* <Route element={<PageTransition />}> */}
            {/* <Route element={<PageTransition />}> */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="why-us" element={<WhyUs />} />
              <Route path="branches" element={<Branches />} />
            </Route>
            {/* </Route> */}
          </Routes>
          {/* </SmoothScroll> */}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import SmoothScroll from "./utils/SmoothScroll";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhyUs from "./pages/WhyUs";
import Branches from "./pages/Branches";
import Welcome from "./pages/Welcome";
import ScrollToTop from "./utils/ScrollToTop";
import CustomCursor from "./utils/CustomCursor";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false
    });
  }, []);

  return (
    <>
      {showWelcome ? (
        <Welcome onComplete={() => setShowWelcome(false)} />
      ) : (
        <SmoothScroll>
          <BrowserRouter>
            <CustomCursor />
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="why-us" element={<WhyUs />} />
                <Route path="branches" element={<Branches />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;

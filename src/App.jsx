import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhyUs from "./pages/WhyUs";

import ScrollToTop from "./utils/ScrollToTop";
import PageTransition from "./utils/PageTransition"; // 👈 add this
import Branches from "./pages/Branches";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PageTransition />}> {/* 👈 Wrap all pages here */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="why-us" element={<WhyUs />} />
            <Route path="branches" element={<Branches />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

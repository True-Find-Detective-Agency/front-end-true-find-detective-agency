import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhyUs from "./pages/WhyUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="home" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="services" element={<Services />} />
         <Route path="contact" element={<Contact />} />
         <Route path="why-us" element={<WhyUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

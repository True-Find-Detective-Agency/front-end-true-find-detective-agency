/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../css/pageTransition.css";

function PageTransition() {
  const [showPage, setShowPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowPage(false); // hide page first
    const timer = setTimeout(() => setShowPage(true), 500); // wait until animation ends
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {!showPage && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="transition-screen"
        >
          <motion.img
          src={logo}
          alt="Logo"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            border: "3px solid white",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        </motion.div>
      )}

      {showPage && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      )}
    </>
  );
}

export default PageTransition;

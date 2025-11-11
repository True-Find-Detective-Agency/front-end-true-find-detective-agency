/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";
import "../css/pageTransition.css";

function PageTransition() {
  const [showPage, setShowPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowPage(false);
    const timer = setTimeout(() => setShowPage(true), 300); // shorter delay for faster loader
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {!showPage && (
        <div className="full-body">
          <div className="loader"></div>
        </div>
      )}

      {showPage && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      )}
    </>
  );
}

export default PageTransition;

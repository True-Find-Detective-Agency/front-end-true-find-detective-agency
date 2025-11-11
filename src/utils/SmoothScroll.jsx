// src/utils/SmoothScroll.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const locoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;

    locoRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // refresh after images load
    const imgs = containerRef.current.querySelectorAll("img");
    let loaded = 0;
    if (imgs.length) {
      imgs.forEach((img) => {
        if (img.complete) {
          loaded++;
        } else {
          img.addEventListener("load", () => {
            loaded++;
            if (locoRef.current && loaded === imgs.length) locoRef.current.update();
          }, { once: true });
        }
      });
      if (loaded === imgs.length && locoRef.current) locoRef.current.update();
    }

    return () => {
      if (locoRef.current) {
        locoRef.current.destroy();
        locoRef.current = null;
      }
    };
  }, []);

  // update when route changes
  useEffect(() => {
    if (locoRef.current) {
      locoRef.current.update();
      locoRef.current.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [location.pathname]);

  // Important: this wrapper must contain the content that scrolls
  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}

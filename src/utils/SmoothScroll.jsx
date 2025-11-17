// src/utils/SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 0.2,   // smoothness (0.8 - 1.4 is best)
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      wheelMultiplier: 1.8,
      touchMultiplier: 1.4,
    });

    // Expose globally (optional, but helpful)
    window.lenis = lenis;

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

import { useEffect, useState, useRef } from "react";

function AnimatedStat({ target, suffix = "", startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return; // only start when triggered
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, [target, startAnimation]);

  return <div className="stat-number">{count}{suffix}</div>;
}

export default function AboutStats() {
  const statsRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // stop observing once started
        }
      },
      { threshold: 0.5 } // 50% of section visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-stats" ref={statsRef}>
      <div className="stat">
        <AnimatedStat target={2000} suffix="+" startAnimation={startAnimation} />
        <div className="stat-label">Cases Solved</div>
      </div>
      <div className="stat">
        <AnimatedStat target={98} suffix="%" startAnimation={startAnimation} />
        <div className="stat-label">Success Rate</div>
      </div>
      <div className="stat">
        <AnimatedStat target={20} suffix="+" startAnimation={startAnimation} />
        <div className="stat-label">Years Experience</div>
      </div>
      <div className="stat">
        <AnimatedStat target={50} suffix="+" startAnimation={startAnimation} />
        <div className="stat-label">Expert Team</div>
      </div>
    </div>
  );
}

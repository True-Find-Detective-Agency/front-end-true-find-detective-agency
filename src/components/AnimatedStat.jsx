/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";

import { env } from "../data/data";

export function AnimatedStat({ target, suffix = "", startAnimation, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

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

  return (
    <div className="stat-number" >
      {count}
      {suffix}
    </div>
  );
}

export default function AboutStats() {
  const statsRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  
  // start counting when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-stats" ref={statsRef}>
      
      <div className="stat">
        <AnimatedStat target={env.totalCases} suffix="+" startAnimation={startAnimation} delay={0} />
        <div className="stat-label">Total Cases</div>
      </div>

      <div className="stat">
        <AnimatedStat target={env.caseSolved} suffix="+" startAnimation={startAnimation} delay={100} />
        <div className="stat-label">Cases Solved</div>
      </div>

      <div className="stat">
        <AnimatedStat target={env.successRate} suffix="%" startAnimation={startAnimation} delay={200} />
        <div className="stat-label">Success Rate</div>
      </div>

      <div className="stat">
        <AnimatedStat target={env.noOfClients} suffix="+" startAnimation={startAnimation} delay={300} />
        <div className="stat-label">Clients</div>
      </div>

      <div className="stat">
        <AnimatedStat target={env.teamExperts} suffix="+" startAnimation={startAnimation} delay={400} />
        <div className="stat-label">Expert Team</div>
      </div>

      <div className="stat">
        <AnimatedStat target={env.yearOfExperience} suffix="+" startAnimation={startAnimation} delay={500} />
        <div className="stat-label">Years Experience</div>
      </div>

    </div>
  );
}

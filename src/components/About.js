import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./About.module.css";

function About() {
  const ref = useRef(null);
  useScrollReveal(ref, { origin: "left", distance: "50px", duration: 1500 });

  return (
    <section id="about" ref={ref} className={styles.about}>
      <h2>About Me</h2>
      <p>
        As a React Frontend Developer, I focus on building scalable,
        performance-driven web applications with clean architecture and reusable
        components.
        <br /> I believe great products are built through attention to detail,
        clear communication, and consistent improvement.
        <br />I take pride in delivering reliable, high-quality work while
        respecting deadlines and client expectations.
        <br />
        Continuous learning is part of my mindset — I constantly explore modern
        tools and best practices to stay ahead in the ever-evolving web
        industry.
      </p>

      {/* Floating Circles */}
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 110,
          height: 110,
          background: "#94daf1ff",
          top: "5%",
          left: "55%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 80,
          height: 80,
          background: "#94daf1ff",
          top: "80%",
          left: "20%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 200,
          height: 200,
          background: "#94daf1ff",
          top: "40%",
          left: "85%",
        }}
      ></div>
    </section>
  );
}

export default About;

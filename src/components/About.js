import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./About.module.css";

function About() {
  const ref = useRef(null);
  useScrollReveal(ref, { origin: "left", distance: "50px", duration: 1500 });

  return (
    <section id="about" ref={ref} className={styles.about}>
      <div className={styles.container}>
        <h2>About Me</h2>

        <p>
          As a React Frontend Developer, I focus on building scalable,
          performance-driven web applications with clean architecture and
          reusable components.
          <br />
          <br />
          I believe great products are built through attention to detail, clear
          communication, and consistent improvement.
          <br />
          <br />
          I take pride in delivering reliable, high-quality work while
          respecting deadlines and client expectations.
          <br />
          <br />
          Continuous learning is part of my mindset — I constantly explore
          modern tools and best practices to stay ahead in the ever-evolving web
          industry.
        </p>
      </div>

      {/* Floating Circles */}
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>
      <div className={styles.circleThree}></div>
    </section>
  );
}

export default About;

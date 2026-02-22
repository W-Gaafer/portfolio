import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Hero.module.css";
import img01 from "../assets/hero01.JPG";

function Hero() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useScrollReveal(imgRef, { origin: "left", distance: "50px", duration: 1500 });
  useScrollReveal(textRef, {
    origin: "right",
    distance: "50px",
    duration: 1500,
    delay: 200,
  });

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.imageContainer}>
        <img
          src={img01}
          alt="Waleed"
          className={styles.profileImg}
          ref={imgRef}
        />
      </div>

      <div className={styles.textContainer} ref={textRef}>
        <h1>Hi, I'm Waleed</h1>
        <h3>React Frontend Developer</h3>
        <p>
          I'm passionate about building interactive and scalable web
          applications using clean architecture principles.
          <br />
          I focus on writing clean, maintainable code and delivering
          high-quality results on time.
          <br />I value client feedback and continuously strive to grow and
          improve with every project.
        </p>

        <a href="#projects" className={styles.button}>
          View my work
        </a>
      </div>

      {/* Floating Circles */}
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>
      <div className={styles.circleThree}></div>
      <div className={styles.circleFour}></div>
    </section>
  );
}

export default Hero;

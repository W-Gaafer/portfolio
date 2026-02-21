import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Hero.module.css";

function Hero() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // Animations عند scroll
  useScrollReveal(imgRef, { origin: "left", distance: "50px", duration: 1500 });
  useScrollReveal(textRef, {
    origin: "right",
    distance: "50px",
    duration: 1500,
    delay: 200,
  });

  return (
    <section id="hero" className={styles.hero}>
      {/* صورة شخصية */}
      <div className={styles.imageContainer}>
        <img
          src="/hero01.jpg"
          alt="Waleed"
          className={styles.profileImg}
          ref={imgRef}
        />
      </div>

      {/* النصوص */}
      <div className={styles.textContainer} ref={textRef}>
        <h1>Hi, I'm Waleed</h1>
        <h3>React Frontend Developer</h3>
        <p>
          I'm a passionate in build interactive and scalable web applications
          using clean architecture principles. <br />I focus on writing clean,
          maintainable code and delivering high-quality results on time.
          <br />I value client feedback and continuously strive to learn, grow,
          and improve with every project.
        </p>
        <button className={styles.button}>
          <a href="#projects">View my work</a>
        </button>
      </div>

      {/* Floating Circles */}
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 100,
          height: 100,
          background: "#94daf1ff",
          top: "10%",
          left: "10%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 200,
          height: 200,
          background: "#94daf1ff",
          top: "15%",
          left: "85%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 150,
          height: 150,
          background: "#94daf1ff",
          top: "70%",
          left: "70%",
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
    </section>
  );
}

export default Hero;

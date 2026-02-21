import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Skills.module.css";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMongodb } from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Skills() {
  const ref = useRef(null);
  useScrollReveal(ref, {
    origin: "bottom",
    distance: "50px",
    duration: 1500,
  });

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, rating: 4 },
        { name: "JavaScript", icon: <FaJs />, rating: 3 },
        { name: "CSS", icon: <FaCss3Alt />, rating: 4 },
        { name: "HTML", icon: <FaHtml5 />, rating: 4 },
        { name: "Tailwind", icon: <SiTailwindcss />, rating: 2 },
      ],
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux", icon: <SiRedux />, rating: 4 },
        { name: "Context API", icon: <FaReact />, rating: 4 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, rating: 3 },
        { name: "MongoDB", icon: <SiMongodb />, rating: 3 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, rating: 4 },
        { name: "GitHub", icon: <FaGithub />, rating: 4 },
      ],
    },
  ];

  const renderStars = (count) => {
    return [...Array(5)].map((_, index) =>
      index < count ? (
        <AiFillStar key={index} className={styles.starFilled} />
      ) : (
        <AiOutlineStar key={index} className={styles.starEmpty} />
      ),
    );
  };

  return (
    <section id="skills" ref={ref} className={styles.skills}>
      <h2>My Skills</h2>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.title} className={styles.card}>
            <h3>{category.title}</h3>

            {category.skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <span className={styles.icon}>{skill.icon}</span>
                <span className={styles.name}>{skill.name}</span>
                <div className={styles.stars}>{renderStars(skill.rating)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Floating Circles */}
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 100,
          height: 100,
          background: "#94daf1ff",
          top: "5%",
          left: "65%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 80,
          height: 80,
          background: "#94daf1ff",
          top: "88%",
          left: "80%",
        }}
      ></div>
    </section>
  );
}

export default Skills;

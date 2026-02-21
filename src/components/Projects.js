import { useRef, useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

function Projects() {
  const ref = useRef(null);
  useScrollReveal(ref, { origin: "bottom", distance: "50px", duration: 1500 });

  const projects = [
    {
      title: "SOLMARE Online Market App.",
      description:
        "A streamlined e-commerce experience designed for simplicity and speed. Users can explore products without authentication, add items to their cart, and seamlessly connect with the seller via direct chat to finalize the purchase and arrange delivery.",
      images: ["/project0101.png", "/project0102.png", "/project0103.png"],
      tech: [
        "React",
        "React Router",
        "HTML",
        "CSS modules",
        "JavaScript",
        "ES6+",
        "Context API",
        "WhatsApp API",
        "Responsive Web Design",
      ],
      github: "https://github.com/W-Gaafer/SOLMARE",
      live: "https://solmare.netlify.app/",
    },
    {
      title: "Fare Share Feature",
      description:
        "This feature simplifies shared expenses during road trips by allowing any partner to cover payments, while the feature automatically settles and summarizes debts at the end of the journey.",
      images: ["/project0201.png", "/project0202.png"],
      tech: ["React", "HTML", "CSS modules", "JavaScript", "ES6+"],
      github: "https://github.com/W-Gaafer/fare-share",
      live: "https://w-gaafer.github.io/fare-share/",
    },
    {
      title: "Handbag App",
      description:
        "The application helps users prepare everything they need for their trip, ensuring that no tasks are forgotten. It is fully online, requires no installation or device storage, and does not require users to create an account or log in. Additionally, it securely preserves user data throughout the entire process until all travel tasks are completed, even across multiple sessions.",
      images: ["/project0301.png", "/project0302.png"],
      tech: [
        "React",
        "HTML",
        "CSS modules",
        "JavaScript",
        "ES6+",
        "Responsive Web Design",
      ],
      github: "https://github.com/W-Gaafer/HandBag",
      live: "https://handibag.netlify.app/",
    },
  ];

  return (
    <section id="projects" ref={ref} className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.cards}>
        {projects.map((proj) => (
          <ProjectCard key={proj.title} proj={proj} />
        ))}
      </div>
      {/* Floating Circles */}
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 130,
          height: 130,
          background: "#94daf1ff",
          top: "4%",
          left: "10%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 110,
          height: 110,
          background: "#94daf1ff",
          top: "30%",
          left: "90%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 110,
          height: 110,
          background: "#94daf1ff",
          top: "60%",
          left: "7%",
        }}
      ></div>
      <div
        className={`${styles.floatingCircle}`}
        style={{
          width: 80,
          height: 80,
          background: "#94daf1ff",
          top: "92%",
          left: "80%",
        }}
      ></div>
    </section>
  );
}

function ProjectCard({ proj }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === proj.images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [proj.images.length]);

  return (
    <div className={styles.card}>
      {/* Slider */}
      <div className={styles.imageWrapper}>
        {proj.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="project demo"
            className={`${styles.sliderImage} ${
              index === current ? styles.active : ""
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>

        <div className={styles.techStack}>
          {proj.tech.map((item) => (
            <span key={item} className={styles.techBadge}>
              {item}
            </span>
          ))}
        </div>

        <div className={styles.buttons}>
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className={styles.githubBtn}
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={proj.live}
            target="_blank"
            rel="noreferrer"
            className={styles.liveBtn}
          >
            <IoMdLink /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

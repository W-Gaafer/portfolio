import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const ref = useRef(null);
  useScrollReveal(ref, { origin: "bottom", distance: "50px", duration: 1000 });

  return (
    <section id="contact" ref={ref} className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via email or connect on social media</p>
      <div className={styles.socials}>
        <a href="mailto:waleed@example.com">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact;

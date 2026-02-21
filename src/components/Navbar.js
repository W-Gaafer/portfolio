import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowProfile(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src="/profile image.jpg"
          alt="Waleed Profile"
          className={`${styles.profileImg} ${showProfile ? styles.show : ""}`}
        />
        <h2 className={styles.logo}>Waleed Gaafer</h2>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

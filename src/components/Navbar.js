import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import img01 from "../assets/profile image.JPG";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src={img01}
          alt="Waleed Profile"
          className={`${styles.profileImg} ${showProfile ? styles.show : ""}`}
        />
        <h2 className={styles.logo}>Waleed Gaafer</h2>
      </div>

      {/* Desktop Links */}
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

      {/* Mobile Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeBtn} onClick={closeMenu}>
            <FaTimes />
          </div>

          <a href="#hero" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

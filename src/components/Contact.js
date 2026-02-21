import { useRef, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const ref = useRef(null);
  useScrollReveal(ref, { origin: "bottom", distance: "50px", duration: 1000 });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const text = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/201554155418?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <section id="contact" ref={ref} className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.container}>
        {/* Left Side - Form */}
        <div className={styles.left}>
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              <FaWhatsapp /> Send
            </button>
          </form>
        </div>

        {/* Right Side - Links */}
        <div className={styles.right}>
          <h3>Contact Info</h3>

          <a href="mailto:your@email.com">
            <FaEnvelope /> waleed.gaafer1994@gmail.com
          </a>

          <a href="tel:+201554155418">
            <FaPhone /> Call me : 015-5415-5418
          </a>

          <a href="https://wa.me/201554155418" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/waleed-gaafer/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/W-Gaafer"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

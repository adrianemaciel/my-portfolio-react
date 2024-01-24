import React from "react";
import "./styles.css";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h2>Contato</h2>
      <div className="social-links">
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511946353112">
          <FaWhatsapp size={50} color="#edecec" className="svg-icon" />
        </a>

        <a href="mailto:adrianemaciel.developer@gmail.com">
          <SiGmail size={50} color="#edecec" className="svg-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/adrianemacieldeveloper/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={50} color="#edecec" className="svg-icon" />
        </a>

        <a
          href="https://github.com/adrianemaciel"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={50} color="#edecec" className="svg-icon" />
        </a>
      </div>
      <div className="footer-text">
        <span> &copy; 2024 - Adriane Maciel</span>
      </div>
    </footer>
  );
};

export default Footer;

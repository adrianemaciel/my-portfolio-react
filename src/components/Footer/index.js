import React from "react";
import "./styles.css";
import WHATSAPP_IMAGE from "../../assets/whatsapp-icon.png";
import GMAIL_IMAGE from "../../assets/gmail-icon.png";
import LINKEDIN_IMAGE from "../../assets/linkedin-icon.png";
import GITHUB_LOGO_IMAGE from "../../assets/github-icon.png";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h2>Contato</h2>
      <div className="social-links">
        <div className="col">
          <div className="icon-link">
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511946353112">
              <img
                className="footer-icon"
                src={WHATSAPP_IMAGE}
                alt="Icone Whatsapp"
              />
              <span>(11)94635-3112</span>
            </a>
          </div>
          <div className="icon-link">
            <a href="mailto:adrianemaciel.developer@gmail.com">
              <img
                className="footer-icon"
                src={GMAIL_IMAGE}
                alt="Icone Gmail"
              />
              <span>adrianemaciel.developer@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="icon-link">
          <div>
            <a
              href="https://www.linkedin.com/in/adrianemacieldeveloper/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-icon"
                src={LINKEDIN_IMAGE}
                alt="Icone Linkedin"
              />
              <span>adrianemacieldeveloper</span>
            </a>
            <a
              href="https://github.com/adrianemaciel"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-icon"
                src={GITHUB_LOGO_IMAGE}
                alt="Icone GitHub"
              />
              <span>adrianemaciel</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <span> &copy; 2023 - Adriane Maciel</span>
      </div>
    </footer>
  );
};

export default Footer;

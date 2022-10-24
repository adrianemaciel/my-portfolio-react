import React from "react";
import "./styles.css";
import WHATSAPP_IMAGE from "../../assets/whatsapp-icon.png";
import GMAIL_IMAGE from "../../assets/gmail-icon.png";
import LINKEDIN_IMAGE from "../../assets/linkedin-icon.png";
import GITHUB_LOGO_IMAGE from "../../assets/github-icon.png";
import CODER_IMAGE from "../../assets/coder-workplace.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <div className="footer-image">
          <img
            className="footer-image"
            src={CODER_IMAGE}
            alt="local de trabalho do codificador"
          />
        </div>
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

        <div className="col">
          <h2 className="footer-title">Desenvolvedora</h2>
          <div>
            <p className="footer-text">Densenvolvido por Adriane Maciel</p>
            <p className="footer-text">Todos os Direitos Reservados</p>
            <a
              href="https://www.linkedin.com/in/adrianemacieldeveloper/"
              target="_blank"
            >
              <img
                className="footer-icon"
                src={LINKEDIN_IMAGE}
                alt="Icone Linkedin"
              />
            </a>
            <a href="https://github.com/adrianemaciel" target="_blank">
              <img
                className="footer-icon"
                src={GITHUB_LOGO_IMAGE}
                alt="Icone GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

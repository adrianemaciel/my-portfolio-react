import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <nav className="navigation">
      <div className="navigation-menu">
        <span className="tags">&lt;</span>
        <a
          target="_blank"
          href="https://github.com/adrianemaciel"
          className="brand-name"
        >
          Adriane Maciel
        </a>
        <span className="tags">/&gt;</span>
      </div>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="# about">Sobre</a>
          </li>
          <li>
            <a href="#courses">Cursos</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Header;

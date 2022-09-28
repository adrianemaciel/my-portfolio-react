import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="navigation">
      <nav>
        <div>
          <p>Adriane</p>
          <p>Maciel</p>
        </div>

        <div>
          <ul>
            <li>
              <a href="#about">Sobre</a>
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
      </nav>
    </header>
  );
};

export default Header;

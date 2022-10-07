import React from "react";
import "./styles.css";
import WOMAN_DEVELOPER_IMAGE from "../../assets/woman-developer.png";

const About = () => {
  return (
    <section className="wrapper" id="#scroll-about">
      <div className="about">
        <div className="wrapper-text">
          <h3>Desenvolvedora Frontend</h3>
          <h4>Adriane Maciel</h4>
          <p>
            Seja bem-vindo(a) a minha página pessoal. Aqui colocarei alguns
            projetos desenvolvidos e as tecnologias usadas durante o processo.
          </p>

          <button>Baixar curriculo</button>
        </div>
        <div className="wrapper-image">
          <img src={WOMAN_DEVELOPER_IMAGE} alt="Woman Developer" />
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./styles.css";
import CODE_BANNER_IMAGE from "../../assets/code-banner.png";
import CURRICULO_PDF from "../../assets/curriculo-adriane-maciel.pdf";

const Home = () => {
  return (
    <section className="wrapper" id="#scroll-about">
      <div className="about">
        <div className="wrapper-text">
          <span>Desenvolvedora Frontend</span>
          <h1>Adriane Maciel</h1>
          <p>
            Seja bem-vindo(a) a minha página pessoal. Aqui colocarei alguns
            projetos desenvolvidos e as tecnologias usadas durante o processo.
          </p>

          <a href={CURRICULO_PDF} download="Currículo Adriane Maciel">
            <button>Baixar currículo</button>
          </a>
        </div>
        <div className="wrapper-image">
          <img src={CODE_BANNER_IMAGE} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Home;

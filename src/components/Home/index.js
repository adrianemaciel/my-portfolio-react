import React from "react";
import "./styles.css";
import WOMAN_DEVELOPER_IMAGE from "../../assets/woman-developer.png";

const Home = () => {
  return (
    <section className="wrapper" id="#scroll-about">
      <div className="about">
        <div className="wrapper-text">
          <span>DESENVOLVEDORA FRONTEND</span>
          <h1>Adriane Maciel</h1>
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

export default Home;
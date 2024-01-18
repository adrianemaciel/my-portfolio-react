import React from "react";
import "./styles.css";
import CODE_BANNER_IMAGE from "../../assets/code-banner.png";

const Home = () => {
  return (
    <section className="wrapper" id="#scroll-about">
      <div className="about">
        <div className="wrapper-text">
          <h1>Adriane Maciel</h1>
          <span>
            Desenvolvedora Frontend e <br/> Graduanda em Análise e Desenvolvimento de
            Sistemas
          </span>
        </div>
        <div className="wrapper-image">
          <img src={CODE_BANNER_IMAGE} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Home;

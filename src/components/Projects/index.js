import React from "react";
import "./styles.css";
import DRI_YOGA_IMAGE from "../../assets/dri-yoga.jpg";
import LGBTQIA_IMAGE from "../../assets/lgbtqia+.jpg";

const Projects = () => {
  return (
    <section className="section-projects" id="projects">
      <div className="wrapper-projects">
        <h2>Projetos</h2>
        <div className="project-cards">
          <div className="project">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://adrianemaciel.github.io/nlw-return-rocketseat/"
            >
              <img
                src="https://media-exp1.licdn.com/dms/image/C560BAQFU-ZKLLdANXg/company-logo_200_200/0/1596796119888?e=1669248000&v=beta&t=4K0MrKZ5q98ck8W3jlM6fnUJesJ_2pnt8MA6V8mha7I"
                alt="Logo Rocketseat"
              />
            </a>
            <h3>DoctorCare</h3>
            <p>
              Evento disponibilizado pela Rocketseat. Desenvolvemos sobre uma
              empresa fictícia chamada DoctorCare. Na qual proporciona
              assistência médica simplificada para todos.
            </p>
          </div>
          <div className="project">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/adrianemaciel/projetoyoga.git"
            >
              <img src={DRI_YOGA_IMAGE} alt="Dri Yoga" />
            </a>
            <h3>DriYoga</h3>
            <p>
              Projeto desenvolvido sobre uma empresa fictícia chamada DriYoga.
              Na qual é possivel agendar aulas online de Yoga.
            </p>
          </div>
          <div className="project">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://adrianemaciel.github.io/LGBTQIA-/"
            >
              <img src={LGBTQIA_IMAGE} alt="Mês do Orgulho" />
            </a>
            <h3>Mês do Orgulho LGBTQIA+</h3>
            <p>
              Projeto desenvolvido em homenagem ao Mês do Orgulho é um mês
              temático em que atenção especial é dada às emancipação e aceitação
              de gays, lésbicas, bissexuais, transexuais, travestis, pessoas
              transgênero, queer, ou questionantes, intersexo ou agênero e
              assexuais ou arromânticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <section className="section-projects">
      <div className="wrapper-projects">
        <h2>Projetos</h2>
        <div className="project-cards">
          <div className="project">
            <a
              target="_blank"
              href="https://adrianemaciel.github.io/nlw-return-rocketseat/"
            >
              <img
                src="https://media-exp1.licdn.com/dms/image/C560BAQFU-ZKLLdANXg/company-logo_200_200/0/1596796119888?e=1669248000&v=beta&t=4K0MrKZ5q98ck8W3jlM6fnUJesJ_2pnt8MA6V8mha7I"
                alt="Logo Rocketseat"
              />
            </a>
            <h3>Nlw Return Rocketseat</h3>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text.
            </p>
          </div>
          <div className="project">
            <a
              target="_blank"
              href="https://github.com/adrianemaciel/projetoyoga.git"
            >
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFY3BGhoMwEEA/company-logo_200_200/0/1626195279622?e=1669248000&v=beta&t=AgJr1Q3itU6z9ETfbAO5XLpAss_dq1ACrHx1uUo9664"
                alt="Logo GitHub"
              />
            </a>
            <h3>Yoga</h3>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text.
            </p>
          </div>
          <div className="project">
            <a target="_blank" href="https://adrianemaciel.github.io/LGBTQIA-/">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFY3BGhoMwEEA/company-logo_200_200/0/1626195279622?e=1669248000&v=beta&t=AgJr1Q3itU6z9ETfbAO5XLpAss_dq1ACrHx1uUo9664"
                alt="Logo GitHub"
              />
            </a>
            <h3>LGBTQIA+</h3>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

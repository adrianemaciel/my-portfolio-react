import React from "react";
import "./styles.css";
import Tech from "../Tech";
import AUTHOR_DEVELOPER_IMAGE from "../../assets/author-developer.jpg";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="container-about">
        <div className="author">
          <div className="about-container-image-border">
            <div className="about-container-image">
              <img
                className="about-image"
                src={AUTHOR_DEVELOPER_IMAGE}
                alt="Author Developer Imagem"
              />
            </div>
          </div>
        </div>
        <div className="about-author">
          <h2>Conheça um pouco sobre mim</h2>
          <p>
            Olá, me chamo Adriane Maciel tenho 25 anos e sou natural de
            Manaus/Am. Possuo graduação e pós graduação em Educação Física
            porém, recorrir a transisão de carreira e há um ano me permitir
            conhecer a programação, desde então venho aprimorando meus
            conhecimentos no Desenvolvimento Web.
          </p>
          <p>
            Atualmente, estou focada em aprimorar conhecimentos sobre
            tecnologias voltadas para Front End. Exactamente, pelo interesse em
            fazer parte do desenvolvimento da interface gráfica do usuário de um
            site e quero tornar disso minha profissão.
          </p>
          <Tech />
        </div>
      </div>
    </section>
  );
};

export default About;

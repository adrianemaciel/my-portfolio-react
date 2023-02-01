import React from "react";
import "./styles.css";

const Courses = () => {
  return (
    <section className="section-courses" id="courses">
      <div className="wrapper-courses">
        <h2>Cursos</h2>
        <div className="courses-cards">
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1rhL5yqF4wPmmt04XKFnXuf5wzIoj6bJL/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://transforma.fbb.org.br/storage/institutions/191211201904245cc0b50b2ff40.jpeg"
                alt="Logo IOS - Instituto da Oportunidade Social"
              />
            </a>
            <h3>Introdução à Programação Web</h3>
            <p>
              Este curso abordou conceitos do funcionamento das
              telecomunicações, protocolos e fluxos de dados da internet;
              Conceitos e práticas com as linguagens HTML5 e CSS3; Comunicação e
              Expressão; Cálculo Matemático;
            </p>
          </div>
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/10ezmecFDMLjaWsjcxrOepmdizjLQpcmb/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://canaldoestudante.com.br/wp-content/uploads/2022/04/bradesco-escola-virtual.jpg"
                alt="Logo da organização Fundação Bradesco"
              />
            </a>
            <h3>HTML Básico</h3>
            <p>
              Este curso foi desenvolvido para auxiliar na criação de páginas
              Web, por meio do Hyper Text Markup Language – mais conhecido como
              HTML.
            </p>
          </div>
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1aW6_xSYeaDjAQ7wGf9fD_Nv992Sq35MZ/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://canaldoestudante.com.br/wp-content/uploads/2022/04/bradesco-escola-virtual.jpg"
                alt="Logo da organização Fundação Bradesco"
              />
            </a>
            <h3>HTML Avançado</h3>
            <p>
              Este curso abordou conceitos que complementam o conteúdo
              apresentado no curso de HTML – Básico. Agora, aprendendo a criar e
              formatar tabelas, frames e formulários, além de documentar
              páginas.
            </p>
          </div>
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1nKAWEl8Eyp4Hz7KQFEn2lQhnK2kWGs3r/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://www.projetodraft.com/wp-content/uploads/2019/12/digital-innovation-one.jpg"
                alt="Logo da organização Digital Innovation One Inc."
              />
            </a>
            <h3>Introdução a criação de websites com HTML5 E CSS3</h3>
            <p>
              Este curso abordou a história e o funcionamento do HTML5 e do
              CSS3, a estrutura básica dessas tecnologias, sua semântica,
              principais elementos e comandos.
            </p>
          </div>
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1PBybBWvhMZgWj3v8PioLHjHrLh5UZztz/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://www.projetodraft.com/wp-content/uploads/2019/12/digital-innovation-one.jpg"
                alt="Logo da organização Digital Innovation One Inc."
              />
            </a>
            <h3>Introdução ao Git e ao GitHub</h3>
            <p>
              Este curso abordou o que é controle de versão e como trabalhar com
              o Git, assim como os seus principais comandos. Introdução ao
              GitHub e sua interface WEB com exemplos de uso de branch e merge
              com um fluxo para trabalhar em equipe e usar no mundo real.
            </p>
          </div>
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/19BSbpmegGnvpAyYMklnGOe5LTU9Gaz7n/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://www.projetodraft.com/wp-content/uploads/2019/12/digital-innovation-one.jpg"
                alt="Logo da organização Digital Innovation One Inc."
              />
            </a>
            <h3>Lógica de Programação Essencial</h3>
            <p>
              Este curso abordou o desenvolvimento de lógica de programação, o
              uso de algoritmos que são sequências de passos bem estabelecidos,
              como por exemplo, uma receita de bolo.
            </p>
          </div>
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1QqEB1pNxq8c6vFP1mzsCUYelWp75HDQx/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://www.projetodraft.com/wp-content/uploads/2019/12/digital-innovation-one.jpg"
                alt="Logo da organização Digital Innovation One Inc."
              />
            </a>
            <h3>Trabalhando com Componentes em React</h3>
            <p>
              Este curso abordou sobre a estrutura e ciclo de vida dos
              componentes React. Explore conceitos de Single Page Application
              (SPA), modularização e boas práticas com componentes React.
            </p>
          </div>
          <div className="cards">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1ZSZah8QBDuG4YOh9rELkTpVD3cFhdmiE/view?usp=sharing"
            >
              <img
                className="cards-image"
                src="https://www.projetodraft.com/wp-content/uploads/2019/12/digital-innovation-one.jpg"
                alt="Logo da organização Digital Innovation One Inc."
              />
            </a>
            <h3>Sintaxe Básica em JavaScript</h3>
            <p>
              O curso tem como objetivo geral explicar de forma didática o que é
              o JavaScript, para que serve e como utilizá-lo em projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

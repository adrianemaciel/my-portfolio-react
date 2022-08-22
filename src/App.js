import "./style.css";
import BANNER_IMAGE from "./assets/banner.png";
import HTML5_IMAGE from "./assets/icons8-html5.png"
import CSS3_IMAGE from "./assets/icons8-css3.png"
import JAVASCRIPT_IMAGE from "./assets/icons8-javascript.png"

function App() {
  return (
    <>
      <header className="navigation">
        <nav>
          <div>
            <p>
              Adriane <br />
              Maciel
            </p>
          </div>

          <div>
            <ul>
              <li>
                <a href="#"></a>Início
              </li>
              <li>
                <a href="#"></a>Sobre
              </li>
              <li>
                <a href="#"></a>Cursos
              </li>
              <li>
                <a href="#"></a>Projetos
              </li>
              <li>
                <a href="#"></a>Contato
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="wrapper">
        <h2>Sobre</h2>
        <div className="about">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <img
            src={BANNER_IMAGE}
            alt="banner dev"
          />
        </div>
      </section>

      <section className="tech">
        <div className="tech-icons">
          <img
            className="icons"
            src={HTML5_IMAGE}
            alt="Logo HTML5"
          />
          <img
            className="icons"
            src={CSS3_IMAGE}
            alt="Logo CSS3"
          />
          <img
            className="icons"
            src={JAVASCRIPT_IMAGE}
            alt="Logo JavaScript"
          />
        </div>
      </section>

      <section class="courses">
        <div>
          <head>
            <h2>Cursos</h2>
          </head>
          <div class="courses-cards">
            <div class="cards">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1rhL5yqF4wPmmt04XKFnXuf5wzIoj6bJL/view?usp=sharing"
              >
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4E0BAQFRgsykuHzwZw/company-logo_200_200/0/1642449006436?e=1664409600&v=beta&t=8FU6W3LXrxIR_ZfkBazcD2ANk4kma3DdNAI9uJ3hkuQ"
                  alt="Logo IOS - Instituto da Oportunidade Social"
                />
              </a>
              <h3>Introdução a Programação Web</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
            <div class="cards">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/10ezmecFDMLjaWsjcxrOepmdizjLQpcmb/view?usp=sharing"
              >
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4E0BAQFOiaQvbDY3hQ/company-logo_200_200/0/1547486273811?e=1664409600&v=beta&t=f7MAEMai7qin41CWNLXxtYbIiSX5a3EE2T4idiN-pbs"
                  alt="Logo Fundação Bradesco - Escola Virtual"
                />
              </a>
              <h3>HTML Básico</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
            <div class="cards">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1aW6_xSYeaDjAQ7wGf9fD_Nv992Sq35MZ/view?usp=sharing"
              >
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4E0BAQFOiaQvbDY3hQ/company-logo_200_200/0/1547486273811?e=1664409600&v=beta&t=f7MAEMai7qin41CWNLXxtYbIiSX5a3EE2T4idiN-pbs"
                  alt="Logo Fundação Bradesco - Escola Virtual"
                />
              </a>
              <h3>HTML Avançado</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
            <div class="cards">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1nKAWEl8Eyp4Hz7KQFEn2lQhnK2kWGs3r/view?usp=sharing"
              >
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQHWY4ymyl70yg/company-logo_200_200/0/1654536512339?e=1664409600&v=beta&t=vsOuw_kDA1zBZqgpidw2MUoCNgPrf0AUzmXJUmGUk-0"
                  alt=""
                />
              </a>
              <h3>Introdução a criação de websites com HTML5 E CSS3</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
            <div class="cards">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1PBybBWvhMZgWj3v8PioLHjHrLh5UZztz/view?usp=sharing"
              >
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQHWY4ymyl70yg/company-logo_200_200/0/1654536512339?e=1664409600&v=beta&t=vsOuw_kDA1zBZqgpidw2MUoCNgPrf0AUzmXJUmGUk-0"
                  alt=""
                />
              </a>
              <h3>Introdução ao Git e ao GitHub</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
            <div class="cards">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/19BSbpmegGnvpAyYMklnGOe5LTU9Gaz7n/view?usp=sharing"
              >
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQHWY4ymyl70yg/company-logo_200_200/0/1654536512339?e=1664409600&v=beta&t=vsOuw_kDA1zBZqgpidw2MUoCNgPrf0AUzmXJUmGUk-0"
                  alt=""
                />
              </a>
              <h3>Lógica de Programação Essencial</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

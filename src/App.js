import "./style.css";
import BANNER_IMAGE from "./assets/banner.png";
import HTML5_IMAGE from "./assets/icons8-html5.png";
import CSS3_IMAGE from "./assets/icons8-css3.png";
import JAVASCRIPT_IMAGE from "./assets/icons8-javascript.png";
import GIT_IMAGE from "./assets/icons8-git.png";
import GITHUB_IMAGE from "./assets/icons8-github.png";
import REACT_IMAGE from "./assets/icons8-react.png";
import WHATSAPP_IMAGE from "./assets/icons8-whatsapp.png";
import GMAIL_IMAGE from "./assets/icons8-gmail-logo.png";
import LINKEDIN_IMAGE from "./assets/icons8-linkedin.png";
import GITHUB_LOGO_IMAGE from "./assets/icons8-github-logo.png";

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
          <img src={BANNER_IMAGE} alt="banner dev" />
        </div>
      </section>

      <section className="tech">
        <div className="tech-icons">
          <img className="icons" src={HTML5_IMAGE} alt="Logo HTML5" />
          <img className="icons" src={CSS3_IMAGE} alt="Logo CSS3" />
          <img className="icons" src={JAVASCRIPT_IMAGE} alt="Logo JavaScript" />
          <img className="icons" src={GIT_IMAGE} alt="Logo Git" />
          <img className="icons" src={GITHUB_IMAGE} alt="Logo GitHub" />
          <img className="icons" src={REACT_IMAGE} alt="Logo React" />
        </div>
      </section>

      <section className="courses">
        <div>
          <h2>Cursos</h2>
          <div className="courses-cards">
            <div className="cards">
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
            <div className="cards">
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
            <div className="cards">
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
            <div className="cards">
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
            <div className="cards">
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
            <div className="cards">
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
                industry's standard dummy text.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div>
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
              <a
                target="_blank"
                href="https://adrianemaciel.github.io/LGBTQIA-/"
              >
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

      <section className="contact">
        <h2>Contato</h2>
        <form className="form">
          <div>
            <label className="label" for="nome">
              Nome:
            </label>
            <input className="input" type="text" id="nome" />
          </div>
          <div>
            <label className="label" for="email">
              E-mail:
            </label>
            <input className="input" type="email" id="email" />
          </div>
          <div>
            <label className="label" for="msg">
              Mensagem:
            </label>
            <textarea className="input" id="msg"></textarea>
          </div>
          <div className="button">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="social-links">
          
          <div className="col-1">
            <h2>Contato</h2>
            <a target="_blank" href="" />
            <div>
              <img src={WHATSAPP_IMAGE} alt="Icone Whatsapp" />
              <span>(11)94635-3112</span>
            </div>
            <div>
              <a target="_blank" href="" />
              <img src={GMAIL_IMAGE} alt="Icone Gmail" />
              <span>adrianemaciel.developer@gmail.com</span>
            </div>
          </div>

          <div className="col-2">
            <h2>Desenvolvedora</h2>
            <div>
              <p>Densenvolvido por Adriane Maciel</p>
              <p>Todos os Direitos Reservados</p>
              <a target="_blank" href="" />
              <img src={LINKEDIN_IMAGE} alt="Icone Linkedin" />
              <a target="_blank" href="" />
              <img src={GITHUB_LOGO_IMAGE} alt="Icone GitHub" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

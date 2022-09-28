import "./style.css";
import WHATSAPP_IMAGE from "./assets/whatsapp-icon.png";
import GMAIL_IMAGE from "./assets/gmail-icon.png";
import LINKEDIN_IMAGE from "./assets/linkedin-icon.png";
import GITHUB_LOGO_IMAGE from "./assets/github-icon.png";
import CODER_IMAGE from "./assets/coder-workplace.png";
import Header from "./components/Header";
import About from "./components/About";
import Tech from "./components/Tech";
import Courses from "./components/Courses";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />

      <About />

      <Tech />

      <Courses />

      <Projects />

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
          <div>
            <img src={CODER_IMAGE} alt="local de trabalho do codificador" />
          </div>
          <div className="col-1">
            <h2>Contato</h2>
            <div className="icon-link">
              <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511946353112">
                <img src={WHATSAPP_IMAGE} alt="Icone Whatsapp" />
                <span>(11)94635-3112</span>
              </a>
            </div>
            <div className="icon-link">
              <a href="mailto:adrianemaciel.developer@gmail.com">
                <img src={GMAIL_IMAGE} alt="Icone Gmail" />
                <span>adrianemaciel.developer@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="col-2">
            <h2>Desenvolvedora</h2>
            <div>
              <p>
                Densenvolvido por Adriane Maciel <br />
                Todos os Direitos Reservados
              </p>
              <a
                href="https://www.linkedin.com/in/adrianemacieldeveloper/"
                target="_blank"
              >
                <img src={LINKEDIN_IMAGE} alt="Icone Linkedin" />
              </a>
              <a href="https://github.com/adrianemaciel" target="_blank">
                <img src={GITHUB_LOGO_IMAGE} alt="Icone GitHub" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

import React from "react";
import "./styles.css";
import Footer from "../Footer";

const Contact = () => {
  return (
    <section className="section-contact">
        <h2>Contato</h2>
      <div className="form-container">
        <form className="form-contact">
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
          <div className="form-button">
            <button id="submit" type="submit">
              Enviar
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;

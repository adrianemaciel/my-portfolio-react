import React from "react";
import "./styles.css";

const Contact = () => {
  return (
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
          <button id="submit" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

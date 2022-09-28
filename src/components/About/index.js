import React from "react";
import "./styles.css";
import WOMAN_DEVELOPER_IMAGE from "../../assets/woman-developer.png";

const About = () => {
  return (
    <section className="wrapper" id="#scroll-about">
      <h2>Sobre</h2>
      <div className="about">
        <div>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <div>
          <img src={WOMAN_DEVELOPER_IMAGE} alt="Woman Developer" />
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./styles.css";
import HTML5_IMAGE from "../../assets/icons8-html5.png";
import CSS3_IMAGE from "../../assets/icons8-css3.png";
import JAVASCRIPT_IMAGE from "../../assets/icons8-javascript.png";
import GIT_IMAGE from "../../assets/icons8-git.png";
import GITHUB_IMAGE from "../../assets/icons8-github.png";
import REACT_IMAGE from "../../assets/icons8-react.png";

const Tech = () => {
  return (
    <section className="tech">
      <h4>Skills</h4>
      <div className="tech-icons">
        <img className="icons" src={HTML5_IMAGE} alt="Logo HTML5" />
        <img className="icons" src={CSS3_IMAGE} alt="Logo CSS3" />
        <img className="icons" src={JAVASCRIPT_IMAGE} alt="Logo JavaScript" />
        <img className="icons" src={GIT_IMAGE} alt="Logo Git" />
        <img className="icons" src={GITHUB_IMAGE} alt="Logo GitHub" />
        <img className="icons" src={REACT_IMAGE} alt="Logo React" />
      </div>
    </section>
  );
};

export default Tech;

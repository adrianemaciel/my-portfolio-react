import React from "react";
import "./styles.css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Tech = () => {
  return (
    <section className="tech">
      <h2>Minhas Habilidades</h2>
      <div className="tech-icons">
        <FaHtml5 size={80} color="#edecec" className="svg-icon" />

        <FaCss3 size={80} color="#edecec" className="svg-icon" />

        <FaJs size={80} color="#edecec" className="svg-icon" />

        <FaGit size={80} color="#edecec" className="svg-icon" />

        <FaGithub size={80} color="#edecec" className="svg-icon" />

        <FaReact size={80} color="#edecec" className="svg-icon" />

        <SiTypescript size={80} color="#edecec" className="svg-icon" />
      </div>
    </section>
  );
};

export default Tech;

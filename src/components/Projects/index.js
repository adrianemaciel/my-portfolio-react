import React, { useEffect, useState } from "react";
import "./styles.css";

const Projects = () => {
  const [repoList, setRepoList] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/adrianemaciel/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          const repoItem = result.map((repo) => {
            return {
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
            };
          });

          const poke_app = repoItem.filter(
            (repo) => repo.name === "poke-app"
          )[0];

          const desafio_nunes_sports = repoItem.filter(
            (repo) => repo.name === "nunes-sports"
          )[0];

          const portfolio = repoItem.filter(
            (repo) => repo.name === "my-portfolio-react"
          )[0];

          const testeFmd = repoItem.filter(
            (repo) => repo.name === "fork-frontend-vagas"
          )[0];

          const testeM3 = repoItem.filter(
            (repo) => repo.name === "teste-desafio-m3"
          )[0];

          const nlw = repoItem.filter(
            (repo) => repo.name === "nlw-return-rocketseat"
          )[0];

          const yoga = repoItem.filter(
            (repo) => repo.name === "projetoyoga"
          )[0];

          const lgbt = repoItem.filter((repo) => repo.name === "LGBTQIA-")[0];

          setRepoList([
            nlw,
            yoga,
            lgbt,
            testeM3,
            testeFmd,
            portfolio,
            desafio_nunes_sports,
            poke_app,
          ]);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <section className="section-projects" id="projects">
      <h2>Projetos</h2>
      <div className="wrapper-projects">
        {repoList &&
          repoList.map((repo, index) => {
            return (
              <div className="project-cards" key={index}>
                <div className="project">
                  <a target="_blank" rel="noreferrer" href={repo.html_url}>
                    <img
                      src="https://i.postimg.cc/26HV8Q4L/octocat-1664567542809.png"
                      alt="Octocat"
                    />
                  </a>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Projects;

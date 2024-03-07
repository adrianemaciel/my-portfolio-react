import React, { useEffect, useState } from "react";
import "./styles.css";

const PROJECT_NAMES = [
  "teste-desafio-m3",
  "fork-frontend-vagas",
  "my-portfolio-react",
  "nunes-sports",
  "poke-app",
];

const Projects = () => {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/adrianemaciel/repos");
        const result = await response.json();

        const filteredRepos = result
          .filter((repo) => PROJECT_NAMES.includes(repo.name))
          .map((repo) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
          }));

        setRepoList(filteredRepos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <section className="section-projects" id="projects">
      <h2>Projetos</h2>
      <div className="wrapper-projects">
        {repoList.map((repo, index) => (
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
        ))}
      </div>
    </section>
  );
};

export default Projects;

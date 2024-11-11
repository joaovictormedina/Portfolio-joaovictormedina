import { useEffect, useState } from "react";
import useLanguage from "./language/useLanguage";
import Projetos from "./project/projetos";

const Projects = () => {
  const { isPort } = useLanguage();
  const [setReposCount] = useState(0);
  const userName = "joaovictormedina";
  const repoUrl = `https://api.github.com/users/${userName}/repos`;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(repoUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setReposCount(data.length);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    fetchRepos();
  });

  return (
    <section id="projects">
      <h2>{isPort ? "Alguns Projetos" : "Some Projects"}</h2>
      <Projetos />
    </section>
  );
};

export default Projects;

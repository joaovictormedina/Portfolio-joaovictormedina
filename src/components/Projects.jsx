import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import useLanguage from "./language/useLanguage";
import { FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import "../styles/Carousel.css";

const Projects = () => {
  const { isPort } = useLanguage();
  const [repos, setRepos] = useState([]);
  const [languagesData, setLanguagesData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const userName = "joaovictormedina";
  const repoUrl = `https://api.github.com/users/${userName}/repos`;

  useEffect(() => {
    const fetchRepos = async () => {
      const token =
        "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";

      try {
        const response = await fetch(repoUrl, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);

        const langPromises = data.map(async (repo) => {
          const langResponse = await fetch(repo.languages_url, {
            headers: {
              Authorization: `token ${token}`,
            },
          });

          if (!langResponse.ok) {
            throw new Error(`HTTP error! status: ${langResponse.status}`);
          }

          const langData = await langResponse.json();
          return { [repo.name]: langData };
        });

        const allLangData = await Promise.all(langPromises);
        const combinedLangData = Object.assign({}, ...allLangData);
        setLanguagesData(combinedLangData);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    fetchRepos();
  }, [repoUrl]);

  const languageIcons = {
    JavaScript: <FaJs size={20} color="#F7DF1E" />,
    HTML: <FaHtml5 size={20} color="#E34F26" />,
    CSS: <FaCss3Alt size={20} color="#1572B6" />,
    TypeScript: <SiTypescript size={20} color="#007ACC" />,
    Java: <FontAwesomeIcon icon={faJava} size="lg" />,
  };

  const getLanguageData = (repoName) => {
    const langData = languagesData[repoName] || {};
    const total = Object.values(langData).reduce(
      (sum, value) => sum + value,
      0
    );

    return Object.entries(langData).map(([language, bytes]) => ({
      name: language,
      percentage: Number(((bytes / total) * 100).toFixed(2)),
      icon: languageIcons[language] || null,
    }));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % repos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + repos.length) % repos.length
    );
  };

  return (
    <section id="projects">
      <h2>{isPort ? "Alguns Projetos" : "Some Projects"}</h2>
      <div className="carousel">
        <div className="carousel-inner">
          {Array.isArray(repos) && repos.length > 0 ? (
            <div className="carousel-item active">
              <ProjectCard
                title={
                  isPort
                    ? repos[currentIndex].name
                    : "Sorry, no translation for this title"
                }
                description={
                  isPort
                    ? repos[currentIndex].description ||
                      "Sem descrição disponível."
                    : "Titles and descriptions are being written directly by the GitHub API, so there is no way to translate them here on the page."
                }
                languages={getLanguageData(repos[currentIndex].name)}
                repoUrl={repos[currentIndex].html_url}
              />
            </div>
          ) : (
            <p>
              {isPort ? "Nenhum projeto disponível." : "No projects available."}
            </p>
          )}
        </div>
        <button className="carousel-control prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default Projects;

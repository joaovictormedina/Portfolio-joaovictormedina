import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import useLanguage from './language/useLanguage';
import { useTheme } from './context/ThemeContext';
import { FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const { isDarkTheme } = useTheme(); 
  const { isPort } = useLanguage(); 
  const [repos, setRepos] = useState([]);
  const [languagesData, setLanguagesData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const userName = 'joaovictormedina';
  const repoUrl = `https://api.github.com/users/${userName}/repos`;

  useEffect(() => {
    const fetchRepos = async () => {
      const token = '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'; 

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
        console.error('Erro ao buscar repositórios:', error);
      }
    };

    fetchRepos();
  }, [repoUrl]);

  const languageIcons = {
    JavaScript: <FaJs size={20} color="#F7DF1E" />,
    HTML: <FaHtml5 size={20} color="#E34F26" />,
    CSS: <FaCss3Alt size={20} color="#1572B6" />,
    TypeScript: <SiTypescript size={20} color="#007ACC" />,
    Java: <FontAwesomeIcon icon={faJava} size="lg" />
  };

  const getLanguageData = (repoName) => {
    const langData = languagesData[repoName] || {};
    const total = Object.values(langData).reduce((sum, value) => sum + value, 0);

    return Object.entries(langData).map(([language, bytes]) => ({
      name: language,
      percentage: ((bytes / total) * 100).toFixed(2),
      icon: languageIcons[language] || null,
    }));
  };

  return (
    <section id="projects">
      <h2>{isPort ? 'Alguns Projetos' : 'Some Projects'}</h2>
      <div className="project-list">
        {Array.isArray(repos) && repos.length > 0 ? (
          <>
            {repos.slice(0, showAll ? repos.length : 3).map((repo, index) => (
              <ProjectCard
                key={index}
                title={isPort ? repo.name : "Sorry, no translation for this title"}
                description={isPort ? repo.description || 'Sem descrição disponível.' : "Titles and descriptions are being written directly by the GitHub API, so there is no way to translate them here on the page."}
                languages={getLanguageData(repo.name)}
                repoUrl={repo.html_url}
              />
            ))}
            {repos.length > 3 && (
              <button
                className={`show-projects ${isDarkTheme ? 'dark' : 'light'}`} 
                onClick={() => setShowAll(!showAll)}
              >
                {showAll 
                  ? (isPort ? 'Esconder os Projetos' : 'Hide Projects') 
                  : (isPort ? 'Mostrar mais Projetos' : 'Show More Projects')}
              </button>
            )}
          </>
        ) : (
          <p>{isPort ? 'Nenhum projeto disponível.' : 'No projects available.'}</p>
        )}
      </div>
    </section>
  );
};

export default Projects;

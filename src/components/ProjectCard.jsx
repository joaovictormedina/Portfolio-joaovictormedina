import PropTypes from 'prop-types';
import { useTheme } from './context/ThemeContext'; 
import useLanguage from './language/useLanguage';

const ProjectCard = ({ title, description, languages, repoUrl, alertComponent }) => {
  const { isDarkTheme } = useTheme(); 
  const { isPort } = useLanguage(); 

  return (
    <div className={`project-card ${!isDarkTheme ? 'light' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      
      {languages && (
        <div className="language-container">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span>{lang.icon} {lang.name} - {lang.percentage}%</span>
            </div>
          ))}
        </div>
      )}
      <br />
      {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          {isPort ? 'Ver no GitHub' : 'View on GitHub'} 
        </a>
      )}

      {alertComponent && (
        <div className="alert-container">
          {alertComponent}
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ),
  repoUrl: PropTypes.string,
  alertComponent: PropTypes.element 
};

export default ProjectCard;

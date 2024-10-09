import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext'; // Importe o hook useTheme

const ProjectCard = ({ image, title, description, alertComponent }) => {
  const { isDarkTheme } = useTheme(); // Obtenha o tema atual

  return (
    <div className={`project-card ${!isDarkTheme ? 'light' : ''}`}>
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>

      {alertComponent && (
        <div className="alert-container">
          {alertComponent}
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alertComponent: PropTypes.element 
};

export default ProjectCard;

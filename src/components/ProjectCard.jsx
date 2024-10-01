import PropTypes from 'prop-types';

const ProjectCard = ({ image, title, description, alertComponent }) => {
  return (
    <div className="project-card">
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

import { Link } from 'react-scroll';
import githubIcon from '../cards/github.svg';
import linkedinIcon from '../cards/linkedin.svg';

const NavBar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='navbar-list'>
          <ul>
            <li>
              <Link to="projects" smooth={true} duration={500} className="nav-item">
                Projetos
              </Link>
            </li>
            <li>
              <span 
                onClick={() => window.open("https://github.com/joaovictormedina", "_blank")}
                className="nav-item"
              >
                Tecnologias
              </span>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="nav-item">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons">
          <a 
            href="https://github.com/joaovictormedina" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a 
            href="https://www.linkedin.com/in/joaovictormedina/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

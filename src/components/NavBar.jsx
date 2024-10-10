import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import githubMouse from '../cards/githubmouse.svg'; 
import linkedinMouse from '../cards/linkedinmouse.svg';
import claroIcon from '../cards/claro.svg';
import escuroIcon from '../cards/escuro.svg'; 
import { useTheme } from './ThemeContext';

const NavBar = () => {
  const { toggleTheme, isDarkTheme, githubImage, linkedinImage } = useTheme();
  
  const [githubIconState, setGithubImage] = useState(githubImage);
  const [linkedinIconState, setLinkedinImage] = useState(linkedinImage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setGithubImage(githubImage);
    setLinkedinImage(linkedinImage);
  }, [githubImage, linkedinImage]);

  const handleGithubMouseEnter = () => setGithubImage(githubMouse);
  const handleGithubMouseLeave = () => setGithubImage(githubImage);
  const handleLinkedinMouseEnter = () => setLinkedinImage(linkedinMouse);
  const handleLinkedinMouseLeave = () => setLinkedinImage(linkedinImage);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className='container'>
        <button className="burger-menu" onClick={toggleMenu}>
          &#9776; 
        </button>
              
        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="projects" smooth={true} duration={500} className="nav-item" onClick={() => setIsMenuOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <span 
                onClick={() => {
                  window.open("https://github.com/joaovictormedina", "_blank");
                  setIsMenuOpen(false);
                }}
                className="nav-item"
              >
                Tecnologias
              </span>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="nav-item" onClick={() => setIsMenuOpen(false)}>
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
            onMouseEnter={handleGithubMouseEnter} 
            onMouseLeave={handleGithubMouseLeave} 
          >
            <img src={githubIconState} alt="GitHub" />
          </a>
          <a 
            href="https://www.linkedin.com/in/joaovictormedina/" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={handleLinkedinMouseEnter} 
            onMouseLeave={handleLinkedinMouseLeave}
          >
            <img src={linkedinIconState} alt="LinkedIn" />
          </a>
          <span onClick={toggleTheme} className="theme-toggle">
            <img src={isDarkTheme ? claroIcon : escuroIcon} alt="Mudar tema" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

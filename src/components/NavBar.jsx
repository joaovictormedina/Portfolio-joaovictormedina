import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import githubMouse from '../cards/githubmouse.svg'; 
import linkedinMouse from '../cards/linkedinmouse.svg';
import claroIcon from '../cards/claro.svg';
import escuroIcon from '../cards/escuro.svg'; 
import { useTheme } from './ThemeContext';

const NavBar = () => {
  const { toggleTheme, isDarkTheme, githubImage, linkedinImage } = useTheme();
  
  // Os estados para as imagens dos ícones da navbar
  const [githubIconState, setGithubImage] = useState(githubImage);
  const [linkedinIconState, setLinkedinImage] = useState(linkedinImage);

  useEffect(() => {
    // Atualiza o estado dos ícones quando as imagens do contexto mudam
    setGithubImage(githubImage);
    setLinkedinImage(linkedinImage);
  }, [githubImage, linkedinImage]); // Inclua as imagens do contexto aqui

  useEffect(() => {
    // Apenas a troca de tema
    setGithubImage(isDarkTheme ? githubImage : githubImage);
    setLinkedinImage(isDarkTheme ? linkedinImage : linkedinImage);
  }, [isDarkTheme, githubImage, linkedinImage]); // Inclua as imagens do contexto aqui também

  const handleGithubMouseEnter = () => {
    setGithubImage(githubMouse);
  };

  const handleGithubMouseLeave = () => {
    setGithubImage(githubImage);
  };

  const handleLinkedinMouseEnter = () => {
    setLinkedinImage(linkedinMouse);
  };

  const handleLinkedinMouseLeave = () => {
    setLinkedinImage(linkedinImage);
  };

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

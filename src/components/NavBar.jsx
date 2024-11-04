import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import githubMouse from "../cards/githubmouse.svg";
import linkedinMouse from "../cards/linkedinmouse.svg";
import claroIcon from "../cards/claro.svg";
import escuroIcon from "../cards/escuro.svg";
import portIcon from "../cards/port.svg";
import engIcon from "../cards/eng.svg";
import { useTheme } from "./context/ThemeContext";
import useLanguage from "./language/useLanguage";

const NavBar = () => {
  const { toggleTheme, isDarkTheme, githubImage, linkedinImage } = useTheme();
  const { toggleLanguage, isPort } = useLanguage();
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
      <div className="container">
        <button className="burger-menu" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {isPort ? "Início" : "Home"}
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {isPort ? "Projetos" : "Projects"}
              </Link>
            </li>
            <li>
              <Link
                to="tecnologies"
                smooth={true}
                duration={500}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {isPort ? "Tecnologias" : "Technologies"}
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {isPort ? "Sobre" : "About"}
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
          <span onClick={toggleLanguage} className="language-toggle">
            <img src={isPort ? engIcon : portIcon} alt="Mudar língua" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

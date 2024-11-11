import PropTypes from 'prop-types'; 
import { createContext, useContext, useState, useEffect } from 'react';
import { icons } from '../../constants/icons';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [githubImage, setGithubImage] = useState(icons.github);
  const [linkedinImage, setLinkedinImage] = useState(icons.linkedin);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    const body = document.body;
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('.hero, section, #projects, #about, .project-list, .footer, .contact-link');

    // Limpar classes antes de adicionar as novas
    body.classList.toggle('dark', isDarkTheme);
    body.classList.toggle('light', !isDarkTheme);
    nav.classList.toggle('dark', isDarkTheme);
    nav.classList.toggle('light', !isDarkTheme);
    sections.forEach(section => {
      section.classList.toggle('dark', isDarkTheme);
      section.classList.toggle('light', !isDarkTheme);
    });

    // Atualizar imagens do GitHub e LinkedIn
    setGithubImage(isDarkTheme ? icons.github : icons.githubLight);
    setLinkedinImage(isDarkTheme ? icons.linkedin : icons.linkedinLight);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme, githubImage, linkedinImage }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);

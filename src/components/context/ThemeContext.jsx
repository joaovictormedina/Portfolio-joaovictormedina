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

    if (isDarkTheme) {
      body.classList.add('dark');
      body.classList.remove('light');
      nav.classList.add('dark');
      nav.classList.remove('light');
      sections.forEach(section => {
        section.classList.add('dark');
        section.classList.remove('light');
      });
      setGithubImage(icons.github);
      setLinkedinImage(icons.linkedin);
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
      nav.classList.add('light');
      nav.classList.remove('dark');
      sections.forEach(section => {
        section.classList.add('light');
        section.classList.remove('dark');
      });
      setGithubImage(icons.githubLight);
      setLinkedinImage(icons.linkedinLight);
    }
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

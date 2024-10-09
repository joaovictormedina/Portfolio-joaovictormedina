import { useEffect, useState } from 'react';
import githubIcon from '../cards/github.svg';
import linkedinIcon from '../cards/linkedin.svg';
import githubIconLight from '../cards/githubclaro.svg';
import linkedinIconLight from '../cards/linkedinclaro.svg';

const Tema = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [githubImage, setGithubImage] = useState(githubIcon);
  const [linkedinImage, setLinkedinImage] = useState(linkedinIcon);

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
      setGithubImage(githubIcon);
      setLinkedinImage(linkedinIcon);
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
      nav.classList.add('light');
      nav.classList.remove('dark');
      sections.forEach(section => {
        section.classList.add('light');
        section.classList.remove('dark');
      });
      setGithubImage(githubIconLight);
      setLinkedinImage(linkedinIconLight);
    }

    console.log("Tema alterado:", isDarkTheme);
    console.log("Github Image:", isDarkTheme ? githubIcon : githubIconLight);
    console.log("LinkedIn Image:", isDarkTheme ? linkedinIcon : linkedinIconLight);

  }, [isDarkTheme]);

  return { toggleTheme, isDarkTheme, githubImage, linkedinImage };
};

export default Tema;

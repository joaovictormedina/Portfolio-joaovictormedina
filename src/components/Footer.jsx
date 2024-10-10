import "../styles/GlobalStyles.css";
import { useTheme } from './ThemeContext';
import { useState, useEffect } from 'react';
import githubMouse from '../cards/githubmouse.svg'; 
import linkedinMouse from '../cards/linkedinmouse.svg';

const Footer = () => {
  const { isDarkTheme, githubImage, linkedinImage } = useTheme();
  const [githubIconState, setGithubImage] = useState(githubImage);
  const [linkedinIconState, setLinkedinImage] = useState(linkedinImage);

  useEffect(() => {
    setGithubImage(githubImage);
    setLinkedinImage(linkedinImage);
  }, [githubImage, linkedinImage]);

  useEffect(() => {
    const newGithubImage = isDarkTheme ? githubImage : githubImage;
    const newLinkedinImage = isDarkTheme ? linkedinImage : linkedinImage;
    setGithubImage(newGithubImage);
    setLinkedinImage(newLinkedinImage);
  }, [isDarkTheme, githubImage, linkedinImage]);

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

  const contacts = [
    {
      title: 'Meu Contato:',
      description: (
        <a
          href="https://wa.me/5512987570827"
          target="_blank"
          rel="noopener noreferrer"
          className={`contact-link ${!isDarkTheme ? 'light' : ''}`}
        >
          21 98757-0827
        </a>
      ),
    },
    {
      title: 'Email:',
      description: (
        <a
          href="mailto:joaovictor.zipp@gmail.com"
          className={`contact-link ${!isDarkTheme ? 'light' : ''}`}
        >
          joaovictor.zipp@gmail.com
        </a>
      ),
    },
  ];

  return (
    <footer className={`footer ${!isDarkTheme ? 'light' : ''}`}>
      <div className="footer-content">
        <div className="footer-contacts">
          {contacts.map((contact, index) => (
            <div className="footer-item" key={index}>
              <h4 className="footer-title">{contact.title}</h4>
              <p>{contact.description}</p>
            </div>
          ))}
        </div>
        <div className="footer-social">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

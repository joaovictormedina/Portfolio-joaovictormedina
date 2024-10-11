import { useEffect, useState } from 'react';
import "../styles/GlobalStyles.css";
import '../styles/Hero.css'; 
import { useTheme } from './context/ThemeContext';
import useLang from './language/useLanguage';

const Hero = () => {
  const { theme } = useTheme();
  const { isPort } = useLang();
  const [h1Revealed, setH1Revealed] = useState(false);
  const [pRevealed, setPRevealed] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setH1Revealed(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setPRevealed(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="hero" className={`hero ${theme}`}>
      <h1 className={`mask ${h1Revealed ? 'revealed' : ''}`}>
        {isPort ? 'Bem-vindo ao meu portfólio!' : 'Welcome to my portfolio!'}
      </h1><br />
      <h1 className={`mask ${h1Revealed ? 'revealed' : ''}`}>
        {isPort ? 'Sou o João Victor Medina.' : "I'm João Victor Medina."}
      </h1>
      <p className={`mask ${pRevealed ? 'revealed' : ''}`}>
        <strong>{isPort ? 'Sou um desenvolvedor full stack' : 'I am a full stack developer'}</strong> 
        {isPort ? ' com expertise em tecnologias modernas, incluindo React e TypeScript para o desenvolvimento de interfaces dinâmicas e escaláveis no front-end. Utilizo Node.js e Express.js para construir APIs robustas e eficientes, garantindo uma comunicação fluida entre o cliente e o servidor.' : ' with expertise in modern technologies, including React and TypeScript for developing dynamic and scalable front-end interfaces. I use Node.js and Express.js to build robust and efficient APIs, ensuring smooth communication between the client and the server.'}
      </p>
    </section>
  );
};

export default Hero;

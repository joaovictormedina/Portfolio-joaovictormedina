import { useEffect, useState } from 'react';
import "../styles/GlobalStyles.css";
import './Hero.css'; 
import { useTheme } from './ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
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
        Bem-vindo ao meu portfólio! 
      </h1><br />
      <h1 className={`mask ${h1Revealed ? 'revealed' : ''}`}>
        Sou o João Victor Medina.
      </h1>
      <p className={`mask ${pRevealed ? 'revealed' : ''}`}>
        <strong>Sou um desenvolvedor full stack</strong> com expertise em <strong>tecnologias modernas,</strong>
        <br />
        incluindo <strong>React</strong> e <strong>TypeScript</strong> para o desenvolvimento de <strong>interfaces dinâmicas</strong>
        <br />
        e escaláveis no front-end. Utilizo <strong>Node.js</strong> e <strong>Express.js</strong> para construir <strong>APIs</strong>
        <br />
        <strong>robustas</strong> e eficientes, garantindo uma <strong>comunicação fluida</strong> entre o cliente
        <br />
        e o servidor.
      </p>
    </section>
  );
};

export default Hero;

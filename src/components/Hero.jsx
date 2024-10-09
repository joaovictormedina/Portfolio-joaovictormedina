import Typewriter from 'typewriter-effect'; // Importando a biblioteca
import "../styles/GlobalStyles.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h1>
        <Typewriter
          options={{
            loop: false, // Não vai repetir o efeito
            delay: 60, // Delay entre cada letra
            cursor: '|', // Cursor piscante
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Bem-vindo ao meu portfólio! <br /><br />Sou o João Victor Medina.')
              .pauseFor(500) // Pausa após a primeira frase
              .start(); // Inicia o efeito
          }}
        />
      </h1>
      <p>
        <Typewriter
          options={{
            loop: false, // Não vai repetir o efeito
            delay: 30, // Delay entre cada letra
            cursor: '|', // Cursor piscante
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<strong>Sou um desenvolvedor full stack</strong> com expertise em <strong>tecnologias modernas,</strong><br />' +
                          'incluindo <strong>React</strong> e <strong>TypeScript</strong> para o desenvolvimento de <strong>interfaces dinâmicas</strong><br />' +
                          'e escaláveis no front-end. Utilizo <strong>Node.js</strong> e <strong>Express.js</strong> para construir <strong>APIs</strong><br />' +
                          '<strong>robustas</strong> e eficientes, garantindo uma <strong>comunicação fluida</strong> entre o cliente<br />' +
                          'e o servidor.<br />')
              .pauseFor(500) // Pausa após a primeira frase
              .start(); // Inicia o efeito
          }}
        />
      </p>
    </section>
  );
};

export default Hero;

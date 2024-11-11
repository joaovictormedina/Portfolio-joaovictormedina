import { useEffect, useState } from "react";
import "../styles/GlobalStyles.css";
import "../styles/Hero.css";
import { useTheme } from "./context/ThemeContext";
import useLang from "./language/useLanguage";

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
      <div className="hero-content">
        <img
          src="/img/foto.jpeg"
          alt="João Victor Medina"
          className="profile-photo"
        />
        <div>
          <h1 className={`mask ${h1Revealed ? "revealed" : ""}`}>
            {isPort
              ? "Bem-vindo ao meu portfólio!"
              : "Welcome to my portfolio!"}
          </h1>
          <br />
          <h1 className={`mask ${h1Revealed ? "revealed" : ""}`}>
            {isPort ? "Sou o João Victor Medina." : "I'm João Victor Medina."}
          </h1>
          <p className={`mask ${pRevealed ? "revealed" : ""}`}>
            <strong>
              {isPort
                ? "Sou um desenvolvedor full stack"
                : "I am a full stack developer"}
            </strong>
            {isPort
              ? " com uma forte capacidade de adaptação a novas tecnologias e uma abordagem focada em resultados. Minha experiência abrange ferramentas modernas como React e TypeScript, que utilizo para criar interfaces dinâmicas e escaláveis, sempre buscando entregar soluções de alto impacto. No backend, aplico minha habilidade em resolver problemas complexos com Node.js, Express.js e Nest.js, focando na construção de APIs robustas e de fácil manutenção."
              : " with a strong ability to adapt to new technologies and a results-focused approach. My experience encompasses modern tools such as React and TypeScript, which I use to create dynamic and scalable interfaces, always seeking to deliver high-impact solutions. On the backend, I apply my ability to solve complex problems with Node.js, Express.js and Nest.js, focusing on building robust and easy-to-maintain APIs."}
          </p>
          <p className={`mask ${pRevealed ? "revealed" : ""}`}>
            {isPort
              ? "Além disso, sou orientado a trabalho colaborativo, utilizando MongoDB e PostgreSQL para garantir uma comunicação eficiente entre cliente e servidor, sempre atento à importância da qualidade e performance dos dados. Tenho um olhar atento para o design responsivo e sigo práticas de desenvolvimento ágil, o que me permite melhorar continuamente a experiência do usuário e otimizar os processos de desenvolvimento. Acredito que a evolução constante e a busca por soluções inovadoras são fundamentais para o sucesso de projetos."
              : " Furthermore, I am oriented towards collaborative work, using MongoDB and PostgreSQL to ensure efficient communication between client and server, always paying attention to the importance of data quality and performance. I have a keen eye for responsive design and follow agile development practices, which allows me to continually improve the user experience and optimize development processes. I believe that constant evolution and the search for innovative solutions are fundamental to the success of projects."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useTheme } from "../context/ThemeContext";
import useLanguage from "../language/useLanguage";

const Certificados = () => {
  const { theme } = useTheme();
  const { isPort } = useLanguage();

  return (
    <div className={`certificados ${theme}`}>
      <h3>{isPort ? "Certificados" : "Certificates"}</h3>
      <ul className="certificates-list">
        <li>
          {isPort
            ? "360h - Engenheiro de Software."
            : "360h - Software Engineer."}
        </li>
        <li>
          {isPort
            ? "42h - Desenvolvimento Full-Stack."
            : "42h - Full-Stack Development."}
        </li>
        <li>
          {isPort
            ? "21h - Desenvolvimento de API com Express.JS."
            : "21h - API Development with Express.js."}
        </li>
        <li>
          {isPort
            ? "27h - Integrando API Rest com Nest.Js."
            : "27h - Integrating REST API with Nest.js."}
        </li>
        <li>
          {isPort
            ? "8h - Jornada Python da Hashtag."
            : "8h - Python Journey by Hashtag."}
        </li>
        <li>
          {isPort
            ? "10h - Desenvolvimento orientado a objetos utilizando a linguagem Python."
            : "10h - Object-Oriented Development using Python."}
        </li>
        <li>
          {isPort
            ? "10h - Desenvolvendo um projeto completo Python com estruturas de dados."
            : "10h - Developing a Complete Python Project with Data Structures."}
        </li>
        <li>
          {isPort
            ? "10h - Criando um projeto com interface gráfica utilizando a linguagem Python."
            : "10h - Creating a Project with Graphical Interface using Python."}
        </li>
        <li>
          {isPort
            ? "30h - Desenvolvimento Front-End."
            : "30h - Front-End Development."}
        </li>
        <li>
          {isPort
            ? "42h - Desenvolvimento Back-End."
            : "42h - Back-End Development."}
        </li>
        <li>{isPort ? "4h - React com Hooks." : "4h - React with Hooks."}</li>
        <li>{isPort ? "21h - SQL e MongoDB." : "21h - SQL and MongoDB."}</li>
        <li>
          {isPort
            ? "16h - Fundamentos de JavaScript."
            : "16h - JavaScript Fundamentals."}
        </li>
        <li>
          {isPort
            ? "15h - Responsividade CSS com Media Queries."
            : "15h - CSS Responsiveness with Media Queries."}
        </li>
        <li>
          {isPort
            ? "40h - Projeto de Automatização de Sistema de Cotação para Poloni."
            : "40h - Quotation System Automation Project for Poloni."}
        </li>
        <li>
          {isPort ? "9h - Java Intermediário." : "9h - Intermediate Java."}
        </li>
      </ul>
    </div>
  );
};

export default Certificados;

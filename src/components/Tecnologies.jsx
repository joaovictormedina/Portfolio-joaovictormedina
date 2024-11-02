import useLanguage from "./language/useLanguage";
import "./tecnologies/tecnologies.css";

const Tecnologies = () => {
  const { isPort } = useLanguage();

  return (
    <section id="about" className="about-section">
      <h2>
        {isPort ? "Tecnologias e Linguagens" : "Technologies and Languages"}
      </h2>
      <p>{isPort ? "Principais habilidades" : "Main skills"}</p>
      <div className="skills-container">
        <div className="skill-item">
          <img src="caminho/para/imagem/react.png" alt="React" />
          <p>{isPort ? "React" : "React"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/typescript.png" alt="TypeScript" />
          <p>{isPort ? "TypeScript" : "TypeScript"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/bootstrap.png" alt="Bootstrap" />
          <p>{isPort ? "Bootstrap" : "Bootstrap"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/nodejs.png" alt="Node.js" />
          <p>{isPort ? "Node.js" : "Node.js"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/express.png" alt="Express.js" />
          <p>{isPort ? "Express.js" : "Express.js"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/nestjs.png" alt="Nest.js" />
          <p>{isPort ? "Nest.js" : "Nest.js"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/postgresql.png" alt="PostgreSQL" />
          <p>{isPort ? "PostgreSQL" : "PostgreSQL"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/mongodb.png" alt="MongoDB" />
          <p>{isPort ? "MongoDB" : "MongoDB"}</p>
        </div>
      </div>
      <p>
        {isPort
          ? "Conhecimentos que possuo são:"
          : "Other skills and knowledge I have include:"}
      </p>
      <div className="skills-container">
        <div className="skill-item">
          <img src="caminho/para/imagem/vue.png" alt="Vue.js" />
          <p>{isPort ? "Vue.js" : "Vue.js"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/mantine.png" alt="Mantine" />
          <p>{isPort ? "Mantine" : "Mantine"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/python.png" alt="Python" />
          <p>{isPort ? "Python" : "Python"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/java.png" alt="Java" />
          <p>{isPort ? "Java" : "Java"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/django.png" alt="Django" />
          <p>{isPort ? "Django" : "Django"}</p>
        </div>
        <div className="skill-item">
          <img src="caminho/para/imagem/mysql.png" alt="MySQL" />
          <p>{isPort ? "MySQL" : "MySQL"}</p>
        </div>
      </div>
      <div className="tools-container">
        <p>
          {isPort
            ? "Figma: Para design e prototipagem."
            : "Figma: For design and prototyping."}
        </p>
        <div className="skill-item">
          <img src="caminho/para/imagem/figma.png" alt="Figma" />
        </div>
        <p>
          {isPort
            ? "Git e GitHub: Para controle de versão."
            : "Git and GitHub: For version control."}
        </p>
        <div className="skill-item">
          <img src="caminho/para/imagem/git.png" alt="Git" />
        </div>
        <p>
          {isPort
            ? "APIs: Com preferência por REST."
            : "APIs: With a preference for REST."}
        </p>
        <div className="skill-item">
          <img src="caminho/para/imagem/api.png" alt="APIs" />
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;

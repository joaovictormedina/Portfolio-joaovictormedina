import useLanguage from "./language/useLanguage";
import "./tecnologies/tecnologies.css";
import reactImg from "../img/react.png";
import typescriptImg from "../img/typescript.png";
import bootstrapImg from "../img/bootstrap.png";
import nodejsImg from "../img/nodejs.png";
import expressImg from "../img/express.png";
import nestjsImg from "../img/nestjs.png";
import postgresqlImg from "../img/postgresql.png";
import mongodbImg from "../img/mongodb.png";
import vuejsImg from "../img/vuejs.png";
import mantineImg from "../img/mantine.png";
import pythonImg from "../img/python.png";
import javaImg from "../img/java.png";
import djangoImg from "../img/django.png";
import mysqlImg from "../img/mysql.png";
import figmaImg from "../img/figma.png";
import gitImg from "../img/git.png";
import apiImg from "../img/api.png";

const Tecnologies = () => {
  const { isPort } = useLanguage();

  const mainSkills = [
    { img: reactImg, name: "React" },
    { img: typescriptImg, name: "TypeScript" },
    { img: bootstrapImg, name: "Bootstrap" },
    { img: nodejsImg, name: "Node.js" },
    { img: expressImg, name: "Express.js" },
    { img: nestjsImg, name: "Nest.js" },
    { img: postgresqlImg, name: "PostgreSQL" },
    { img: mongodbImg, name: "MongoDB" },
  ];

  const additionalSkills = [
    { img: vuejsImg, name: "Vue.js" },
    { img: mantineImg, name: "Mantine" },
    { img: pythonImg, name: "Python" },
    { img: javaImg, name: "Java" },
    { img: djangoImg, name: "Django" },
    { img: mysqlImg, name: "MySQL" },
  ];

  const designSkills = [{ img: figmaImg, name: "Figma" }];

  const controlSkills = [{ img: gitImg, name: "Git" }];

  const apiSkills = [{ img: apiImg, name: "APIs" }];

  return (
    <section id="tecnologies" className="tecnologies-section">
      <h2>
        {isPort ? "Tecnologias e Linguagens" : "Technologies and Languages"}
      </h2>
      <p>{isPort ? "Principais habilidades" : "Main skills"}</p>
      <div className="skills-container">
        {mainSkills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.img} alt={skill.name} />
            <p>{isPort ? skill.name : skill.name}</p>
          </div>
        ))}
      </div>
      <p>
        {isPort
          ? "Conhecimentos que possuo são:"
          : "Other skills and knowledge I have include:"}
      </p>
      <div className="skills-container">
        {additionalSkills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.img} alt={skill.name} />
            <p>{isPort ? skill.name : skill.name}</p>
          </div>
        ))}
      </div>
      <div className="organization-container">
        <p>
          {isPort
            ? "Para design e prototipagem."
            : "For design and prototyping."}
        </p>
        <div className="design-container">
          {designSkills.map((skill) => (
            <div className="organization-item" key={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <p>{isPort ? skill.name : skill.name}</p>
            </div>
          ))}
        </div>
        <p>{isPort ? "Para controle de versão." : "For version control."}</p>
        <div className="control-container">
          {controlSkills.map((skill) => (
            <div className="organization-item" key={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <p>{isPort ? skill.name : skill.name}</p>
            </div>
          ))}
        </div>
        <p>
          {isPort ? "Com preferência por REST." : "With a preference for REST."}
        </p>
        <div className="api-container">
          {apiSkills.map((skill) => (
            <div className="organization-item" key={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <p>{isPort ? skill.name : skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;

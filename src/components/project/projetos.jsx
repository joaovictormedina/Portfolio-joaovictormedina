import { useTheme } from "../context/ThemeContext";
import useLanguage from "../language/useLanguage";
import poloniImage from "../../img/poloni.png";
import eedImage from "../../img/eed.png";
import cmorete from "../../img/cmorete.png";
import "./project.css";

const Projetos = () => {
  const { theme } = useTheme();
  const { isPort } = useLanguage();

  const projects = [
    {
      title: isPort ? "Sistema de Cotação" : "Quotation System",
      description: isPort ? (
        <>
          No <span className="skill">frontend</span>, utilizei{" "}
          <span className="skill">React</span> com{" "}
          <span className="skill">hooks</span>,{" "}
          <span className="skill">Vite</span>,{" "}
          <span className="skill">JavaScript</span> e{" "}
          <span className="skill">TypeScript</span>, criando uma interface de
          usuário moderna e responsiva. No{" "}
          <span className="skill">backend</span>, implementei soluções
          utilizando <span className="skill">Node.js</span> e{" "}
          <span className="skill">Express.js</span> para criar uma{" "}
          <span className="skill">API RESTful</span>, garantindo uma comunicação
          eficaz entre o cliente e o servidor.
        </>
      ) : (
        <>
          In the <span className="skill">frontend</span>, I used{" "}
          <span className="skill">React</span> with{" "}
          <span className="skill">hooks</span>,{" "}
          <span className="skill">Vite</span>,{" "}
          <span className="skill">JavaScript</span>, and{" "}
          <span className="skill">TypeScript</span> to create a modern and
          responsive user interface. In the{" "}
          <span className="skill">backend</span>, I implemented solutions using{" "}
          <span className="skill">Node.js</span> and{" "}
          <span className="skill">Express.js</span> to create a{" "}
          <span className="skill">RESTful API</span>, ensuring effective
          communication between the client and the server.
        </>
      ),
      image: poloniImage,
    },

    {
      title: isPort ? "Espaço Educação 4.0" : "Education Space 4.0",
      description: isPort ? (
        <>
          No <span className="skill">frontend</span>, utilizei{" "}
          <span className="skill">React</span> com{" "}
          <span className="skill">hooks</span>,{" "}
          <span className="skill">Vite</span>,{" "}
          <span className="skill">JavaScript</span> e{" "}
          <span className="skill">TypeScript</span>, criando uma interface
          intuitiva e responsiva. No <span className="skill">backend</span>,
          implementei soluções com <span className="skill">Node.js</span> e{" "}
          <span className="skill">NestJS</span>, além de desenvolver{" "}
          <span className="skill">APIs REST</span> para garantir a comunicação
          eficiente entre os serviços. Para o armazenamento de dados, optei pelo{" "}
          <span className="skill">MongoDB</span>.
        </>
      ) : (
        <>
          In the <span className="skill">frontend</span>, I used{" "}
          <span className="skill">React</span> with{" "}
          <span className="skill">hooks</span>,{" "}
          <span className="skill">Vite</span>,{" "}
          <span className="skill">JavaScript</span>, and{" "}
          <span className="skill">TypeScript</span> to create an intuitive and
          responsive interface. In the <span className="skill">backend</span>, I
          implemented solutions with <span className="skill">Node.js</span> and{" "}
          <span className="skill">NestJS</span>, as well as developing{" "}
          <span className="skill">REST APIs</span> to ensure efficient
          communication between services. For data storage, I opted for{" "}
          <span className="skill">MongoDB</span>.
        </>
      ),
      image: eedImage,
    },
    {
      title: isPort ? "Curso Morete" : "Morete Course",
      description: isPort ? (
        <>
          No <span className="skill">frontend</span>, utilizei{" "}
          <span className="skill">React</span> com{" "}
          <span className="skill">hooks</span>,{" "}
          <span className="skill">Vite</span>,{" "}
          <span className="skill">JavaScript</span> e{" "}
          <span className="skill">TypeScript</span>, resultando em uma interface
          interativa e intuitiva que facilita a navegação dos usuários. Para o{" "}
          <span className="skill">backend</span>, optei por{" "}
          <span className="skill">Node.js</span> e{" "}
          <span className="skill">Nest.js</span>, criando uma{" "}
          <span className="skill">API RESTful</span> robusta que assegura a
          integridade e a segurança dos dados.
        </>
      ) : (
        <>
          In the <span className="skill">frontend</span>, I used{" "}
          <span className="skill">React</span> with{" "}
          <span className="skill">hooks</span>,{" "}
          <span className="skill">Vite</span>,{" "}
          <span className="skill">JavaScript</span>, and{" "}
          <span className="skill">TypeScript</span>, resulting in an interactive
          and intuitive interface that facilitates user navigation. For the{" "}
          <span className="skill">backend</span>, I opted for{" "}
          <span className="skill">Node.js</span> and{" "}
          <span className="skill">Nest.js</span>, creating a robust{" "}
          <span className="skill">RESTful API</span> that ensures data integrity
          and security.
        </>
      ),
      image: cmorete,
    },
  ];

  return (
    <div id="projects" className={`projetos ${theme}`}>
      <h2>{isPort ? "" : ""}</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-text">
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;

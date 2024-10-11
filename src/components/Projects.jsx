import ProjectCard from './ProjectCard';
import PoloniImage from '../img/Poloni.jpg';
import EedImage from '../img/eed.png';
import CMoreteImage from '../img/cmorete.png';
import AlertaPrivado from './Alerta/AlertaPrivado'; 
import Eed from './Alerta/Eed';
import CMorete from './Alerta/CMorete';
import useLanguage from './language/useLanguage';

const Projects = () => {
  const { isPort } = useLanguage();

  const projects = [
    {
      image: PoloniImage,
      title: isPort ? 'Sistema de Cotação Online' : 'Online Quotation System',
      description: isPort 
        ? 'Desenvolvi soluções completas utilizando TypeScript, JavaScript, React, Node.js e Express.js para otimizar a tomada de decisões em projetos, criando interfaces dinâmicas no frontend e servidores robustos no backend.'
        : 'I developed complete solutions using TypeScript, JavaScript, React, Node.js, and Express.js to optimize decision-making in projects, creating dynamic interfaces on the frontend and robust servers on the backend.',
      alertComponent: <AlertaPrivado /> 
    },
    {
      image: EedImage,
      title: isPort ? 'Site para o Espaço Educação 4.0' : 'Website for Education Space 4.0',
      description: isPort 
        ? 'Desenvolvi uma plataforma educacional responsiva em HTML, CSS e JavaScript, focada em acessibilidade e usabilidade. A plataforma melhora a experiência do usuário e facilita o acesso a conteúdos educacionais.'
        : 'I developed a responsive educational platform in HTML, CSS, and JavaScript, focused on accessibility and usability. The platform enhances the user experience and facilitates access to educational content.',
      alertComponent: <Eed /> 
    },
    {
      image: CMoreteImage,
      title: isPort ? 'Site para o Curso Morete' : 'Website for the Morete Course',
      description: isPort 
        ? 'Desenvolvi uma aplicação de gerenciamento de cursos online com controle de progresso e gestão de usuários. A  plataforma é escalável e oferece uma experiência amigável para o gerenciamento de conteúdos educacionais.'
        : 'I developed an online course management application with progress tracking and user management. The platform is scalable and offers a user-friendly experience for managing educational content.',
      alertComponent: <CMorete /> 
    }
  ];

  return (
    <section id="projects">
      <h2>{isPort ? 'Alguns Projetos' : 'Some Projects'}</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

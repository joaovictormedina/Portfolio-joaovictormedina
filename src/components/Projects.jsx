import ProjectCard from './ProjectCard';
import PoloniImage from '../img/Poloni.jpg';
import EedImage from '../img/eed.png';
import CMoreteImage from '../img/cmorete.png';
import AlertaPrivado from './Alerta/AlertaPrivado'; 
import Eed from './Alerta/Eed';
import CMorete from './Alerta/CMorete';

const Projects = () => {
  const projects = [
    {
      image: PoloniImage,
      title: 'Sistema de Cotação Online',
      description: 'Desenvolvi soluções completas utilizando TypeScript, JavaScript, React, Node.js e Express.js para otimizar a tomada de decisões em projetos, criando interfaces dinâmicas no frontend e servidores robustos no backend.',
      alertComponent: <AlertaPrivado /> 
    },
    {
      image: EedImage,
      title: 'Site para o Espaço Educação 4.0',
      description: 'Desenvolvi uma plataforma educacional responsiva em HTML, CSS e JavaScript, focada em acessibilidade e usabilidade. A plataforma melhora a experiência do usuário e facilita o acesso a conteúdos educacionais.',
      alertComponent: <Eed /> 
    },
    {
      image: CMoreteImage,
      title: 'Site para o Curso Morete',
      description: 'Desenvolvi uma aplicação de gerenciamento de cursos online com controle de progresso e gestão de usuários. A  plataforma é escalável e oferece uma experiência amigável para o gerenciamento de conteúdos educacionais.',
      alertComponent: <CMorete /> 
    }
   
  ];

  return (
    <section id="projects">
      <h2>Alguns Projetos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

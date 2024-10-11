import './Experiences.css';
import Rectangle from '../../assets/Rectangle.svg';
import Ellipse1 from '../../assets/Ellipse1.svg';
import Ellipse2 from '../../assets/Ellipse2.svg';
import Ellipse3 from '../../assets/Ellipse3.svg';
import useLanguage from '../language/useLanguage'; 

const Dev = () => {
  const { isPort } = useLanguage();

  const experiences = [
    {
      title: isPort ? '2005' : '2005',
      description: isPort 
        ? `Comecei a desenvolver um servidor de um jogo online, onde manipulava todos os clientes, personagens, itens, criaturas e cenário.<br />
          De uma forma bem amadora, porém funcionava e chegava a ter mais de 100 pessoas online simultaneamente.`
        : `I started developing an online game server, where I managed all clients, characters, items, creatures, and scenery.<br />
          In a very amateur way, it worked and reached over 100 simultaneous online users.`,
      ellipse: Ellipse1,
    },
    {
      title: isPort ? '2023' : '2023',
      description: isPort 
        ? 'Comecei a ministrar aulas de informática para o Ensino Médio Técnico.'
        : 'I started teaching computer science classes for the Technical High School.',
      ellipse: Ellipse2,
    },
    {
      title: isPort ? '2024' : '2024',
      description: isPort 
        ? 'Concluí diversos projetos, alguns deles são: Sistema de cotação online, Site para o Espaço Educação 4.0 e Site para o Curso Morete.'
        : 'I completed several projects, some of them are: Online quotation system, Website for Espaço Educação 4.0, and Website for Curso Morete.',
      ellipse: Ellipse3,
    },
  ];

  return (
    <div className="timeline-container">
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <img src={experience.ellipse} alt={`Ponto ${index + 1}`} className="ellipse" />
          <h3>{experience.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: experience.description }} />
        </div>
      ))}
      <img src={Rectangle} alt="Linha do tempo" className="timeline-bar" />
    </div>
  );
};

export default Dev;

import './Experiences.css';
import Rectangle from '../../assets/Rectangle.svg';
import Ellipse1 from '../../assets/Ellipse1.svg';
import Ellipse2 from '../../assets/Ellipse2.svg';
import Ellipse3 from '../../assets/Ellipse3.svg';

const Dev = () => {
  const experiences = [
    {
      title: '2005',
      description: `Comecei a desenvolver um servidor de um jogo online, onde manipulava todos os clientes, personagens, itens, criaturas e cenário.<br />
      De uma forma bem amadora, porém funcionava e chegava a ter mais de 100 pessoas online simultaneamente.`,
      ellipse: Ellipse1,
    },
    {
      title: '2023',
      description: 'Comecei a ministrar aulas de informática para o Ensino Médio Técnico.',
      ellipse: Ellipse2,
    },
    {
      title: '2024',
      description: 'Concluí diversos projetos, alguns deles são: Sistema de cotação online, Site para o Espaço Educação 4.0 e Site para o Curso Morete.',
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

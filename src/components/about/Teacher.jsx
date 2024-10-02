import './Experiences.css';
import Rectangle from '../../assets/Rectangle.svg';
import Ellipse1 from '../../assets/Ellipse1.svg';
import Ellipse2 from '../../assets/Ellipse2.svg';
import Ellipse3 from '../../assets/Ellipse3.svg';

const Teacher = () => {
  const experiences = [
    {
      title: '2012',
      description: `Fui Coordenador Pedagógico no Centro de Novas Tecnologias para Educação.`,
      ellipse: Ellipse1,
    },
    {
      title: '2017',
      description: 'No Centro Educacional Mendes Duarte, lecionei matemática para o ensino fundamental 2 e médio.<br />Além de atuar como professor de robótica para todos os segmentos educacionais.',
      ellipse: Ellipse2,
    },
    {
      title: '2022',
      description: 'No Colégio Claretiano, atuei como professor titular de matemática para o ensino fundamental 2.<br />Como professor de matemática titular no Instituto Federal do Pará, tive a oportunidade de ministrar aulas para o ensino médio técnico.',
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

export default Teacher;

import './Experiences.css';
import Rectangle from '../../assets/Rectangle.svg';
import Ellipse1 from '../../assets/Ellipse1.svg';
import Ellipse2 from '../../assets/Ellipse2.svg';
import Ellipse3 from '../../assets/Ellipse3.svg';
import useLanguage from '../language/useLanguage';

const Teacher = () => {
  const { isPort } = useLanguage();

  const experiences = [
    {
      title: isPort ? '2012' : '2012',
      description: isPort 
        ? `Fui Coordenador Pedagógico no Centro de Novas Tecnologias para Educação.`
        : `I was a Pedagogical Coordinator at the Center for New Technologies in Education.`,
      ellipse: Ellipse1,
    },
    {
      title: isPort ? '2017' : '2017',
      description: isPort 
        ? 'No Centro Educacional Mendes Duarte, lecionei matemática para o ensino fundamental 2 e médio.<br />Além de atuar como professor de robótica para todos os segmentos educacionais.'
        : 'At the Mendes Duarte Educational Center, I taught mathematics for middle and high school.<br />I also worked as a robotics teacher for all educational segments.',
      ellipse: Ellipse2,
    },
    {
      title: isPort ? '2022' : '2022',
      description: isPort 
        ? 'No Colégio Claretiano, atuei como professor titular de matemática para o ensino fundamental 2.<br />Como professor de matemática titular no Instituto Federal do Pará, tive a oportunidade de ministrar aulas para o ensino médio técnico.'
        : 'At Claretiano College, I served as a full-time mathematics teacher for middle school.<br />As a full-time mathematics teacher at the Federal Institute of Pará, I had the opportunity to teach technical high school classes.',
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

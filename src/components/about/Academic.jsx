import './Experiences.css';
import Rectangle from '../../assets/Rectangle.svg';
import Ellipse1 from '../../assets/Ellipse1.svg';
import Ellipse2 from '../../assets/Ellipse2.svg';
import Ellipse3 from '../../assets/Ellipse3.svg';
import Ellipse4 from '../../assets/Ellipse4.svg';
import Ellipse5 from '../../assets/Ellipse5.svg';
import useLanguage from '../language/useLanguage'; 

const Academic = () => {
  const { isPort } = useLanguage();

  const experiences = [
    {
      title: isPort ? '2005' : '2005',
      description: isPort ? 'Iniciei meu curso de Inglês e concluí em 2010.' : 'I started my English course and finished in 2010.',
      ellipse: Ellipse1,
    },
    {
      title: isPort ? '2016' : '2016',
      description: isPort ? 'Iniciei na faculdade de Licenciatura em Matemática e concluí em 2019.' : 'I started my Mathematics degree and finished in 2019.',
      ellipse: Ellipse2,
    },
    {
      title: isPort ? '2019' : '2019',
      description: isPort ? 'Iniciei e concluí as Pós-Graduações em Matemática Financeira, Estatística, Gestão Escolar e Coordenação Pedagógica.' : 'I started and finished Postgraduate degrees in Financial Mathematics, Statistics, School Management, and Pedagogical Coordination.',
      ellipse: Ellipse3,
    },
    {
      title: isPort ? '2023' : '2023',
      description: isPort ? 'Iniciei e concluí mais uma graduação em Licenciatura em Informática.' : 'I started and finished another degree in Computer Science.',
      ellipse: Ellipse4,
    },
    {
      title: isPort ? '2024' : '2024',
      description: isPort ? 'Iniciei a graduação de Análise e Desenvolvimento de Sistemas, com término em 06/2026. <br /> E também iniciei o curso de Engenheiro de Software (FullStack) na Escola DNC.' : 'I started the Systems Analysis and Development degree, finishing in 06/2026. <br /> I also started the Software Engineering (FullStack) course at Escola DNC.',
      ellipse: Ellipse5,
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

export default Academic;

import './Experiences.css'; // Importa o CSS unificado
import Rectangle from '../../assets/Rectangle.svg'; // Ajuste o caminho conforme necessário
import Ellipse1 from '../../assets/Ellipse1.svg'; // Ajuste o caminho conforme necessário
import Ellipse2 from '../../assets/Ellipse2.svg'; // Ajuste o caminho conforme necessário
import Ellipse3 from '../../assets/Ellipse3.svg'; // Ajuste o caminho conforme necessário
import Ellipse4 from '../../assets/Ellipse4.svg'; // Ajuste o caminho conforme necessário
import Ellipse5 from '../../assets/Ellipse5.svg'; // Ajuste o caminho conforme necessário

const Academic = () => {
  const experiences = [
    {
      title: '2005',
      description: 'Iniciei meu curso de Inglês e concluí em 2010.',
      ellipse: Ellipse1,
    },
    {
      title: '2016',
      description: `Iniciei na faculdade de Licenciatura em Matemática e concluí em 2019.`,
      ellipse: Ellipse2,
    },
    {
      title: '2019',
      description: 'Iniciei e concluí as Pós-Graduações em Matemática Financeira, Estatística, Gestão Escolar e Coordenação Pedagógica.',
      ellipse: Ellipse3,
    },
    {
      title: '2023',
      description: 'Iniciei e concluí mais uma graduação em Licenciatura em Informática.',
      ellipse: Ellipse4,
    },
    {
      title: '2024',
      description: 'Iniciei a graduação de Análise e Desenvolvimento de Sistemas, com término em 06/2026. <br /> E também iniciei o curso de Engenheiro de Software (FullStack) na Escola DNC.',
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

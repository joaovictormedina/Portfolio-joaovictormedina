import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import Dev from './about/Dev'; 
import Teacher from './about/Teacher';
import Academic from './about/Academic'; 

const AboutMe = () => {
  const [profession, setProfession] = useState('Dev'); 
  const [bio, setBio] = useState(''); 
  const [loading, setLoading] = useState(true); 
  const [content, setContent] = useState(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  useEffect(() => {
    const fetchBio = async (selectedProfession) => {
      setLoading(true); 
      return new Promise((resolve) => {
        setTimeout(() => {
          const bios = {
            Dev: 'Comecei a me aprofundar em 2024, mas programava desde 2005 como amador.',
            Teacher: 'Comecei em 2007 e atualmente estou migrando de carreira.',
            Academic: 'Iniciei meus estudos no ensino superior em 2007 e nunca mais parei',
          };
          resolve(bios[selectedProfession]);
        }, 1000); 
      });
    };

    fetchBio(profession).then(bio => {
      setBio(bio);
      setLoading(false); 
    });

    const fetchContent = async () => {
      setLoading(true); 
      return new Promise((resolve) => {
        setTimeout(() => {
          switch (profession) {
            case 'Dev':
              resolve(<Dev />);
              break; 
            case 'Teacher':
              resolve(<Teacher />);
              break;
            case 'Academic':
              resolve(<Academic />);
              break; 
            default:
              resolve(null); 
              break; 
          }
        }, 1000); 
      });
    };

    fetchContent().then(content => {
      setContent(content);
      setLoading(false); 
    });

  }, [profession]);

  const selectStyles = {
    dropdown: {
      width: isMobile ? '75%' : '380px',
      fontSize: isMobile ? '15px' : '23px',
      color: 'black',
      backgroundColor: '#f0f0f0',
    },
    item: {
      textAlign: 'center',
      fontSize: isMobile ? '15px' : '23px',
      color: 'black',
      '&[data-selected]': {
        backgroundColor: '#d0eaff',
      },
      '&:hover': {
        backgroundColor: '#b0e0ff',
        color: 'black',
      },
    },
    input: {
      textAlign: 'center',
      width: isMobile ? '75%' : '380px',
      margin: '0 auto',
      fontSize: isMobile ? '15px' : '23px',
      color: 'black',
    },
    placeholder: {
      color: 'gray',
      fontSize: isMobile ? '15px' : '23px',
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: isMobile ? 'column' : 'row',
    },
  };

  return (
    <section id="about" className="about-section">
      <h2>Sobre Mim</h2>
      <p>Escolha a experiência que deseja saber:</p>
      <br />
      <div className="select-container"></div>
      <Select
        value={profession}
        onChange={setProfession}
        data={[
          { value: 'Dev', label: 'Desenvolvedor Full Stack' },
          { value: 'Teacher', label: 'Professor de Matemática' },
          { value: 'Academic', label: 'Acadêmica' },
        ]}
        placeholder="Selecione uma carreira"
        styles={selectStyles}
      />
      <p><i>{loading ? 'Carregando biografia, por favor, aguarde...' : bio}</i></p>
      {content}
    </section>
  );
};

export default AboutMe;

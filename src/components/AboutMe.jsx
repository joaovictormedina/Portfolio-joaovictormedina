import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import Dev from './about/Dev'; 
import Teacher from './about/Teacher';
import Academic from './about/Academic'; 
import useLanguage from './language/useLanguage';

const AboutMe = () => {
  const [profession, setProfession] = useState('Dev'); 
  const [bio, setBio] = useState(''); 
  const [loading, setLoading] = useState(true); 
  const [content, setContent] = useState(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
  const { isPort } = useLanguage();

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
            Dev: isPort 
              ? 'Comecei a me aprofundar em 2024, mas programava desde 2005 como amador.'
              : 'I started diving deeper in 2024, but I have been programming as an amateur since 2005.',
            Teacher: isPort 
              ? 'Comecei em 2007 e atualmente estou migrando de carreira.'
              : 'I started in 2007 and am currently transitioning careers.',
            Academic: isPort 
              ? 'Iniciei meus estudos no ensino superior em 2007 e nunca mais parei.'
              : 'I started my higher education studies in 2007 and never stopped.',
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

  }, [profession, isPort]);

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
      <h2>{isPort ? 'Sobre Mim' : 'About Me'}</h2>
      <p>{isPort ? 'Escolha a experiência que deseja saber:' : 'Choose the experience you want to know about:'}</p>
      <br />
      <div className="select-container"></div>
      <Select
        value={profession}
        onChange={setProfession}
        data={[
          { value: 'Dev', label: isPort ? 'Desenvolvedor Full Stack' : 'Full Stack Developer' },
          { value: 'Teacher', label: isPort ? 'Professor de Matemática' : 'Mathematics Teacher' },
          { value: 'Academic', label: isPort ? 'Acadêmica' : 'Academic' },
        ]}
        placeholder={isPort ? 'Selecione uma carreira' : 'Select a career'}
        styles={selectStyles}
      />
      <p><i>{loading ? (isPort ? 'Carregando biografia, por favor, aguarde...' : 'Loading biography, please wait...') : bio}</i></p>
      {content}
    </section>
  );
};

export default AboutMe;

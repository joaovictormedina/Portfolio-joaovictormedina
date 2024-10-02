import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import Dev from './about/Dev'; 
import Teacher from './about/Teacher';
import Academic from './about/Academic'; 

const AboutMe = () => {
  const [profession, setProfession] = useState('Dev'); 
  const [bio, setBio] = useState(''); 
  
  useEffect(() => {
    const fetchBio = async (selectedProfession) => {
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
    });

  }, [profession]); 

  const renderContent = () => {
    switch (profession) {
      case 'Dev':
        return <Dev />;
      case 'Teacher':
        return <Teacher />;
      case 'Academic':
        return <Academic />;
      default:
        return null; 
    }
  };

  return (
    <section id="about" style={{ textAlign: 'center' }}>
      <h2>Sobre Mim</h2>
      <p>Escolha a experiência de qual carreira você quer saber:</p>
      <br />
      <Select
        value={profession}
        onChange={setProfession}
        data={[
          { value: 'Dev', label: 'Desenvolvedor Full Stack' },
          { value: 'Teacher', label: 'Professor de Matemática' },
          { value: 'Academic', label: 'Acadêmica' },
        ]}
        placeholder="Selecione uma carreira"
        styles={{
          dropdown: {
            width: '450px',
            fontSize: '30px',
          },
          item: {
            textAlign: 'center',
            fontSize: '30px',
          },
          input: {
            textAlign: 'center',
            width: '450px',
            margin: '0 auto',
            fontSize: '30px',
          },
          root: {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      />
      <p><i>{bio || 'Carregando biografia, por favor, aguarde...'}</i></p> 
      {renderContent()} 
    </section>
  );
};

export default AboutMe;

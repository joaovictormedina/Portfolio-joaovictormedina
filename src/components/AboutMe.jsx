import { useState, useEffect } from 'react';
import { Select } from '@mantine/core'; // Importe o componente Select do Mantine
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
            width: '450px', // Aumenta o tamanho da lista de opções
            fontSize: '30px', // Aumenta o tamanho da fonte dentro do dropdown
          },
          item: {
            textAlign: 'center', // Centraliza o texto dos itens
            fontSize: '30px', // Aumenta o tamanho da fonte dos itens
          },
          input: {
            textAlign: 'center', // Centraliza o texto no controle (input)
            width: '450px', // Ajusta o tamanho do controle
            margin: '0 auto', // Centraliza o select horizontalmente
            fontSize: '30px', // Aumenta o tamanho da fonte do controle
          },
          root: {
            display: 'flex',
            justifyContent: 'center',
            // Certifica que o select fica centralizado
          },
        }}
      />
      <p><i>{bio || 'Carregando biografia, por favor, aguarde...'}</i></p> 
      {renderContent()} 
    </section>
  );
};

export default AboutMe;

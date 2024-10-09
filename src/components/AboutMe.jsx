import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import Dev from './about/Dev'; 
import Teacher from './about/Teacher';
import Academic from './about/Academic'; 

const AboutMe = () => {
  const [profession, setProfession] = useState('Dev'); 
  const [bio, setBio] = useState(''); 
  const [loading, setLoading] = useState(true); 
  const [content, setContent] = useState(null); // Estado para o conteúdo renderizado

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
              break; // Adiciona o break
            case 'Teacher':
              resolve(<Teacher />);
              break; // Adiciona o break
            case 'Academic':
              resolve(<Academic />);
              break; // Adiciona o break
            default:
              resolve(null); 
              break; // Adiciona o break
          }
        }, 1000); // Delay de 1 segundo
      });
    };

    fetchContent().then(content => {
      setContent(content);
      setLoading(false); // Finaliza o carregamento
    });

  }, [profession]); // Executa o efeito sempre que a profissão mudar

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
      color: 'black', 
      backgroundColor: '#f0f0f0', 
    },
    item: {
      textAlign: 'center',
      fontSize: '30px',
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
      width: '450px',
      margin: '0 auto',
      fontSize: '30px',
      color: 'black',
    },
    placeholder: {
      color: 'gray',
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  }}
/>
      <p><i>{loading ? 'Carregando biografia, por favor, aguarde...' : bio}</i></p> 
      {content} 
    </section>
  );
};

export default AboutMe;

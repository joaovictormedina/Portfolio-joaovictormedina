import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types'; 
import { fetchGitHubReposCount } from './Api/api.jsx'; 

const GitHubProjectsCounter = ({ username }) => {
  const [repoCount, setRepoCount] = useState(0); 
  const [displayCount, setDisplayCount] = useState(0); 
  const ref = useRef(null); // Ref para o componente

  useEffect(() => {
    const getRepoCount = async () => {
      try {
        const count = await fetchGitHubReposCount(username);
        setRepoCount(count);
      } catch (error) {
        console.error(error);
      }
    };
    getRepoCount();
  }, [username]);

  // Função memoizada para iniciar a contagem
  const startCounting = useCallback(() => {
    setDisplayCount(0); // Reseta o displayCount
    let start = 0;
    const end = repoCount;

    if (end === 0) return; // Se não houver repositórios, não faz nada

    const duration = 2000; // Duração total em milissegundos
    const incrementTime = Math.floor(duration / end) || 1; // Intervalo de incremento

    const timer = setInterval(() => {
      start += 1;
      setDisplayCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    
    return () => clearInterval(timer); // Limpeza do timer
  }, [repoCount]);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { // Verifica se o componente está visível
          startCounting(); // Inicia a contagem
        } else {
          resetCounting(); // Reseta a contagem quando sai da tela
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect);
    const currentRef = ref.current; // Copia o valor da referência

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Usa a variável copiada
      }
      clearInterval(); // Limpeza do timer ao desmontar
    };
  }, [startCounting]); // Adiciona startCounting como dependência

  const resetCounting = () => {
    setDisplayCount(0); // Reseta a contagem
  };

  return (
    <section id="github-projects" ref={ref}>
      <h2 className='title-git'>Projetos no GitHub</h2>
      <p><br /><br />
        <strong className='Count'>{displayCount}</strong> 
      </p>
    </section>
  );
};

// Definição de propTypes para validação das props
GitHubProjectsCounter.propTypes = {
  username: PropTypes.string.isRequired, // username deve ser uma string e é obrigatório
};

export default GitHubProjectsCounter;

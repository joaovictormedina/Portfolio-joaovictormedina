import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types'; 
import { fetchGitHubReposCount } from './Api/api.jsx'; 

const GitHubProjectsCounter = ({ username }) => {
  const [repoCount, setRepoCount] = useState(0); 
  const [displayCount, setDisplayCount] = useState(0); 
  const ref = useRef(null);

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

  const startCounting = useCallback(() => {
    setDisplayCount(0);
    let start = 0;
    const end = repoCount;

    if (end === 0) return;

    const duration = 2000;
    const incrementTime = Math.floor(duration / end) || 1;

    const timer = setInterval(() => {
      start += 1;
      setDisplayCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [repoCount]);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          resetCounting();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      clearInterval();
    };
  }, [startCounting]);

  const resetCounting = () => {
    setDisplayCount(0);
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

GitHubProjectsCounter.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GitHubProjectsCounter;

import { MantineProvider } from '@mantine/core';
import NavBar from './components/NavBar';
import { ThemeProvider } from './components/ThemeContext';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ApiGit from './components/ApiGit';
import Footer from './components/Footer';
import '@mantine/core/styles.css';

const App = () => {
  return (
     <ThemeProvider>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <NavBar />
        <Hero />
        <ApiGit username="joaovictormedina" />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
      </MantineProvider>
      </ThemeProvider>
  );
};

export default App;
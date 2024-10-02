import { MantineProvider } from '@mantine/core';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ApiGit from './components/ApiGit';
import Footer from './components/Footer';
import '@mantine/core/styles.css';

const App = () => {
  return (
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
  );
};

export default App;
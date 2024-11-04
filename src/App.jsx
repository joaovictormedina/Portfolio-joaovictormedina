import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/context/ThemeContext";
import { LanguageProvider } from "./components/context/LanguageContext";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ApiGit from "./components/ApiGit";
import Footer from "./components/Footer";
import Tecnologies from "./components/Tecnologies";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <NavBar />
          <Hero />
          <ApiGit username="joaovictormedina" />
          <Projects />
          <Tecnologies />
          <AboutMe />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

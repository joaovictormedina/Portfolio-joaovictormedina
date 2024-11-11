import useLanguage from "./language/useLanguage";
import Formacoes from "./about/formacoes";
import Certificados from "./about/certificados";

const AboutMe = () => {
  const { isPort } = useLanguage();

  return (
    <section id="about" className="about-section">
      <h2>{isPort ? "" : ""}</h2>
      <Formacoes />
      <Certificados />
    </section>
  );
};

export default AboutMe;
